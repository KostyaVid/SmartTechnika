const menuCatalog = document.querySelector('.menu__catalog');

document.querySelector('.catalog').style.left = document.querySelector('.menu__catalog').getBoundingClientRect().left + 'px';
window.addEventListener('resize',()=>{
   document.querySelector('.catalog').style.left = document.querySelector('.menu__catalog').getBoundingClientRect().left + 'px';
});

document.querySelector('.header__enter').addEventListener('click', ()=>{
   document.querySelector('.menu-profile').classList.toggle('menu-profile_active');
});


let menuMobile = {
   home: false,
   catalog: false,
   cart: false,
   search: false,
   else: false
}

const clearMenuMobile = function(){
   document.querySelector('.catalog__wrapper').classList.remove('catalog__wrapper_active');
   document.querySelector('.menu-mobile__catalog').classList.remove('menu-mobile__catalog_active');
   document.querySelector('.menu-else').classList.remove('menu-else_active');
   document.querySelector('.catalog').classList.remove('catalog_active');
   document.querySelector('.menu-search').classList.remove('menu-search_active'); 
};

const setMenuMobile = function(){ 

   if(menuMobile.catalog)
   {
      document.querySelector('.catalog__wrapper').classList.toggle('catalog__wrapper_active');
      document.querySelector('.menu-mobile__catalog').classList.toggle('menu-mobile__catalog_active');
      document.querySelector('.catalog').classList.toggle('catalog_active');    
   }

   if(menuMobile.else)
   {
      document.querySelector('.catalog__wrapper').classList.toggle('catalog__wrapper_active');  
      document.querySelector('.menu-else').classList.toggle('menu-else_active'); 
   }

   if(menuMobile.search)
   {
      document.querySelector('.catalog__wrapper').classList.toggle('catalog__wrapper_active');  
      document.querySelector('.menu-search').classList.toggle('menu-search_active'); 
   }

}; 

menuCatalog.addEventListener('click',()=>{
   clearMenuMobile();
   if(menuMobile.catalog){menuMobile.catalog = false;}
   else{menuMobile.catalog = true;}
   menuMobile.cart = false;
   menuMobile.search= false;
   menuMobile.else= false;
   setMenuMobile();
   
});

document.querySelector('.menu-mobile__home').addEventListener('click',()=>{
   clearMenuMobile();
   menuMobile.cart = false;
   menuMobile.search= false;
   menuMobile.else= false;
   menuMobile.catalog= false;
});

document.querySelector('.menu-mobile__catalog').addEventListener('click',()=>{
   clearMenuMobile();
   if(menuMobile.catalog){menuMobile.catalog = false;}
   else{menuMobile.catalog = true;}
   menuMobile.cart = false;
   menuMobile.search= false;
   menuMobile.else= false;
   setMenuMobile();
});

document.querySelector('.menu-mobile__yet').addEventListener('click', ()=>{
   clearMenuMobile();
   if(menuMobile.else){menuMobile.else = false;}
   else{menuMobile.else = true;}
   menuMobile.cart = false;
   menuMobile.search= false;
   menuMobile.catalog= false;
   setMenuMobile();
});

document.querySelector('.menu-mobile__search').addEventListener('click', ()=>{
   clearMenuMobile();
   if(menuMobile.search){menuMobile.search = false;}
   else{menuMobile.search = true;}
   menuMobile.cart = false;
   menuMobile.else= false;
   menuMobile.catalog= false;
   setMenuMobile();
});



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