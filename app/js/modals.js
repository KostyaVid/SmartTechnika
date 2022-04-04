let passwordVisiableEnter = false;

//Modal Enter
document.querySelectorAll('.menu-profile ul li').forEach((element)=>{
      element.addEventListener('click', ()=>{
      document.getElementById('id-modal-enter').classList.add('modal_active');
      document.querySelector('.menu-profile').classList.remove('menu-profile_active');
      document.querySelector('body').classList.add('body_overflow');
   });
});

document.querySelector('.menu-profile__enter').addEventListener('click', ()=>{
   document.getElementById('id-modal-enter').classList.add('modal_active');
   document.querySelector('.menu-profile').classList.remove('menu-profile_active');
   document.querySelector('body').classList.add('body_overflow');
});

document.getElementById('id-modal-enter-exit').addEventListener('click', ()=>{
document.getElementById('id-modal-enter').classList.remove('modal_active');
document.querySelector('body').classList.remove('body_overflow');
});

//modal registr

document.getElementById('modal__enter-registr_ID').addEventListener('click', ()=>{
   document.getElementById('id-modal-regidtr').classList.add('modal_active');
   document.querySelector('.menu-profile').classList.remove('menu-profile_active');
   document.querySelector('body').classList.add('body_overflow');
   document.getElementById('id-modal-enter').classList.remove('modal_active');
})

document.getElementById('id-modal-registr-exit').addEventListener('click', ()=>{
document.getElementById('id-modal-regidtr').classList.remove('modal_active');
document.querySelector('body').classList.remove('body_overflow');
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