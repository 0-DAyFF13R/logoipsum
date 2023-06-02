// FAQ

var footer1 = document.querySelector('.faq-foot-1');
var footer2 = document.querySelector('.faq-foot-2');
var footer3 = document.querySelector('.faq-foot-3');
var footer4 = document.querySelector('.faq-foot-4');
var button1 = document.querySelector('.faq-1');
var button2 = document.querySelector('.faq-2');
var button3 = document.querySelector('.faq-3');
var button4 = document.querySelector('.faq-4');
var arrow1 = document.querySelector('.faq-arr-1');
var arrow2 = document.querySelector('.faq-arr-2');
var arrow3 = document.querySelector('.faq-arr-3');
var arrow4 = document.querySelector('.faq-arr-4');
footer2.style.display = 'none';
footer3.style.display = 'none';
footer4.style.display = 'none';
arrow1.style.transform = 'rotate(180deg)';

button1.addEventListener("click", function () {
    if (footer1.style.display == 'none') {
        footer1.style.display = 'block';
        arrow1.style.transform = 'rotate(180deg)';
    }
    else if (footer1.style.display = 'none') {
        arrow1.style.transform = 'rotate(0deg)';
    }
});

button2.addEventListener("click", function () {
    if (footer2.style.display == 'none') {
        footer2.style.display = 'block';
        arrow2.style.transform = 'rotate(180deg)';
    }
    else if (footer2.style.display = 'none') {
        arrow2.style.transform = 'rotate(0deg)';
    }
});

button3.addEventListener("click", function () {
    if (footer3.style.display == 'none') {
        footer3.style.display = 'block';
        arrow3.style.transform = 'rotate(180deg)';
    }
    else if (footer3.style.display = 'none') {
        arrow3.style.transform = 'rotate(0deg)';
    }
});

button4.addEventListener("click", function () {
    if (footer4.style.display == 'none') {
        footer4.style.display = 'block';
        arrow4.style.transform = 'rotate(180deg)';
    }
    else if (footer4.style.display = 'none') {
        arrow4.style.transform = 'rotate(0deg)';
    }
});



// Плавное появление статистики

function calcCount() {
    for (var i = 0; i < $('.number').length; i++) {
        var end = $('.number').eq(i).text();
        countStart(end, i);
    }
}

function countStart(end, i) {
    var start = 900;
    var interval = setInterval(function () {
        $('.number').eq(i).text(++start);
        if (start == end) {
            clearInterval(interval);
        }
    }, 0.01);
}
calcCount();



// Swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



// CSS анимации

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});