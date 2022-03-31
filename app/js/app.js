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