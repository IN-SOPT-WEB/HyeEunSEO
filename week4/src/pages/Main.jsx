import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

import axios from "axios";
import User from "../components/User";

export default function Main() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState();

    const getUserInfo = async (e) => {
        if (e.keyCode === 13) {
            const { data } = await axios.get(`https://api.github.com/users/${e.target.value}`);
            setUserInfo(data);
            navigate(`/search/${e.target.value}`);
        }
    };

    useEffect(() => {
        getUserInfo();
    }, [userInfo]);

    return (
        <St.Root>
            <St.SearchWrapper>
                <St.Title>깃허브 다 찾아내주마</St.Title>
                <St.Input type="search" placeholder="Github Username" onKeyUp={getUserInfo} />
            </St.SearchWrapper>
            <User userInfo={userInfo} />
        </St.Root>
    );
}

const St = {
    Root: styled.div`
        width: 100vw;
        height: 100vh;
        font-family: "HBIOS-SYS";

        background-color: #f4f4f4;

        display: flex;
        flex-direction: column;
        align-items: center;
    `,

    SearchWrapper: styled.div`
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

    Input: styled.input`
        padding: 0.3rem 0.5rem;
        border-radius: 3rem;

        display: flex;
        align-items: center;
        font-family: "HBIOS-SYS";
    `,
};
