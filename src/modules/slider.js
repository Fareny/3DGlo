const slider = (portfolioContent, portfolioItem, portfolioDot) => {
    const sliderBlock = document.querySelector(portfolioContent);
    const slides = document.querySelectorAll(portfolioItem);
    const portfolioDots = document.querySelector(portfolioDot);

    if (sliderBlock == null || '') {
        return;
    } else if (slides == 0) {
        return;
    } else {
        const timeInterval = 2000;

        let dots = [];
        let currentSlide = 0;
        let interval;

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

        const addDots = (slide) => {
            for (let i = 0; i < slide.length; i++) {
                let li = document.createElement('li');
                li.classList.add('dot');
                dots.push(li);
                portfolioDots.append(li);
            }
        };

        const startSlide = (timer = 1500) => {
            if (dots == 0) {
                addDots(slides);
                dots[0].classList.add('dot-active');
            }
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
            try {

                if (e.target.matches("[id='arrow-right']")) {
                    e.preventDefault();
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
            } catch (error) {

            }

            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            }
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
    }
};
export default slider;