/*
    Emily Hartz-Kuzmicz
    job346
    11350337
    CMPT281
*/

let slideIndex = 1;
displaySlides(slideIndex);

/* 
Changes the image based on which (< >) button is pressed.

Parameters:
  n: An integer to add to slideIndex, then pass to 
     displaySlides to show the new image.
*/
function changeSlides(n) {
  displaySlides(slideIndex += n);
}

/*
Displays a single carousel image.

Parameters:
  n: An integer index value to access the image in the 
     array of carousel images.
*/
function displaySlides(n) {
  let i;
  let slides = document.getElementsByClassName("CarouselImage");

  //If the index is greater than the array length
  if (n > slides.length) {
    slideIndex = 1;

    //If the index is smaller than the smallest array index
  } else if (n < 1) {
    slideIndex = slides.length;
  } 

  //Sets all images to display=none
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  //Shows a single image
  slides[slideIndex-1].style.display = "initial";
} 