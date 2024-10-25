//smooth scrolling effect document.querySelectorAll('a[href^="#"]').for each(anchor => {
    anchor.addEventListener('click',function (e) {
        e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'
});
});