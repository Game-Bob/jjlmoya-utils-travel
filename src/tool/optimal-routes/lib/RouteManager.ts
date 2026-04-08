export interface RoutePoint {
    id: number;
    lat: number;
    lng: number;
    marker: any;
    name: string;
    address?: string;
}

export class RouteManager extends EventTarget {
    private map: any = null;
    private points: RoutePoint[] = [];
    private routeLine: any = null;
    private L: any = null;

    constructor(L: any) {
        super();
        this.L = L;
    }

    initMap(elementId: string) {
        const el = document.getElementById(elementId);
        if (!el || !this.L) return;

        this.map = this.L.map(elementId).setView([40.416775, -3.70379], 6);

        this.L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
            attribution: '&copy; OpenStreetMap &copy; CARTO',
            subdomains: "abcd",
            maxZoom: 20,
        }).addTo(this.map);

        this.map.on("click", (e: any) => {
            this.addPoint(e.latlng.lat, e.latlng.lng);
        });

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((pos) => {
                this.map?.setView([pos.coords.latitude, pos.coords.longitude], 13);
            });
        }
    }

    private getNumberedIcon(num: number) {
        return this.L.divIcon({
            className: "ma-number-icon-container",
            html: `<div class="ma-number-icon">${num}</div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 30]
        });
    }

    async addPoint(lat: number, lng: number) {
        if (!this.map) return;

        const id = Date.now();
        const index = this.points.length + 1;
        
        const marker = this.L.marker([lat, lng], {
            draggable: true,
            icon: this.getNumberedIcon(index)
        }).addTo(this.map);

        const point: RoutePoint = { id, lat, lng, marker, name: `Punto ${index}`, address: "..." };
        this.points.push(point);

        this.notifyUpdate();

        marker.on("dragend", () => {
            const newPos = marker.getLatLng();
            point.lat = newPos.lat;
            point.lng = newPos.lng;
            this.clearRoute();
            this.updateAddress(point);
        });

        await this.updateAddress(point);
    }

    private async updateAddress(point: RoutePoint) {
        try {
            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${point.lat}&lon=${point.lng}&zoom=18&addressdetails=1`, {
                headers: { "User-Agent": "RutasApp/1.0" }
            });
            const data = await res.json();
            point.address = data.display_name.split(",")[0] || "Punto";
            point.name = point.address as string;
            this.notifyUpdate();
        } catch (e) {
            point.address = "Desconocido";
        }
    }

    deletePoint(id: number) {
        const idx = this.points.findIndex(p => p.id === id);
        if (idx !== -1) {
            this.map?.removeLayer(this.points[idx].marker);
            this.points.splice(idx, 1);
            this.updateAllMarkers();
            this.clearRoute();
            this.notifyUpdate();
        }
    }

    private updateAllMarkers() {
        this.points.forEach((p, i) => {
            p.marker.setIcon(this.getNumberedIcon(i + 1));
        });
    }

    clearAll() {
        this.points.forEach(p => this.map?.removeLayer(p.marker));
        this.points = [];
        this.clearRoute();
        this.notifyUpdate();
    }

    private clearRoute() {
        if (this.routeLine && this.map) {
            this.map.removeLayer(this.routeLine);
            this.routeLine = null;
        }
    }

    async optimizeRoute() {
        if (this.points.length < 2) return;
        this.dispatchEvent(new CustomEvent("loading", { detail: true }));

        try {
            const coords = this.points.map(p => `${p.lng},${p.lat}`).join(";");
            const res = await fetch(`https://router.project-osrm.org/trip/v1/driving/${coords}?source=any&roundtrip=true&geometries=geojson&overview=full`);
            const data = await res.json();

            if (data.code !== "Ok") throw new Error();

            const waypoints = data.waypoints;
            const loopPoints = waypoints.map((wp: any) => this.points[wp.waypoint_index]);

            const legs = data.trips[0].legs;
            let maxIdx = -1;
            let maxDist = -1;
            legs.forEach((l: any, i: number) => {
                if (l.distance > maxDist) { maxDist = l.distance; maxIdx = i; }
            });

            const startIdx = (maxIdx + 1) % loopPoints.length;
            this.points = [...loopPoints.slice(startIdx), ...loopPoints.slice(0, startIdx)];
            
            this.updateAllMarkers();
            this.notifyUpdate();

            const routeRes = await fetch(`https://router.project-osrm.org/route/v1/driving/${this.points.map(p => `${p.lng},${p.lat}`).join(";")}?geometries=geojson&overview=full`);
            const routeData = await routeRes.json();

            this.clearRoute();
            this.routeLine = this.L.geoJSON(routeData.routes[0].geometry, {
                style: { color: "#0891b2", weight: 5, opacity: 0.8 }
            }).addTo(this.map);

            this.map?.fitBounds(this.routeLine.getBounds(), { padding: [50, 50] });
            this.dispatchEvent(new CustomEvent("done", { detail: routeData.routes[0] }));
        } catch (e) {
            this.dispatchEvent(new CustomEvent("error"));
        } finally {
            this.dispatchEvent(new CustomEvent("loading", { detail: false }));
        }
    }

    panToPoint(id: number) {
        const p = this.points.find(p => p.id === id);
        if (p && this.map) this.map.flyTo([p.lat, p.lng], 16);
    }

    private notifyUpdate() {
        this.dispatchEvent(new CustomEvent("update", { detail: this.points }));
    }
}
