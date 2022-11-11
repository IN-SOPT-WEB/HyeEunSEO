import React from "react";
import styled from "styled-components";

export default function Search({ setUserName }) {
    // 엔터 누를 때 userId 받아오기
    const searchUserId = (e) => {
        if (window.event.keyCode === 13) {
            setUserName(`${e.target.value}`);
        }
    };

    return (
        <St.Root>
            <St.Title>깃허브 다 찾아내주마</St.Title>
            <St.SearchBtn type="search" placeholder="Github Username" onKeyUp={searchUserId} />
        </St.Root>
    );
}

const St = {
    Root: styled.div`
        padding: 1rem 3rem;
        margin: 5rem 0 2rem;
        border: 3px solid black;
        border-radius: 1rem;
        background-color: #28cdc8;
        width: 30rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    `,

    Title: styled.h1`
        font-size: 2rem;
        font-weight: bold;
        color: #ff7e94;
    `,

    SearchBtn: styled.input`
        padding: 0.3rem 0.5rem;
        border-radius: 3rem;

        display: flex;
        align-items: center;
        font-family: "HBIOS-SYS";
    `,
};
