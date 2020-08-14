const brg = document.querySelector('.fas');
const bars = document.querySelector('.fa-bars');
const arw = document.querySelector('.fa-arrow-left');
const mnu = document.querySelector('.menu');
var mgr = 25;
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
if ($(document).width() <= 1024) {
     mgr = 0;
}
$('.s1').on('click', function () {
     $('body, html').animate({
          scrollTop: $('.welcome').offset().top - mgr
     }, 500)
     $('.menu').toggleClass("on");
     $('.fa-arrow-left').toggleClass("on");
     $('.fa-bars').toggleClass("on");
})
$('.s2').on('click', function () {
     $('body, html').animate({
          scrollTop: $('.discover').offset().top - mgr
     }, 500)
     $('.menu').toggleClass("on");
     $('.fa-arrow-left').toggleClass("on");
     $('.fa-bars').toggleClass("on");
})
$('.s3').on('click', function () {
     $('body, html').animate({
          scrollTop: $('.m2').offset().top - mgr
     }, 500)
     $('.menu').toggleClass("on");
     $('.fa-arrow-left').toggleClass("on");
     $('.fa-bars').toggleClass("on");
})
$('.s4').on('click', function () {
     $('body, html').animate({
          scrollTop: $('.map').offset().top - mgr
     }, 500)
     $('.menu').toggleClass("on");
     $('.fa-arrow-left').toggleClass("on");
     $('.fa-bars').toggleClass("on");
})
$('.s5').on('click', function () {
     $('body, html').animate({
          scrollTop: $('.contact').offset().top - mgr
     }, 500)
     $('.menu').toggleClass("on");
     $('.fa-arrow-left').toggleClass("on");
     $('.fa-bars').toggleClass("on");
})