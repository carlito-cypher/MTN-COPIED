const productContainers = [...document.querySelectorAll('.lappy')];
const nxtBtn = [...document.querySelectorAll('.next')];
const preBtn = [...document.querySelectorAll('.prev')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


const productsize = [...document.querySelectorAll('.viper')];
const fwdBtn = [...document.querySelectorAll('.nviper')];
const bwdBtn = [...document.querySelectorAll('.pviper')];

productsize.forEach((item, i) => {
    let sizeDimensions = item.getBoundingClientRect();
    let sizeWidth = sizeDimensions.width;

    fwdBtn[i].addEventListener('click', () => {
        item.scrollLeft += sizeWidth;
    })

    bwdBtn[i].addEventListener('click', () => {
        item.scrollLeft -= sizeWidth;
    })
})


const productwiper = [...document.querySelectorAll('.wiper')];
const fwdBt = [...document.querySelectorAll('.nwiper')];
const bwdBt = [...document.querySelectorAll('.pwiper')];

productwiper.forEach((item, i) => {
    let wiperDimensions = item.getBoundingClientRect();
    let wiperWidth = wiperDimensions.width;

    fwdBt[i].addEventListener('click', () => {
        item.scrollLeft += wiperWidth;
    })

    bwdBt[i].addEventListener('click', () => {
        item.scrollLeft -= wiperWidth;
    })
})


const productziper = [...document.querySelectorAll('.ziper')];
const fwBtn = [...document.querySelectorAll('.nziper')];
const bwBtn = [...document.querySelectorAll('.pziper')];

productziper.forEach((item, i) => {
    let ziperDimensions = item.getBoundingClientRect();
    let ziperWidth = ziperDimensions.width;

    fwBtn[i].addEventListener('click', () => {
        item.scrollLeft += ziperWidth;
    })

    bwBtn[i].addEventListener('click', () => {
        item.scrollLeft -= ziperWidth;
    })
})


let slideIndex = 0;
            showSlides();

            function showSlides() {
                let i;
                let slides = document.getElementsByClassName("overall");
                let dots = document.getElementsByClassName("dot");
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slideIndex++;
                if (slideIndex > slides.length) { slideIndex = 1 }
                for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                }
                slides[slideIndex - 1].style.display = "block";
                dots[slideIndex - 1].className += " active";
                setTimeout(showSlides, 7000); // Change image every 2 seconds
            }