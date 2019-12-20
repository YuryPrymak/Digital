export default (() => {
  const addClass = function(elClass, className, isSingle) {
    if(isSingle) {
      const el = document.querySelector(elClass);
      el.classList.add(className);
    } else {
      const elems = document.querySelectorAll(elClass);
      for(const el of elems) {
        el.classList.add(className);
      }
    }
  };

  const checkPosition = function() {
    const header = document.querySelector('.header');
    const aboutUsSection = document.querySelector('.about-us');
    const ourTeam = document.querySelector('.our-team');
    const ourWork = document.querySelector('.our-work');
    const ourAdvantages = document.querySelector('.our-advantages');
    const services = document.querySelector('.services');
    const testimonials = document.querySelector('.testimonials');
    const getInTouch = document.querySelector('.get-in-touch');
    const footer = document.querySelector('.footer');

    if(header.getBoundingClientRect().y - header.offsetHeight / 2 < 0) {
      addClass('.header .title', 'anim-fade-in-up', true);
      addClass('.header .description', 'anim-fade-in-zoom', true);
    }

    if(aboutUsSection.getBoundingClientRect().y - aboutUsSection.offsetHeight / 2 < 0) {
      addClass('.about-us .gallery', 'anim-fade-in', true);
    }

    if(ourTeam.getBoundingClientRect().y - ourTeam.offsetHeight / 2 < 0) {
      addClass('.our-team .staff .img-wrapper', 'anim-fade-in-zoom', false);
      addClass('.our-team .staff .name', 'anim-fade-in-up', false);
      addClass('.our-team .staff .post', 'anim-fade-in-up', false);
    }

    if(ourWork.getBoundingClientRect().y - ourWork.offsetHeight / 2 < 0) {
      addClass('.our-work .gallery', 'anim-fade-in', true);
    }

    if(ourAdvantages.getBoundingClientRect().y - ourAdvantages.offsetHeight / 2 < 0) {
      addClass('.our-advantages img', 'anim-fade-in', true);
      addClass('.our-advantages .advantages li', 'anim-before-fade-in-down', false);
    }

    if(services.getBoundingClientRect().y - services.offsetHeight / 2 < 0) {
      addClass('.services .services-list li', 'anim-fade-in-zoom', false);
    }

    if(testimonials.getBoundingClientRect().y - testimonials.offsetHeight / 2 < 0) {
      addClass('.testimonials .testimonials-info li', 'anim-fade-in-right', false);
      addClass('.testimonials .testimonials-slider .slide', 'anim-fade-in-zoom', false);
    }

    if(getInTouch.getBoundingClientRect().y - getInTouch.offsetHeight < 0) {
      addClass('.get-in-touch .social li', 'anim-fade-in-up', false);
    }

    if(footer.getBoundingClientRect().y - footer.offsetHeight < 0) {
      addClass('.footer li', 'anim-before-fade-in-down', false);
    }
  };

  window.addEventListener('load', checkPosition);
  window.addEventListener('scroll', checkPosition);
})();
