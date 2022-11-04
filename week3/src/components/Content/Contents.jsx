import 떠현 from "../assets/img/떠현.jpg";
import 떠히 from "../assets/img/떠히.jpeg";
import 준쌍 from "../assets/img/준쌍.jpeg";
import 핸지 from "../assets/img/핸지.jpg";
import 헤은 from "../assets/img/헤은.png";

import React, { useState } from "react";
import styled from "styled-components";

export default function Contents() {
    const friends = [
        { name: "헤은", img: 헤은 },
        { name: "떠히", img: 떠히 },
        { name: "준쌍", img: 준쌍 },
        { name: "핸지", img: 핸지 },
        { name: "떠현", img: 떠현 },
    ];
    const [order, setOrder] = useState(0);

    return (
        <div>
            <img src={friends[order].img} alt="썸네일" />
            <p>누구냐</p>
            <ul>
                <li>헤은</li>
                <li>떠히</li>
                <li>준쌍</li>
                <li>핸지</li>
                <li>떠현</li>
            </ul>
        </div>
    );
}

// const Img = styled.img``;
