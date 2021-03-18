const closeButton = document.querySelector(".popup-close");
const openButton = document.querySelector(".openbutton");
const popup = document.querySelector(".popup");
const form = document.querySelector(".feedback-form");
const inputEmail = document.querySelector(".feedback-email");
const inputName = document.querySelector(".feedback-name");
const inputMessage = document.querySelector(".feedback-text");

// open form
openButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-hidden");
});

closeButton.addEventListener("click", function () {
  popup.classList.add("popup-hidden");
  popup.classList.remove("popup-shake");
  form.classList.remove("form-error");
});

form.addEventListener("submit", function (e) {
  if (!inputEmail.value || !inputName.value || !inputMessage.value) {
    e.preventDefault();
    popup.classList.remove("popup-shake");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-shake");
    form.classList.add("form-error");
  }
});

//Слайд шоу

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
  showSlides((slideIndex += 1));
}

function minusSlide() {
  showSlides((slideIndex -= 1));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slider");
  const dots = document.getElementsByClassName("slider-button");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active-slide");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("slider-button-active");
  }
  slides[slideIndex - 1].classList.add("active-slide");
  dots[slideIndex - 1].classList.add("slider-button-active");
}
