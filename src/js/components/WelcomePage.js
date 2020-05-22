import {templates, select, classNames} from '../settings.js';



class WelcomePage {
  constructor(element) {
    const thisWelcome = this;

    thisWelcome.render(element);
    //thisWelcome.carousel();
  }

  render(element){
    const thisWelcome = this;

    const generatedHTML = templates.welcomePage();

    thisWelcome.dom = {};
    thisWelcome.dom.wrapper = element;
    thisWelcome.dom.wrapper.innerHTML = generatedHTML;
  }

  carousel(){
    const track = document.querySelector(select.carousel.track);
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(select.carousel.buttonRight);
    const prevButton = document.querySelector(select.carousel.buttonLeft);
    const dotsNav = document.querySelector(select.carousel.nav);
    const dots = Array.from(dotsNav.children);

    console.log(slides);

    const slideWidth = slides[0].getBoundingClientRect().width;
    //console.log(dotsNav);

    slides.forEach((slide, index) => {
      slide.style.left = slideWidth * index + 'px';
    });
    /* arrange slides next to one another */

    const moveToSlide = (track, currentSlide, targetSlide) => {
      track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
      currentSlide.classList.remove(classNames.carousel.current);
      targetSlide.classList.add(classNames.carousel.current);
    };

    const updateDots = (currentDot, targetDot) => {
      currentDot.classList.remove(classNames.carousel.dotSlide);
      targetDot.classList.add(classNames.carousel.dotSlide);
    };

    /*const sliderLoop = (prevSlide, currentSlide, currentDot, previousDot) => {
      if (prevSlide == null){
        prevSlide = slides.lastChild;

        moveToSlide(track, currentSlide, prevSlide);
        updateDots(currentDot, previousDot);
      }else {
        moveToSlide(track, currentSlide, prevSlide);
        updateDots(currentDot, previousDot);
      }
    };*/

    prevButton.addEventListener('click', () => {
      const currentSlide = track.querySelector(select.carousel.current);
      const prevSlide = currentSlide.previousElementSibling;
      const currentDot = dotsNav.querySelector(select.carousel.currentDotSlide);
      const previousDot = currentDot.previousElementSibling;

      moveToSlide(track, currentSlide, prevSlide);
      updateDots(currentDot, previousDot);
    });
    /* click on left - move left */

    nextButton.addEventListener('click', () => {
      const currentSlide = track.querySelector(select.carousel.current);
      const nextSlide = currentSlide.nextElementSibling;
      const currentDot = dotsNav.querySelector(select.carousel.currentDotSlide);
      const nextDot = currentDot.nextElementSibling;

      moveToSlide(track, currentSlide, nextSlide);
      updateDots(currentDot, nextDot);
    });
    /* click on right - move right */

    dotsNav.addEventListener('click', e => {
      const targetDot = e.target.closest('button');

      if (!targetDot) return;

      const currentSlide = track.querySelector(select.carousel.current);
      const currentDot = dotsNav.querySelector(select.carousel.currentDotSlide);
      const targetIndex = dots.findIndex(dot => dot === targetDot);
      const targetSlide = slides[targetIndex];

      moveToSlide(track, currentSlide, targetSlide);
      updateDots(currentDot, targetDot);
    });
    /* click on nav indicator - move to that slide */
  }
}

export default WelcomePage;
