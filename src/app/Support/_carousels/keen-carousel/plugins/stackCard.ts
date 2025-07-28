import { KeenSliderInstance } from "keen-slider";

export const stackCard = (stackWidthFactor:number, xRotate:number = 0) => (slider: KeenSliderInstance) => {

  if (slider.slides.length <= 0) {
    return;
  }

  let z = calcZ();

  function calcZ() {
    const n = Math.PI / Math.max(4, slider.slides.length);
    const L = (slider.slides[0].offsetWidth) * 0.5 * stackWidthFactor;
    return L / Math.tan(n);
  }

  window.addEventListener("resize", () => {
    z = calcZ();
    position(0);
    rotate();
  });

  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `rotateX(${xRotate}deg) translateZ(-${z}px) rotateY(${-deg}deg)`;
    position(deg);
  }

  function position(shift:number) {
    const deg = 360 / slider.slides.length;
    const xRot = -1 * xRotate;
    slider.slides.forEach((element, idx) => {
      const degIdx = deg * idx;
      element.style.transform = `rotateY(${degIdx}deg) translateZ(${z}px) rotateY(-${degIdx}deg) rotateY(${shift}deg) rotateX(${xRot}deg)`;
    });
  }

  slider.on("created", () => {
    position(0);
  });

  slider.on("detailsChanged", rotate);
}
