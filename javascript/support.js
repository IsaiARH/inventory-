"use strict";

const question = document.querySelector(".question");
const main = document.querySelector(".select");
question.addEventListener("click", () => {
  main.classList.add("d-none");
});
