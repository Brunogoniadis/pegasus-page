import styled from "styled-components";

const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};


export const Container = styled.div`

    width: 13vw;
    height: 20vh;

    background-color: ${randomColor};

    transform: rotate(${() => Math.floor(Math.random() * 13) - 8}deg);

    z-index: 1;
    

    padding: 25px;

    .tape1{
        position: relative;
        width: 1vw;
        height: 4vh;
        background-color: aliceblue;
        bottom: 13vh;

        right: ${() => Math.floor(Math.random() * (25 - (-2) + 1) + (-5))}px;

        transform: rotate(${() => Math.floor(Math.random() * 18)}deg);


    }
    .tape2{
        position: relative;
        width: 1vw;
        height: 4vh;
        background-color: aliceblue;
        bottom: 17vh;
        left: ${() => `calc(${(Math.random() * (9.5 - 8) + 8).toFixed(1)}vw)`};

        transform: rotate(${() => Math.floor(Math.random() * 26)}deg);
    }

    @media (max-width: 512px) {
        width: 35vw;
        height: 25vh;

        .tape1{
            bottom: 15vh;
            width: 3.2vw;
        }
        .tape2{
            left: 19vw;
            top: -2vh;
            width: 3.2vw;
        }
    }
    
    @media (max-width: 1024px) {
        .tape1{
            top: -14vh;
        }
        .tape2{
            top: -18vh;
        }
    }
    @media (max-width: 1280px){
        .tape1{
            top: -16vh;
        }
        .tape2{
            top: -20vh;
        }
    }
    @media (max-width: 1366px){
        .tape1{
            top: -16vh;
        }
        .tape2{
            top: -20vh;
        }
    }

`