import { useNavigate, Outlet } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

import axios from "axios";
import User from "../components/User";
import History from "../components/History";

export default function Main() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState();
    const [searchHistory, setSearchHistory] = useState([]);
    const [visible, setVisible] = useState(false);

    const getUserInfo = async (e) => {
        if (e.key === "Enter") {
            const { data } = await axios.get(`https://api.github.com/users/${e.target.value}`);
            setUserInfo(data);
            navigate(`/search/${e.target.value}`);
            setSearchHistory([...searchHistory, e.target.value]);
        }
    };

    const showHistory = () => {
        searchHistory && setVisible(true);
    };

    const hideHistory = () => {
        setVisible(false);
    };

    useEffect(() => {
        getUserInfo();
    }, [userInfo]);

    return (
        <St.Root onClick={hideHistory}>
            <St.SearchWrapper>
                <St.Title>깃허브 다 찾아내주마</St.Title>
                <St.Input
                    type="search"
                    placeholder="Github Username"
                    onKeyUp={getUserInfo}
                    onClick={showHistory}
                />
                {visible ? <History searchHistory={searchHistory} /> : <></>}
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

    SearchWrapper: styled.section`
        padding: 1rem 3rem;
        margin: 3rem 0 2rem;
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
        border-radius: 1rem;

        display: flex;
        align-items: center;
        font-family: "HBIOS-SYS";
    `,
};
