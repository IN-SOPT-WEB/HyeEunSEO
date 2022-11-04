"use strict";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const tagInput = $(".tag__input");
const tagItems = $(".tag-items");
const tagSet = new Set();

// ** 태그 CREATE/DELETE
// 1.input 태그에 텍스트를 입력하고 엔터를 누르면, 해당 태그 Element를 생성하여 추가한다
tagInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        // 2. 같은 텍스트가 tagSet에 존재하면 추가하지 않는다
        if (!e.target.value || tagSet.has(e.target.value)) {
            e.target.value = "";
            return;
        }
        addTag(e.target.value);
    }
});

const addTag = (text) => {
    tagSet.add(text);

    const li = document.createElement("li");
    li.classList("class", "tag-item");
    li.innerText = tagInput.value;
    tagItems.appendChild(li);

    // 3. 생성된 태그를 누르면 삭제된다.
    li.addEventListener("click", (e) => {
        li.remove();
    });

    tagInput.value = "";
};
