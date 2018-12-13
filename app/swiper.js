import Swiper from "swiper";
import { titleAnime } from "./sectionTitleAnimation";
import { skillsAnimation } from "./skillsAnimation";

export const mySwiper = new Swiper(".swiper-container", {
  direction: "vertical",
  height: window.innerHeight,
  allowTouchMove: true,
  mousewheel: true,
  keyboard: {
    enabled: true
  }
});

const portfolioSwiper = new Swiper(".portfolio__slider-container", {
  loop: true,
  navigation: {
    nextEl: ".portfolio__slider-button-next",
    prevEl: ".portfolio__slider-button-prev"
  }
});

mySwiper.on("slideChange", () => {
  titleAnime(mySwiper.activeIndex);
  skillsAnimation(mySwiper.activeIndex);
});
