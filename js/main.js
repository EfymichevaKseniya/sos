
function mobileBtn() {
    const   mobileMenu = document.querySelector('.mobile__menu'),
            mobileClose = document.querySelector('.mobile__close'),
            navList = document.querySelector('.nav__list');
        
        mobileMenu.addEventListener('click', () => {
            navList.classList.add('show');
            mobileClose.classList.add('show');
            mobileMenu.classList.add('hide');
        });

        mobileClose.addEventListener('click', () => {
            navList.classList.remove('show');
            mobileClose.classList.remove('show');
            mobileMenu.classList.remove('hide');
        });

}  


function langMenu() {
    const select = document.querySelector('.select__box'),
        selectValue = document.querySelector('.select__value'),
        selectDropdown = document.querySelector('.select__dropdown');
    

        select.addEventListener('click', () => {
        selectDropdown.classList.toggle('show');

                
        selectDropdown.addEventListener('click', e => {
            const option = e.target.closest('.select__option');
            let temp = "";

            if (option) {
                temp = selectValue.textContent;
                selectValue.textContent = option.textContent;
                option.textContent = temp;
                e.target.closest('.select__box').blur();
            }
            
        });
    });
}


function accordion() {

    const  items = document.querySelectorAll('.accordion__item'); 
            
            items.forEach(item => {
                item.addEventListener('click', () => {

                    item.classList.toggle('active'); 

                });
            });   
            
}
function slider() {
    const   slides = document.querySelectorAll('.slider__item'),
            arrowNext = document.querySelector('.arrow-next'),
            sliderWrapper = document.querySelector('.slider__wrapper'),
            width = window.getComputedStyle(sliderWrapper).width,
            slider = document.querySelector('.slider');
            
            let currentSlide = 0;
            let slideIndex = 1;
            let arr = [];

        
            sliderWrapper.style.transition = '0.5s all';

            slider.style.position = 'relative';

            const indicators = document.createElement('ol'),
                    dots = [];
            indicators.classList.add('carousel-indicators');

            slider.append(indicators);

            for (let i = 0; i < slides.length; i++) {
                const dot = document.createElement('li');
                dot.classList.add('dot');
                dot.setAttribute('data-slide-to', i + 1);


                if ( i == 0) {
                    dot.style.backgroundColor = '#fff';
                }
                indicators.append(dot);
                dots.push(dot);
            }

            
            function showSlides() {
                dots.forEach(dot => dot.style.backgroundColor = 'transparent');
                dots[slideIndex-1].style.backgroundColor = '#fff';
            }
            

            dots.forEach(dot => {
                dot.addEventListener('click', (e) => {
                    const slideTo = e.target.getAttribute('data-slide-to');
    
                    slideIndex = slideTo;
                    showSlides();
                });
            });

            slides.forEach(item => arr.push(item));

            function slidesOrder(arr) {
                arr[0].classList.add('one');
                arr[1].classList.add('two');
                arr[2].classList.add('three');
                arr[3].classList.add('four');
            }

            function removeAllClasses() {
                slides.forEach(item => {
                    item.classList.remove('one');
                    item.classList.remove('two');
                    item.classList.remove('three');
                    item.classList.remove('four');
                });
            }
            
            slidesOrder(arr);

            function nextSlide(arr) {
                
                if(currentSlide <= slides.length){
                    let firstElem = arr.shift();
                    arr.push(firstElem);
                    removeAllClasses();
                    slidesOrder(arr);

                    currentSlide++;
                }

                if(currentSlide === slides.length) {
                    currentSlide = 0;
                }
                showSlides();
            }
                
            
            arrowNext.addEventListener('click', () => {
                
                    nextSlide(arr);
                    

                if (slideIndex == slides.length) {
                    slideIndex = 1;
                } else {
                    slideIndex++;
                }
            });
}


mobileBtn();
langMenu();
accordion();
slider();
