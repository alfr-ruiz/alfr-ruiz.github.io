document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('send-button');
    
    if (button) {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            button.style.setProperty('--x', x + 'px');
            button.style.setProperty('--y', y + 'px');
            
            const after = document.styleSheets[0].insertRule(
                `#send-button::after { left: var(--x); top: var(--y); }`,
                document.styleSheets[0].cssRules.length
            );
        });
    }
});
