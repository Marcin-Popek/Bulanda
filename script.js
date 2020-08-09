const brg = document.querySelector('.fas');
const bars = document.querySelector('.fa-bars');
const arw = document.querySelector('.fa-arrow-left');
const mnu = document.querySelector('.menu');
console.log(brg);
bars.addEventListener('click', function () {
     bars.classList.toggle("on");
     arw.classList.toggle("on");
     mnu.classList.toggle("on");
     console.log('klik!');
})
arw.addEventListener('click', function () {
     bars.classList.toggle("on");
     arw.classList.toggle("on");
     mnu.classList.toggle("on");
     console.log('klik!');
});

$('.s1').on('click', function () {
     $('body, html').animate({
          scrollTop: $('.welcome').offset().top
     }, 500)
     $('.menu').toggleClass("on");
     $('.fa-arrow-left').toggleClass("on");
     $('.fa-bars').toggleClass("on");
})
$('.s2').on('click', function () {
     $('body, html').animate({
          scrollTop: $('.discover').offset().top - 50
     }, 500)
     $('.menu').toggleClass("on");
     $('.fa-arrow-left').toggleClass("on");
     $('.fa-bars').toggleClass("on");
})
$('.s3').on('click', function () {
     $('body, html').animate({
          scrollTop: $('.m2').offset().top
     }, 500)
     $('.menu').toggleClass("on");
     $('.fa-arrow-left').toggleClass("on");
     $('.fa-bars').toggleClass("on");
})
$('.s4').on('click', function () {
     $('body, html').animate({
          scrollTop: $('.map').offset().top
     }, 500)
     $('.menu').toggleClass("on");
     $('.fa-arrow-left').toggleClass("on");
     $('.fa-bars').toggleClass("on");
})
$('.s5').on('click', function () {
     $('body, html').animate({
          scrollTop: $('.contact').offset().top
     }, 500)
     $('.menu').toggleClass("on");
     $('.fa-arrow-left').toggleClass("on");
     $('.fa-bars').toggleClass("on");
})