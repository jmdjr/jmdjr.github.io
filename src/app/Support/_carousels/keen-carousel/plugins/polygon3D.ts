import { KeenSliderInstance } from "keen-slider";

export const polygon3D = (slider:KeenSliderInstance) => {

    if(slider.slides.length <= 0) {
      return;
    }
    
    let z = calcZ();
  
    function calcZ() {
      const n = Math.PI / Math.max(4, slider.slides.length);
      const L = (slider.slides[0].offsetWidth) * 0.5;
      return L / Math.tan(n);
    }
  
    window.addEventListener("resize", () => {
      z = calcZ();
      position();
    });
  
    function rotate() {
      const deg = 360 * slider.track.details.progress;
      slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
    }
  
    function position() {
      const deg = 360 / slider.slides.length;
      slider.slides.forEach((element, idx) => {
        element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
      });
      rotate();
    }
    
    slider.on("created", () => {
      position();
    });
  
    slider.on("detailsChanged", rotate);
  };
  