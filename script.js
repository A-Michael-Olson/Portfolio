// =============================
// Theme Toggle Logic
// =============================
const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Apply saved theme on load
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (toggleButton) {
        toggleButton.textContent = 'Disable Dark Mode';
    }
}

// Toggle theme on button click
if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        toggleButton.textContent = isDark ? 'Disable Dark Mode' : 'Enable Dark Mode';
    });
}

// =============================
// Image Slider Logic
// =============================
const track = document.querySelector('.slider-track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let index = 0;

// Move slider to current index
function updateSlider() {
    const width = document.querySelector('.slider-window')?.clientWidth || 0;
    track.style.transform = `translateX(-${index * width}px)`;
}

// Add slider button functionality if elements exist
if (track && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        index = (index - 1 + track.children.length) % track.children.length;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % track.children.length;
        updateSlider();
    });

    window.addEventListener('resize', updateSlider);
}
