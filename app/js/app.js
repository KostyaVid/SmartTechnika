
const menuCatalog = document.querySelector('.menu__catalog');

menuCatalog.addEventListener('click',()=>{
   document.querySelector('.catalog__wrapper').classList.toggle('catalog__wrapper_active');
});

document.querySelector('.catalog__wrapper').addEventListener('click',()=>{
   document.querySelector('.catalog__wrapper').classList.toggle('catalog__wrapper_active');
});

document.querySelector('.catalog').style.left = document.querySelector('.menu__catalog').getBoundingClientRect().left + 'px';
window.addEventListener('resize',()=>{
   document.querySelector('.catalog').style.left = document.querySelector('.menu__catalog').getBoundingClientRect().left + 'px';
});


document.querySelector('.header__enter').addEventListener('click', ()=>{
   document.querySelector('.menu-profile').classList.toggle('menu-profile_active');
})

const swiper = new Swiper('.swiper', {
   effect: 'fade',
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
 });