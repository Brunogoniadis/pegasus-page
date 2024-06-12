import styled from "styled-components";



export const Container = styled.div`

  .sidebarContainer{
    position: fixed;

    height: 100%;
    width: 100%;
    background-color: rgba(3, 3, 4, 0.7); 
    border: none;
    display : none;

    z-index: 990;

    @keyframes

    background{
                from {opacity:0}
                to {opacity:100}
              }
    animation: background 0.2s;
    overflow-y: hidden;
  }
  

  h1{
    position: absolute;
  }

  button{
    position: fixed;
    right: 2.5vh;
    top: 2.5vh;
    width: 5vh;
    height: 5vh;
    background-color: transparent;
    border: none;
    
    svg{
      width: 100%;
      height: 100%;
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(207deg) brightness(106%) contrast(102%);
    }
  }


  .sidebar{
    height: 100%;
    width: 220px;

    display: flex;
    flex-direction: column;

    position: fixed;

    
    z-index: 1001;
    border-radius: 0 10px 10px 0;
    background-color: var(--color-backgroundMain);  

    align-items: center;

    transform: translateX(-100%);
    transition: transform 0.3s ease-out;
  }
  h2{
    margin-top: 5vh;
    margin-bottom: 10vh;
  }

  .linkScroll{

    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;


    width: 200px;
    height: 45px;
    margin-bottom: 10vh;

    background-color: var(--color-backgroundMain);


    border-radius: 10px 0px 0px 10px;

    gap: 10px;

    display: flex;
    align-items: center;

    &:hover{

      background-color: transparent;
      h3{
        display: none;
      }


      @keyframes linkAnim {
                0%   {margin-left: 0px; position:relative}
                75%  {margin-left: 120vw;position:relative}
                90%  {margin-left: 120vw;position:relative}
                100% {margin-left: 0px; position:relative}
      }
      animation: linkAnim 0.9s;

    }
    
  }
`