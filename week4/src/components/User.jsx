import React from "react";
import styled from "styled-components";

export default function User({ userData }) {
    console.log(userData);

    return (
        <St.Root>
            <St.ProfileImg src={userData.avatar_url} alt="유저 프로필사진" />
            <St.UserId>{userData.login}</St.UserId>
            <St.UserName>{userData.name}</St.UserName>
            <St.UserSite>
                <a href={userData.html_url}>Visit {userData.login}</a>
            </St.UserSite>
            <St.UserInfo>
                <St.UserItem>
                    <h3>Followers</h3>
                    <p>{userData.followers}</p>
                </St.UserItem>
                <St.UserItem>
                    <h3>Following</h3>
                    <p>{userData.following}</p>
                </St.UserItem>
                <St.UserItem>
                    <h3>Repos</h3>
                    <p>{userData.public_repos}</p>
                </St.UserItem>
            </St.UserInfo>
        </St.Root>
    );
}

const St = {
    Root: styled.div`
        border: 3px solid black;
        border-radius: 1rem;
        background-color: #28cdc8;
        width: 30rem;
        padding: 1rem 5rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    `,

    ProfileImg: styled.img`
        width: 20rem;
        height: 20rem;
        border: 3px solid black;
        border-radius: 1rem;
    `,

    UserId: styled.h2`
        font-size: 3rem;
        color: yellow;
    `,

    UserName: styled.h2`
        font-size: 1rem;
    `,

    UserSite: styled.button`
        font-family: "HBIOS-SYS";
        font-size: 1.2rem;
        border-radius: 1rem;
        background-color: #ff7e94;
        color: white;
    `,

    UserInfo: styled.ul`
        width: 20rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `,

    UserItem: styled.li`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.3rem;
    `,
};
