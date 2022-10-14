"use strict";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const tagInput = $(".tag__input");
const tagItems = $(".tag-items");

// ** 태그 CREATE/DELETE
// 1.input 태그에 텍스트를 입력하고 엔터를 누르면, 해당 태그 Element를 생성하여 추가한다
tagInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        const li = document.createElement("li");
        li.setAttribute("class", "tag-item");
        li.innerText = tagInput.value;
        tagItems.appendChild(li);

        // 3. 생성된 태그를 누르면 삭제된다.
        li.addEventListener("click", (e) => {
            li.remove();
        });

        tagInput.value = "";
    }
});
