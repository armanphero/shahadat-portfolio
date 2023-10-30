'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// 

const portfolioImages = [
  'assets/images/prove/fb-prove/fb-prove1.png',
  'assets/images/prove/fb-prove/fb-prove2.png',
  'assets/images/prove/fb-prove/fb-prove3.png',
  'assets/images/prove/fb-prove/fb-prove4.png',
  'assets/images/prove/fb-prove/fb-prove5.png',
  'assets/images/prove/fb-prove/fb-prove6.png',
  'assets/images/prove/google-prove/g-prove1.png',
  'assets/images/prove/google-prove/g-prove2.png',
  'assets/images/prove/google-prove/g-prove3.png',
  'assets/images/prove/google-prove/g-prove4.png',
  'assets/images/prove/google-prove/g-prove5.png',
  'assets/images/prove/google-prove/g-prove6.png',
]

const displayPortfolio = (indexStart, indexEnd, id) => {
  const imgTagArr = portfolioImages.slice(indexStart, indexEnd).map(img => {
    const imgTag = `<div data-bs-toggle="modal" data-bs-target="#portfolioModal" onclick="displayImgOnModal('${img}')"><img src="${img}" alt=""></img></div>`;
    return imgTag;
  })
  document.getElementById(id).innerHTML = imgTagArr.join(' ');
  // console.log(imgTagArr.join(' '));
}

const displayImgOnModal = (img) => {
  // console.log(img);
  document.querySelector('.modal-body').innerHTML = `
   <img src="${img}" alt="" id="modal-img">
  `
}

displayPortfolio(0, 6, 'fb-img-container');
displayPortfolio(6, 12, 'google-img-container');

// greeting-img animation

const greetingImg = document.querySelector('.greeting-img');
const greetingAnimation = () => {
  setTimeout(() => {
    // greetingImg.style.backgroundColor = 'red'
    greetingImg.classList.remove('greeting-backword');
    greetingImg.classList.add('greeting-forward')
    
  }, 0);
  setTimeout(() => {
    // greetingImg.style.backgroundColor = 'red'
    greetingImg.classList.remove('greeting-forward');
    greetingImg.classList.add('greeting-backword');
    
  }, 400);

}

setInterval(() => {
  greetingAnimation();
}, 1800);

greetingAnimation();