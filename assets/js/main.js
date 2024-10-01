'use strict';
document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.menu > li');

    menuItems.forEach(function (item) {
        item.addEventListener('mouseenter', function () {
            this.classList.add('active');
        });

        item.addEventListener('mouseleave', function () {
            this.classList.remove('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(function (item) {
        var header = item.querySelector('.accordion-header');
        var content = item.querySelector('.accordion-content');

        header.addEventListener('click', function () {
            item.classList.toggle('active');

            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0';
            }
        });
    });
});

let currentIndex = 0; 
const slides = document.querySelectorAll(".slide"); 
const dots = document.querySelectorAll(".dot"); 
 
function showSlide(index) { 
    if (index >= slides.length) { 
        currentIndex = 0; 
    } else if (index < 0) { 
        currentIndex = slides.length - 1; 
    } else { 
        currentIndex = index; 
    } 
 
    slides.forEach((slide, i) => { 
        slide.style.display = "none"; 
        dots[i].classList.remove("active"); 
    }); 
 
    slides[currentIndex].style.display = "block"; 
    dots[currentIndex].classList.add("active"); 
} 
 
 
function moveSlide(step) { 
    showSlide(currentIndex + step); 
} 
 
function currentSlide(index) { 
    showSlide(index); 
} 
 
function initSlider() { 
    showSlide(currentIndex); 
} 
 
dots.forEach((dot, index) => { 
    dot.addEventListener("click", () => currentSlide(index)); 
}); 
 
document.addEventListener("DOMContentLoaded", initSlider);

var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

window.onload = function () {
  setTimeout(function () {
    modal.style.display = "block";
  }, 3000);
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
 
 
let tabBtns = document.querySelectorAll('.but') 
let tabTexts = document.querySelectorAll('.cards') 
 
tabBtns.forEach((item, index)=>{ 
    item.addEventListener('click', function(){ 
        document.querySelector('.but.active').classList.remove('active'); 
        item.classList.add('active'); 
 
        document.querySelector('.cards.active').classList.remove('active'); 
        tabTexts[index].classList.add('active') 
    }) 
}) 
 

"use strict";
let phoneBtn = document.querySelector(".phone");
let sale = document.querySelector(".faq");

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        phoneBtn.classList.add("show");
      } else {
        phoneBtn.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer.observe(sale);