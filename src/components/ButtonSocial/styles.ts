import styled from "styled-components";
import { Link } from "@reach/router";


export const Container = styled.div`
    width: 5vw;
    height: 5vw;

    border: none;
    border-radius: 6px;

    background-size: cover;
    background-repeat: no-repeat;

    align-items: center;
    justify-content: center;

    overflow: hidden;

    @media (max-width: 512px) {
        width: 12vw;
        height: 12vw;
    }
`
export const MyAnchor = styled.a`
    
    text-decoration:none;
    color: transparent;
    font-size: 120px;
    -webkit-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none;
`