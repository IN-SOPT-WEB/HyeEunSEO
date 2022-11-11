import React from "react";
import Search from "../components/Search";
import User from "../components/User";

import styled from "styled-components";

import { useState, useEffect } from "react";
import getGithubProfile from "../lib/api.js";

export default function Main() {
    const [userName, setUserName] = useState("");
    const [userData, setUserData] = useState([]);

    const UserProfile = async (userName) => {
        const data = await getGithubProfile(userName);
        data && setUserData(data.data);
    };

    useEffect(() => {
        // userName 값이 있을 때만 GET 요청해라!
        userName && UserProfile(userName);
    }, [userName]);

    return (
        <St.Root>
            <Search setUserName={setUserName} />
            <User userData={userData} />
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
};
