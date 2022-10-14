"use strict";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const currentOptionBox = $(".current-optionBox");
const optionLists = $(".option-items");
const optionItem = $$(".option-item");
const currentOption = $(".current-option");

// ** Dropdown **
// 1. option을 클릭했을 때 ul의 hidden이 toggle
currentOptionBox.addEventListener("click", () => {
    optionLists.classList.toggle("hidden");
});

// 2. option-item을 클릭 시, currentOptionBox안의 p태그 이름 변경
optionLists.addEventListener("click", (e) => {
    if (e.target.tagName !== "LI") return;
    currentOption.innerText = e.target.innerText;
    // 모든 요소에 active 없애주고 현재 거에 active 붙여주기
    optionItem.forEach((el) => {
        el.classList.remove("active");
    });
    e.target.classList.add("active");
    optionLists.classList.add("hidden");
});
