import styled from "styled-components";
import {Button} from "../catBox/CatBox.styles";

export const Background = styled.div`
    position: fixed;
    display: flex;
    justify-content:center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(128, 128, 128, 0.6);
    z-index: 2;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 300px;
    border: 2px solid black;
    padding:20px;
    border-radius: 7%;
`;

export const Para = styled.p`
    font-size: 22px;
`;

export const CloseButton = styled(Button)`
width: 100px;

`;