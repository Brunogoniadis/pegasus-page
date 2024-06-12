import styled from "styled-components";
import Slider from "react-slick";

export const CustomSlider = styled(Slider)`
  * {
    text-decoration: none;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;

  .slick-dots {
    bottom: 45px;
    @media (max-width: 500px) {
      bottom: 0;
    }
  }

  @media (max-width: 500px) {
    height: 450px;
  }
  .slick-list {
    width: 80vw;
    border: 1px solid var(--color-border-project);
    border-radius: 15px;
    height: 80vh;
    overflow: hidden;
    display: grid;

    @media (max-width: 500px) {
      height: 250px;
      border: none;
    }

    margin-bottom: 2rem;

    .slick-track {
      overflow: hidden;
      width: 1080px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
    }
  }
`;

export const ItemSlide = styled.div`
  width: 450px !important;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1366px) {
    width: 340px !important;
    height: 450px;
  }

  @media (max-width: 500px) {
    width: 140px !important;
    height: 150px;
    background-color: green;
  }

  h2,
  p,
  h2 {
    font-size: min(29px, 2.2vw);
    margin-top: 0.5rem;
  }
  h3 {
    font-size: min(28px, 1.8vw);
  }
  p {
    font-size: min(20px, 1.5vw);
  }

  img {
    width: 100%;
    background-repeat: no-repeat;
    object-fit: cover;
    margin: 0.5rem 0rem 0.5rem;
    border-radius: 15px;
    background-color: #d2d2d2;
    display: flex;
    position: relative;
  }

  .title {
    display: flex;
    position: relative;

    width: 80%;
    height: 50px;
    background-color: white;
    margin-top: -40px;
    z-index: 501;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 500px) {
    height: auto;
    padding-top: 20%;
  }

  .title {
    width: 100vw;
    text-align: center;
    height: 15%;
    margin-top: 5vw;
    margin-bottom: 2vw;
  }

  .projectContainer {
    justify-content: center;
    margin: 20px;

    width: 80vw;
    height: 80vh;

    display: grid;
    grid-template-columns: auto auto auto;

    column-gap: 0.5vh;
  }

  .arrowContainer {
    width: 140px;
    height: 80px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 10vw;
    z-index: 501;
    gap: 25px;

    @media (max-width: 500px) {
      display: none;
    }
  }

  .arrow {
    background-color: red;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    background-color: transparent;
    border: none;
  }

  @media (max-width: 512px) {
    .projectContainer {
      grid-template-columns: auto auto;
      justify-content: space-around;
      row-gap: 10vh;
      margin-top: -15vh;
      width: 95%;
    }
  }
`;
