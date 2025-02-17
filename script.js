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
