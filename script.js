const sec4 = document.querySelector(".sec4-mask");
const sec2 = document.querySelector(".sec2-mask");

function maskOff(element) {
    element.addEventListener("mouseleave", e => {
        element.style.zIndex = '1';
        element.style.animation = 'none';
        element.offsetHeight; /* trigger reflow */
        element.style.animation = 'maskHover 3s ease-in-out reverse';
        element.style.opacity = '100';     
    })
    
    element.addEventListener("mouseenter", e => {
        element.style.animation = 'none';
        element.offsetHeight;
        element.style.animation = "maskHover 3s ease-in-out"
        element.style.opacity = '0';
       
    })
  }

  maskOff(sec4)
  maskOff(sec2)



 


  

