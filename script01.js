

let menuBar = document.querySelector('.fa-bars');
let navBar =document.querySelector('.nav-item');
menuBar.addEventListener('click', () =>{
    navBar.classList.toggle('active');
    menuBar.classList.toggle('fa-times');
})

const links = document.querySelectorAll('.nav-item a');
console.log(links);
navBar.classList.remove('active');
function hideNabar(){
links.forEach(item => item.classList.remove('active'));
this.classList.add('active');
navBar.classList.remove('active');
}
links.forEach(item => item.addEventListener('click',hideNabar));




// swiper page
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });