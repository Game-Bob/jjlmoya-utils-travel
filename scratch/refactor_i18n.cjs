const fs = require('fs');
const path = require('path');

const tools = ['luggage-calculator', 'mini-adventures', 'suitcase-checklist', 'tip-calculator'];

tools.forEach(tool => {
    const i18nDir = path.join('src', 'tool', tool, 'i18n');
    if (!fs.existsSync(i18nDir)) return;

    const files = fs.readdirSync(i18nDir).filter(f => f.endsWith('.ts'));

    files.forEach(file => {
        const filePath = path.join(i18nDir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        // Remove faqTitle
        content = content.replace(/\s*faqTitle:\s*".*?",?\n?/g, '\n');
        
        // Replace bibliography: "..." with bibliography,
        content = content.replace(/bibliography:\s*".*?"/g, 'bibliography');

        // Clean up double newlines or commas
        content = content.replace(/,\s*,/g, ',');
        
        fs.writeFileSync(filePath, content);
    });
});
