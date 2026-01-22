// Scroll-triggered jumping animations using Intersection Observer
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate'); // Trigger jump-in for sections
        }
    });
}, { threshold: 0.1 }); // Trigger when 10% of section is visible

sections.forEach(section => {
    observer.observe(section);
});