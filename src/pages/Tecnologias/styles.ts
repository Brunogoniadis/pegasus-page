import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  padding-left: 10vw;
  padding-right: 10vw;

  .title {
    width: 100vw;
    text-align: center;
    height: 15%;
    margin-top: 5vw;
    margin-bottom: 2vw;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .grid-card-container {
    height: auto;
    display: grid;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 5px;
    gap: 30px;
    grid-template-columns: auto auto auto auto;

    @media (max-width: 500px) {
      grid-template-columns: auto auto;
    }
  }
`;
