let button_menu = document.querySelector('.button-menu')
let nav_menu= document.querySelector('.menu-navbar')
let links = document.querySelectorAll('.menu-navbar ul li a')


let swiper = createSwiper(".mySwiper", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev");
let header = document.querySelector('#header');

function createSwiper(container, pagination, nextButton, prevButton) {
  return new Swiper(container, {
    slidesPerView: handleWidth(),
    spaceBetween: 30,
    pagination: {
      el: pagination,
      clickable: true,
    },
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
  });
}


function handleWidth(){
    let getWidth = window.innerWidth || document.documentElement.clientWidth
    let slideShow = 3

    if(getWidth < 1001) {
        slideShow = 2;
    }

    if(getWidth < 700) {
        slideShow = 1
    }
    
    
    return slideShow
}

button_menu.addEventListener('click', () => {
 
    nav_menu.classList.toggle('active')
})


links.forEach(element => {
    element.addEventListener('click', () =>{
        nav_menu.classList.toggle('active')
    })
});

window.addEventListener('resize', () => {
    swiper.params.slidesPerView = handleWidth();
    swiper.update();
})


window.addEventListener("scroll", () => {
    if(window.scrollY >=200) {
        header.style.background="#191919"
    } 
  
      else{
          header.style.background="transparent"
      }
  })


