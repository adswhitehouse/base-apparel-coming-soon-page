// Variables
let form = document.querySelector("form");
let formBtn = document.querySelector(".jsFormBtn");
let errorMsg = document.querySelector(".jsErrorMsg");
let error = document.querySelector(".jsError");
let input = document.querySelector(".jsInput");

// Temporarily displays visuals warnings if email is invalid
let timeout;
let isActive = false;
formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let email = input.value;
  let emailFormat = /^[^@]+@[^@]+\.[^@]+$/;

  if (!emailFormat.test(email)) {
    if (!isActive) {
      [errorMsg, error, form].forEach((el) => el.classList.add("toggle-error"));
      isActive = true;
      timeout = setTimeout(() => {
        [errorMsg, error, form].forEach((el) =>
          el.classList.remove("toggle-error")
        );
        isActive = false;
      }, 2000);
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        [errorMsg, error, form].forEach((el) =>
          el.classList.remove("toggle-error")
        );
        isActive = false;
      }, 2000);
    }
  }
});
