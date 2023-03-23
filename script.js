'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');


const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
const header = document.querySelector('.header');
console.log(header);
const message = document.createElement('div');

message.classList.add('cookie-message');
message.innerHTML= 'We use cookies for improved fuctionality and analytics. <button class="btn btn--close-cookie">Got it!>';

header.append(message);

const butt = document.querySelector('.btn--close-cookie');
butt.addEventListener('click', function(){
  message.remove();
})

//Button scrolling
btnScrollTo.addEventListener('click', function(e){
  const s1coords = section1.getBoundingClientRect();
  //scrolling
   //Option 1
  
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);
  
  //Option 2 with smooth scrolling
  
  // window.scrollTo({
  //  left:  s1coords.left + window.pageXOffset,
  //  top: s1coords.top + window.pageYOffset,
  //  behavior: "smooth" 
  // });
  
  //Option 3, the simplest and with smooth scrolling(for modern browsers)
  
  section1.scrollIntoView({behavior: "smooth"});
   });


// Page navigation
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener("click", function(e){
// e.preventDefault();
// const id = this.getAttribute('href');
// document.querySelector(id).scrollIntoView({behavior: "smooth"})
//   })
// })

document.querySelector('.nav__links').addEventListener("click", function(e){
  e.preventDefault();
  if(e.target.classList.contains('nav__link')){
 const id =  e.target.getAttribute('href')
 document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  };
})