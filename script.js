// For Max-weight--> 478px-->
let header = document.getElementsByTagName('header');   
let menu = document.getElementById('menuIcon');
let dropdown = document.querySelector('.drop-down-menus');
   menu.addEventListener('click' , ()=>{
     menu.classList.toggle('menu-active');
     if(menu.classList.contains('menu-active')){
         dropdown.style.display='block';
         setTimeout(()=>{
             dropdown.classList.add('transition-effect');
         }, 10)
     }else{
        dropdown.classList.remove('transition-effect');
        setTimeout(()=>{
             dropdown.style.display='none';
        }, 500)
     }
});


let imageContainer = document.querySelector('.image');
let image = imageContainer.firstElementChild;
let overRideImage = imageContainer.lastElementChild;

let hoverIn = (event) => {
    image.classList.add('make-blur');
    overRideImage.classList.add('make-visible');
    event.stopPropagation();
}

let hoverOut = (event) => {
    image.classList.remove('make-blur');
    overRideImage.classList.remove('make-visible');
    event.stopPropagation();     
}

imageContainer.addEventListener('mouseover', hoverIn);
imageContainer.addEventListener('mouseout', hoverOut);


let leftElement = document.querySelector('.left-container');
let rightElement = document.querySelector('.right-container');

//only hiding and decrease width or increasing , button top margin is needed is needed.
let leftElemHiddenContent = () => {
    // Remove old width classes to avoid stacking effects
    leftElement.classList.remove('min-width-1', 'max-width-1'); 
    rightElement.classList.remove('min-width-2', 'max-width-2');
 
    leftElement.classList.add('max-width-1'); 
    leftElement.children[2].style.visibility = 'visible';
    leftElement.children[3].style.visibility = 'visible';
    leftElement.children[4].style.marginTop = '8rem';
 
    rightElement.classList.add('min-width-2');
    rightElement.children[2].style.visibility = 'hidden';
    rightElement.children[3].style.visibility = 'hidden';
 };
 
 let rightElemHiddenContent = () => {
     rightElement.classList.remove('min-width-2', 'max-width-2'); 
     leftElement.classList.remove('min-width-1', 'max-width-1');
 
    rightElement.classList.add('max-width-2');
    rightElement.children[2].style.visibility = 'visible';
    rightElement.children[3].style.visibility = 'visible';
    rightElement.children[4].style.marginTop = '8rem';
 
    leftElement.classList.add('min-width-1'); 
    leftElement.children[2].style.visibility = 'hidden';
    leftElement.children[3].style.visibility = 'hidden';
 };
 
 // Attach event listeners only when screen width is >= 981px
 if (window.innerWidth >= 981) {
         leftElement.addEventListener('click', leftElemHiddenContent);
         rightElement.addEventListener('click', rightElemHiddenContent);
}
// Logic for Reset the style applied by js below 981px page size-->

/*window.addEventListener('resize', () => {
    if (window.innerWidth < 981) {
        // Force reset styles
        leftElement.style = "";
        rightElement.style = "";

        // Reset visibility and margins
        leftElement.children[2].style.visibility = 'visible';
        leftElement.children[3].style.visibility = 'visible';
        leftElement.children[4].style.marginTop = '';

        rightElement.children[2].style.visibility = 'visible';
        rightElement.children[3].style.visibility = 'visible';
        rightElement.children[4].style.marginTop = '';

        // Remove dynamically added width classes
        leftElement.classList.remove('max-width-1', 'min-width-1');
        rightElement.classList.remove('max-width-2', 'min-width-2');
    }
});*/


const scrollTopBtn = document.querySelector('.fix-button');
const footer = document.querySelector('footer');

window.addEventListener('scroll' ,()=>{
    scrollTopBtn.style.visibility='visible';
  //Get the position of the footer relative to viewport
  const footerTop = footer.getBoundingClientRect().top;
   if(footerTop < window.innerHeight){
    //If the footer is visible in viewport, show button (Right to Left)

    // Below for Toggle Nature and infinite nature-->
    scrollTopBtn.classList.remove('invisibleLeftToRight');
    scrollTopBtn.classList.add('visibleRightToLeft');
   }else{
    //If footer is not in viewport, hide button (Left to Right)

    // Below for Toggle Nature-->
    scrollTopBtn.classList.remove('visibleRightToLeft');
    scrollTopBtn.classList.add('invisibleLeftToRight');
   }
});
//Scroll to top when clicking the button
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
