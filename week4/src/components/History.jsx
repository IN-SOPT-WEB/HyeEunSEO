import { useEffect } from "react";
import styled from "styled-components";

export default function History({ searchHistory, setSearchHistory }) {
    const removeHistory = (history) => {
        setSearchHistory(searchHistory.filter((i) => i !== history));
    };

    return (
        <St.Root>
            {searchHistory &&
                searchHistory.map((history) => {
                    console.log(history);
                    return (
                        <St.History>
                            <St.UserId>{history}</St.UserId>
                            <St.DeleteBtn onClick={removeHistory}>X</St.DeleteBtn>
                        </St.History>
                    );
                })}
        </St.Root>
    );
}

const St = {
    Root: styled.div`
        position: absolute;
        top: 10rem;
        background-color: rgb(0, 0, 0, 0.5);
        width: 15rem;
        border-radius: 0.5rem;
    `,

    History: styled.div`
        display: flex;
        justify-content: space-between;
        padding: 0.2rem 0.4rem;
        align-items: center;
    `,

    UserId: styled.p`
        color: white;
        font-size: 1.2rem;
    `,

    DeleteBtn: styled.button`
        background-color: transparent;
        border: none;
        font-size: 1rem;
        color: white;
        width: 2rem;
        cursor: pointer;
    `,
};
