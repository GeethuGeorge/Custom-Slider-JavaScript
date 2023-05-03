//DOM Elements
let slider = document.querySelector("#slider");
let slides = document.querySelectorAll(".slide");
let prevButton = document.querySelector(".prevButton");
let nextButton = document.querySelector(".nextButton");

let slideCount = slides.length;
let activeSlideIndex = 0;

let navigation = document.querySelector(".navigation");

//To show the first slide on site load
//--------------------------------------------------------------------------
slides[activeSlideIndex].classList.add("active");

//Create navigation bullets
//---------------------------------------------------------------------------
for (let i = 0; i < slideCount; i++) {
  let bullet = `<input class="bullet" type="radio" name="nav"  data-id=${i} />`;
  navigation.innerHTML += bullet;
}

let bullets = document.querySelectorAll(".bullet");
bullets[activeSlideIndex].checked = true;

//Function to clear active class
//--------------------------------
function resetSlides() {
  slides[activeSlideIndex].classList.remove("active");
  //  slides.forEach((slide) => slide.classList.remove("active"));
}

//Function to show next slide
//--------------------------------
function nextSlide() {
  resetSlides();
  activeSlideIndex++;
  //   console.log(activeSlideIndex);
  if (activeSlideIndex > slideCount - 1) {
    activeSlideIndex = 0;
  }
  bullets[activeSlideIndex].checked = true;
  slides[activeSlideIndex].classList.add("active");
}

//Function to show previous slide
//--------------------------------
function prevSlide() {
  resetSlides();
  activeSlideIndex--;
  if (activeSlideIndex < 0) {
    activeSlideIndex = slideCount - 1;
  }
  bullets[activeSlideIndex].checked = true;
  slides[activeSlideIndex].classList.add("active");
}

//Event to display slides when radio button selects
//--------------------------------
bullets.forEach((item) => {
  item.addEventListener("change", function (e) {
    resetSlides();
    activeSlideIndex = e.target.dataset.id;
    slides[activeSlideIndex].classList.add("active");
  });
});

//Events
//----------------------------------------------------------------------------
nextButton.addEventListener("click", nextSlide);

prevButton.addEventListener("click", prevSlide);
