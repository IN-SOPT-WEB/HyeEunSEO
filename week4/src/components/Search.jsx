import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import axios from "axios";

export default function Search({ userInfo, setUserInfo }) {
    const navigate = useNavigate();

    useEffect(() => {
        getUserInfo();
    }, [userInfo]);

    const getUserInfo = async (e) => {
        if (e.keyCode === 13) {
            const { data } = await axios.get(`https://api.github.com/users/${e.target.value}`);
            setUserInfo(data.data);
            navigate(`/search/${e.target.value}`);
        }
    };

    return (
        <St.SearchWrapper>
            <St.Title>깃허브 다 찾아내주마</St.Title>
            <St.Input type="search" placeholder="Github Username" onKeyUp={getUserInfo} />
        </St.SearchWrapper>
    );
}

const St = {
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
