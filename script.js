'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs =  document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent  = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');


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

//////////////////////////////////////////////////////////////////
// Page navigation
////////////////////////////////////////////////////////////
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
});

////////////////////////////////////////////////////////////////
//Tabbed Component
////////////////////////////////////////////////////////////////


tabsContainer.addEventListener("click", function(e){
e.preventDefault();
const clicked = e.target.closest('.operations__tab')
//Guard clause
if(!clicked) return;
// Active tab
tabs.forEach(t => t.classList.remove('operations__tab--active'))
clicked.classList.add('operations__tab--active');

// Remove content area
tabsContent.forEach(c => c.classList.remove('operations__content--active'));
//Activate content area
document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});
/////////////////////////////////////////////////////////
//Menu fade animation
////////////////////////////////////////////////////////

const handleHover = function(e){
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
  
    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));