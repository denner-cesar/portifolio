const mobileBtn = document.getElementById('mobile-btn');
function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}
mobileBtn.addEventListener('click', toggleMenu);





