const slider = () => {
    const sliderBlock = document.querySelector('.portfolio-content');
    const slides = document.querySelectorAll('.portfolio-item');
    const dots = document.querySelectorAll('.dot');
    const timeInterval = 2000;

    let currentSlide = 0;
    let interval = 0;

    const prevSlides = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    };

    const nextSlides = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    };

    const autoSlide = () => {
        prevSlides(slides, currentSlide, 'portfolio-item-active');
        prevSlides(dots, currentSlide, 'dot-active');
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        nextSlides(slides, currentSlide, 'portfolio-item-active');
        nextSlides(dots, currentSlide, 'dot-active');
    };

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };
    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        if (!e.target.matches('.dot, .portfolio-btn')) {
            return;
        }

        prevSlides(slides, currentSlide, 'portfolio-item-active');
        prevSlides(dots, currentSlide, 'dot-active');
        if (e.target.matches('#arrow-right')) {
            currentSlide++;
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--;
        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target == dot) {
                    currentSlide = index;
                }
            });
        }
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        console.log(e.target);
        nextSlides(slides, currentSlide, 'portfolio-item-active');
        nextSlides(dots, currentSlide, 'dot-active');
    });
    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide();
        }
    }, true);
    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timeInterval);
        }
    }, true);
    startSlide(timeInterval);
};
export default slider;