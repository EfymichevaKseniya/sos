    


function langMenu() {
    const select = document.querySelector('.select__box'),
        selectValue = document.querySelector('.select__value'),
        selectDropdown = document.querySelector('.select__dropdown'),
    
    

    

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

langMenu();



function slider() {
    
    const   slides = document.querySelectorAll('.slider__item'),
            slider = document.querySelector('.slider'),
            next = document.querySelector('.arrow-next'),
            slidesWrapper = document.querySelector('.slider__wrapper'),
            slidesField = document.querySelector(".slider__items"),
            width = window.getComputedStyle(slidesWrapper).width;

        let slideIndex = 1;
        let offset = 0;
            
        slidesField.style.width = 100 * slides.length + '%';
        slidesField.style.display = 'flex';
        slidesField.style.transition = '0.5s all';

        

        slides.forEach(slide => {
            slide.style.width = width;
        });

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
                dot.style.opacity = 1;
            }
            indicators.append(dot);
            dots.push(dot);
        }

        function deleteNotDigits(str) {
            return +str.replace(/\D/g, '');
        }

        function showSlides() {
            dots.forEach(dot => dot.style.opacity = 0.5);
            dots[slideIndex-1].style.opacity = 1;
        }

        next.addEventListener('click', () => {
            if (offset === deleteNotDigits(width) * (slides.length - 1)) { //  500px'
                offset = 0;
            } else {
                offset += deleteNotDigits(width);
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == slides.length) {
                slideIndex = 1;
            } else {
                slideIndex++;
            }

            showSlides();
            
        });

        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const slideTo = e.target.getAttribute('data-slide-to');

                slideIndex = slideTo;
                offset = deleteNotDigits(width) * (slideTo - 1);

                slidesField.style.transform = `translateX(-${offset}px)`;

                showSlides();
            });
        });

}

slider();

