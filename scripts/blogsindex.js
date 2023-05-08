let curSlide= 0;
const nextSlide= document.querySelector(".btn-next");
const slides= document.querySelectorAll(".Slide");

let curSlide =0;
let maxSlide =slides.length -1;

nextSlide.addEventListener("click", function(){
     if(curSlide === maxSlide){
        curSlide=0;
     }else{
        curSlide ++;
     }
    
    curSlide++;

     slides.forEach((Slide, indx)=>{
        slides.style.transform = `translate(${indx * 100}%)`;
    });
})