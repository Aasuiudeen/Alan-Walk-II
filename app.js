const hamburger = document.querySelector(".hamburger");
const aside = document.querySelector("aside");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open");
  aside.classList.toggle("open-sidebar");
});

const closeIt = document.querySelector(".close");
const confirmIt = document.querySelector(".confirm");
const playIcon = document.querySelector(".play-icon");

playIcon.addEventListener("click", function () {
  confirmIt.classList.add("open-confirm");
});

closeIt.addEventListener("click", function () {
  confirmIt.classList.remove("open-confirm");
});

const form = document.querySelector(".form");
const formInput = document.querySelector(".confirm-input");
const confirm2 = document.querySelector(".confirm-2");
const closeIt2 = document.querySelector(".close-2");

form.addEventListener("submit", function () {
  //   console.log("Submitted");
  let vass = formInput.value;
  if (vass < 18) {
    confirm2.classList.add("open-confirm-2");
    closeIt2.addEventListener("click", function () {
      confirm2.classList.remove("open-confirm-2");
    });
  } else {
    confirmIt.classList.remove("open-confirm");
  }
});
