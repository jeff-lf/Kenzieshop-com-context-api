import styled from "styled-components";

export const Container = styled.div`
    height: 8vh;
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: space-around;

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        background:none ;
        font-size: 14px;
        border-radius: 4px;
        border: none;
        width: 80px;
        height: 30px;
        transition: transform .2s
    }

    button:hover{
        transform: scale(1.4);
    }

`