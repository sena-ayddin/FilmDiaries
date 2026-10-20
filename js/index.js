
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