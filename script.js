const mainTexts = document.querySelectorAll('.main-text-content');

setInterval(() => {
    const textChange = document.querySelector('.main-text-content.change');
    
    textChange.classList.remove('change');
    
    if (textChange.nextElementSibling) {
        textChange.nextElementSibling.classList.add('change');
    } else {
        mainTexts[0].classList.add('change');
    }
}, 3000);

const closeNav = document.querySelector('.close-menu i')
const navMobile = document.querySelector('.nav-bar-mb-menu')
const dateValue = new Date;
const yearValue = dateValue.getFullYear();
const copyRightText = document.querySelector('.copyright')
copyRightText.innerHTML = `<p>Copyright <i class="fa-solid fa-copyright"></i> ${yearValue}, All Rights Reserved</p>`

const hamburgerIcon = document.querySelector('.hamburger-icon')


hamburgerIcon.addEventListener('click',()=>{
  navMobile.classList.remove('no')
})

document.addEventListener('scroll',()=>{
    navMobile.classList.add('no')
})

closeNav.addEventListener('click',()=>{
    navMobile.classList.add('no')
})