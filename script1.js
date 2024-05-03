let slideIndex = 0,
    slides = document.getElementsByClassName("slide-inner"),
    btnBottom = document.querySelector('.btn-bottom');

for(let i = 0; i < slides.length; i++){
    let dot = document.createElement('button');
    dot.classList.add('slide-bottom-btn');
    dot.setAttribute('accesskey',i);
    btnBottom.appendChild(dot);
    if(dot.getAttribute('accesskey') == 0){
        dot.classList.add('active');
    }
}

let dots = document.querySelectorAll('.slide-bottom-btn');
let dots2 = document.getElementsByClassName('slide-bottom-btn');

dots.forEach(function(e) {
    e.addEventListener('click', function(){
        slideIndex = this.getAttribute('accesskey');
        showSlide(slideIndex);
    });
});

function showSlide(n) {
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('show');
        slides[i].classList.remove("fade");
        dots[i].classList.remove("active");
    }
    slides[slideIndex].classList.add('show');
    slides[slideIndex].classList.add("fade");
    dots[slideIndex].classList.add("active");
}

document.querySelector(".btn-next").addEventListener("click", function() {
    showSlide(++slideIndex);
});

document.querySelector(".btn-prev").addEventListener("click", function() {
    showSlide(--slideIndex);
});
