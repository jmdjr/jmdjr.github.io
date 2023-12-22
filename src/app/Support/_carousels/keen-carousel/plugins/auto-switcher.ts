import { KeenSliderInstance } from "keen-slider";
import { KeenPlugin } from "./core";

export const autoSwitcher : (val : number) => KeenPlugin = (delayMiliSeconds : number) => {
  
  return (slider:KeenSliderInstance) => {
    let timeout : any;
    let mouseOver = false
  
    if(slider.slides.length <= 0) {
      return;
    }
    
    function clearNextTimeout() {
      clearTimeout(timeout)
    }
    function nextTimeout() {
      clearTimeout(timeout)
      if (mouseOver) return
      timeout = setTimeout(() => {
        slider.next()
      }, delayMiliSeconds)
    }
    slider.on("created", () => {
      nextTimeout();
    })
  
    slider.on("dragStarted", clearNextTimeout)
    slider.on("animationEnded", nextTimeout)
    slider.on("updated", nextTimeout)
  };
}
  
  