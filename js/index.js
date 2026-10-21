
const profileBtn = document.querySelector('nav .profile');
const profilePopup = document.getElementById('profilePopup');

profileBtn.addEventListener('click', (e) => {
    if (e.target.closest('.profile-popup')) return;
    profilePopup.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!profileBtn.contains(e.target)) {
        profilePopup.classList.remove('active');
    }
});

// Sayfa kaydırıldıkça elemanların yukarı kaymasını sağlayan script
document.addEventListener("DOMContentLoaded", () => {
    // Yukarı kaymasını istediğimiz alanları otomatik seçiyoruz
    const animTargets = document.querySelectorAll(
        '.sponsor, main p, main h6, .wrapper, .sections, .the-team, .faq-section, .contact-form, .team-cards, .character'
    );

    // Hepsine başlangıç sınıfını veriyoruz
    animTargets.forEach(el => el.classList.add('scroll-reveal'));

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                obs.unobserve(entry.target); // Bir defa yukarı kaydıktan sonra sabit kalır
            }
        });
    }, {
        threshold: 0.1, // Elemanın %10'u ekrana girdiği an kayarak belirir
        rootMargin: "0px 0px -40px 0px"
    });

    animTargets.forEach(el => observer.observe(el));
});