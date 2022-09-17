let navbar = document.querySelector('.navbar')
let containerBoxItem = document.querySelector('.container-box-item')
let boxContainer = document.querySelector('.box-container')
let menuImageList = Array.from (document.querySelectorAll(".menu-item img"));
let currentSlideIndex = 0;
let closeBtn = document.getElementById("close")
let nextBtn = document.getElementById("next")
let prevBtn = document.getElementById("prev")

for(let i = 0 ; i < menuImageList.length; i++){

  menuImageList[i].addEventListener('click' , (e) => {
    let srcImg = e.target.getAttribute('src');
    currentSlideIndex = menuImageList.indexOf(e.target);
    boxContainer.style.backgroundImage = `url(${srcImg})`;
    containerBoxItem.classList.replace('d-none', 'd-flex')
  })
}
nextBtn.addEventListener('click' , ()=>  {
  currentSlideIndex++;
  if(currentSlideIndex == menuImageList.length){
    currentSlideIndex = 0
  }
  let srcImg = menuImageList[currentSlideIndex].getAttribute('src');
  boxContainer.style.backgroundImage = `url(${srcImg})`;
})

prevBtn.addEventListener('click' , () => {
  currentSlideIndex--;
  if(currentSlideIndex < 0){
    currentSlideIndex = menuImageList.length - 1
  }
  let srcImg = menuImageList[currentSlideIndex].getAttribute('src');
  boxContainer.style.backgroundImage = `url(${srcImg})`;
})

closeBtn.addEventListener('click', () => {
  containerBoxItem.classList.replace('d-flex', 'd-none')
})

window.onscroll = function(){
  if(window.scrollY > 0){
    navbar.classList.add('active')
  }
  else{
    navbar.classList.remove("active")
  }
}

let swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    delay:1000,
    loop:true,
    speed:900,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

$(document).ready(function () {
  $(".loader").fadeOut(8000, () => {
    $("#loading").fadeOut(2000);
  })
});