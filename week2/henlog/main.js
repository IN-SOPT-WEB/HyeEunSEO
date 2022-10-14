"use strict";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const option = $(".option");
const optionLists = $(".option-Items");

// 1. option을 클릭했을 때 ul의 hidden이 사라진다.
option.addEventListener("click", () => {
    optionLists.classList.toggle("hidden");
});
