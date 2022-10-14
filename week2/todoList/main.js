"use strict";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const nav = $("#navBar");
const todos = $$("#todos > section");

// 오늘만 보기, 내일만 보기, 함께 보기 버튼에 따라 레이아웃 변경
nav.addEventListener("click", (e) => {
    if (e.target.className.includes("navBar__today")) {
        todos[0].classList.add("open");
        todos[1].classList.remove("open");
    } else if (e.target.className.includes("navBar__tomorrow")) {
        todos[0].classList.remove("open");
        todos[1].classList.add("open");
    } else if (e.target.className.includes("navBar__both")) {
        todos[0].classList.add("open");
        todos[1].classList.add("open");
    }
});
