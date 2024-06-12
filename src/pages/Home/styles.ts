import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-size: min(3.5em, 3vw);
    font-weight: 600;
  }

  h2 {
    font-size: min(2.2em, 2vw);
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: min(2.6em, 1.8vw);
    margin-bottom: 1rem;
  }

  h4 {
    font-size: min(2.2em, 1.6vw);
    font-weight: 100;
    margin-bottom: 0.2rem;
  }

  p {
    font-size: min(1.8em, 1.2vw);
    margin-bottom: 0.5rem;
    font-weight: 100;
  }

  ul {
    list-style-type: none;
    padding: 0;

  }
  li {
    gap: 0;
  }

  display: flex;
  align-items: center;
  justify-content: start;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  border-radius: 0 0 250px 0px;

  .content {
    display: flex;
    flex-direction: column;

    justify-content: space-around;
    align-items: start;

    gap: 35%;
    margin-left: 10vw;
  }

  .textInfo {
    margin-bottom: 0px;
    color: white;
  }
  .asideButton {
    visibility: hidden;
  }

  @media (max-width: 512px) {
    flex-direction: column-reverse;

    .asideButton {
      visibility: visible;
      position: fixed;
      top: 2vh;
      right: 2vh;
      width: 5vh;
      height: 5vh;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      border: none;
      background-color: transparent;

      svg {
        width: 5vh;
        height: 5vh;
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
          brightness(103%) contrast(103%);
      }
    }

    h1 {
      font-size: 1.5em;
      text-align: center;
      left: 20vw;
      right: 20vw;
    }
    h2 {
      font-size: 1.2em;
      font-weight: normal;
    }
    h3 {
      font-size: 1em;
      font-weight: normal;
    }
    p {
      font-size: 0.8em;
      font-weight: normal;
    }

    .textsDescriptionContainer {
      width: 100%;
      text-align: center;
    }
    .descriptionTopList {
      margin-top: -5vh;
    }

    .descriptionList {
      border: 2px solid var(--color-secondary);

      box-shadow: 0 0 20px var(--color-secondary);

      border-radius: 5px;
      padding: 2px;
    }
  }
`;
