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
    nav = document.querySelector('.header__nav_phone'),
    subnav = document.querySelector('.header__nav_phone span'),
    submenu = document.querySelector('.header__nav_phone_special_list'),
    submenuBack = document.querySelector('.header__nav_phone_special_list svg');


menuTrigger.addEventListener("mouseover", (event)=>{
  event.preventDefault();
  menu.style.display = `flex`;
  MouseStatus = 'over';
  menu.addEventListener('mouseleave',() => {
    MouseStatus = 'out';
    menu.style.display = `none`;
  })
})


toggle.addEventListener('click', (event)=>{
  let 
      navStatus;

  event.preventDefault();
  navStatus = nav.hasAttribute('active');
  if (navStatus === true) {
    nav.style.display = 'flex'
    nav.removeAttribute('active')
    return
  } else {
    nav.style.display = 'none'
    nav.setAttribute('active', 'false')
    return
  }
})

subnav.addEventListener('click', (event)=>{
  let 
      subnavStatus;
  event.preventDefault();
  subnavStatus = subnav.hasAttribute('active'); 
  if (subnavStatus === true) {
    submenu.style.display = 'flex'
    subnav.removeAttribute('active')
    return
  } else {
    submenuBack.addEventListener('click', ()=>{submenu.style.display = 'none'})
    subnav.setAttribute('active', 'false')
    return
  }
  
})



let 
    previewImage = document.querySelector('.preview'),
    viewportWidth = window.screen.width,
    primaryImage = document.querySelector('.primary__important_image'),
    mainBlock = document.querySelector('.main'),
    graphics__submain_image = document.querySelector('.graphics__submain_image'),
    graphics__main_img = document.querySelector('.graphics__main_img');

document.addEventListener('DOMContentLoaded', ()=>{
  nav.setAttribute('active', 'false')
  subnav.setAttribute('active', 'false')
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












