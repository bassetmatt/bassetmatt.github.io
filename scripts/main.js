// Function to apply the saved theme (default to dark)
function applyTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// Function to toggle the theme and save the preference
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Apply the saved theme when the page loads
document.addEventListener('DOMContentLoaded', () => {
    applyTheme();

    // Set up the theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Auto-switch CV SVG based on theme
    const svgObject = document.getElementById('cv-svg-object');
    if (svgObject) {
        const updateSvg = () => {
            const theme = document.documentElement.getAttribute('data-theme');
            svgObject.setAttribute('data', theme === 'light' ? '/assets/CV/CV-EN-light.svg' : '/assets/CV/CV-EN-dark.svg');
        };
        updateSvg();
        new MutationObserver(updateSvg).observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });
    }
});
