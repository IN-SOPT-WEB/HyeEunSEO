"use strict";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const nav = $("#navBar");
const todos = $$("#todos > section");
const inputs = $$(".todos__input");
const addBtns = $$(".todos__add-btn");
const allItems = $$(".todos__items");
const deleteBtns = $$(".todos__delete-btn");
const deleteBtn = $(".todos__delete-btn");

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

// addBtn 클릭 시 item 생성
addBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        addItem(index);
    });
});

// enter 버튼 누를 시 item 생성
inputs.forEach((input, index) => {
    input.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            addItem(index);
        }
    });
});

// input에 입력 시 태그 생성
const addItem = (index) => {
    if (inputs[index].value === "") return;

    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");

    li.setAttribute("class", "todos__item");
    span.setAttribute("class", "todos__name");
    deleteBtn.setAttribute("class", "todos__delete-btn");

    span.innerText = inputs[index].value;
    deleteBtn.innerText = "X";

    allItems[index].appendChild(li);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    inputs[index].value = "";
};

// deleteBtn 클릭 시 item 삭제 (이벤트 위임!!)
allItems.forEach((itemList) => {
    itemList.addEventListener("click", (e) => {
        if (e.target.tagName !== "BUTTON") return;
        e.target.closest("li").remove();
    });
});
