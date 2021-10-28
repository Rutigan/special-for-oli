document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const href = this.getAttribute('href').substring(1)

    const scrollTarget = document.getElementById(href)

    const elPosition = scrollTarget.getBoundingClientRect().top
    const offsetPosition = elPosition

    console.log(offsetPosition);
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  })
})


let 
    menuTrigger = document.querySelector('#dropdown'),
    menu = document.querySelector('.header__nav_special_list'),
    MouseStatus,
    toggle = document.querySelector('.header__toggle'),
    nav = document.querySelector('.header__nav_phone');


menuTrigger.addEventListener("mouseover", (event)=>{
  event.preventDefault();
  menu.style.display = `flex`;
  MouseStatus = 'over';
  menu.addEventListener('mouseleave',() => {
    MouseStatus = 'out';
    menu.style.display = `none`;
  })
})

// Дописать
//!!
toggle.addEventListener('click', (event)=>{
  let navStatus;
  event.preventDefault();

  nav.setAttribute('active', 'false')
  if (nav.active === 'false') {
    nav.active = 'true'
    nav.style.display = 'flex'
    return
  }
  if (nav.active === 'true') {
    nav.style.display = 'none'
    return
  }
})

// 

let 
    previewImage = document.querySelector('.preview'),
    viewportWidth = window.screen.width,
    primaryImage = document.querySelector('.primary__important_image'),
    mainBlock = document.querySelector('.main'),
    graphics__submain_image = document.querySelector('.graphics__submain_image'),
    graphics__main_img = document.querySelector('.graphics__main_img');

document.addEventListener('DOMContentLoaded', ()=>{
  let 
      styleString = `${window.screen.width}px`,
      widthForPictures = viewportWidth - 20;

  mainBlock.style.width = styleString;
  if (viewportWidth <= 1000) {
    graphics__main_img.style.width =  `${widthForPictures}px`;
    graphics__submain_image.style.width = `${widthForPictures}px`
  }
})

window.addEventListener('resize', ()=>{
  if (window.screen.width <= 1050) {
    let styleString = `${window.screen.width}px`,
      widthForPictures = viewportWidth - 40;

    mainBlock.style.width = styleString;
    if (viewportWidth <= 1000) {
      graphics__main_img.style.width =  `${widthForPictures}px`;
      graphics__submain_image.style.width = `${widthForPictures}px`
    }
  } 
})












