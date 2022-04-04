let passwordVisiableEnter = false;

const offScroll = function(){
   window.scrollTo(0, 0);
}

//Modal Enter
document.querySelectorAll('.menu-profile ul li').forEach((element)=>{
      element.addEventListener('click', ()=>{
      window.addEventListener(('scroll'), offScroll);
      document.getElementById('id-modal-enter').classList.add('modal_active');
      document.querySelector('.menu-profile').classList.remove('menu-profile_active');
   });
});


document.getElementById('id-modal-enter-exit').addEventListener('click', ()=>{
   document.getElementById('id-modal-enter').classList.remove('modal_active');
   window.removeEventListener('scroll', offScroll);
});

//modal registr

document.getElementById('modal__enter-registr_ID').addEventListener('click', ()=>{
   document.getElementById('id-modal-regidtr').classList.add('modal_active');
   document.querySelector('.menu-profile').classList.remove('menu-profile_active');
   document.getElementById('id-modal-enter').classList.remove('modal_active');
})

document.getElementById('id-modal-registr-exit').addEventListener('click', ()=>{
   document.getElementById('id-modal-regidtr').classList.remove('modal_active');
});

document.getElementById('modal__i-already_asign-ID').addEventListener('click', ()=>{
   document.getElementById('id-modal-regidtr').classList.remove('modal_active');
   document.getElementById('id-modal-enter').classList.add('modal_active');
})

//Hide password

document.querySelector('.modal__password_eye').addEventListener('click', ()=>{
   if(!passwordVisiableEnter){
      document.querySelector('.modal__input-password').setAttribute('type', 'text'); 
      passwordVisiableEnter = true;
   }else{
      document.querySelector('.modal__input-password').setAttribute('type', 'password'); 
      passwordVisiableEnter = false;
   } 
   document.querySelector('.modal__password_eye').classList.toggle('modal__password_eye_off');
});

document.querySelector('.check__label').addEventListener('click', ()=>{
   document.querySelector('.check__label').classList.toggle('check__label_unactive');
});