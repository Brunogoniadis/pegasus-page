import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root
    {
        --color-primary: #121214;
        --color-secondary:#4b31b9;
        --color-error:#EA524F;
        --color-text:#0E0E0E;
        --color-text-grey: #373737;
        --color-backgroundMain: #ffffff;
        --color-border: rgba(0, 0, 0, 0.5);
        --color-border-project:#B8B8B8;
        --color-backgroundCard: #fefefe;
  }

    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
    }

    body,html{
        width: 100vw;
    }
    button{
        cursor: pointer;
    }

    body {
        background: var(--color-backgroundMain);
        color: var(--color-text);
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
        overflow-y: overlay;
    }

    body, input, button, textarea{
        font-family: 'Poppins';
        //font-size: 1.6rem;
    }
        h1{
            font-size: min(3.5em , 3vw);
        
        }
        h2{
            font-size: min(40px , 2.2vw);
        }
        h3{
            font-size: min(28px , 1.8vw);
        }
        p{
            font-size: min(20px , 1.5vw);
        }

    h1, h2, h3, h4, h5, h6, p, strong{
        font-weight: 500;
        font-family: 'Poppins';
    }

    
    @media (max-width: 512px) {

        h1{
            font-size: 1.5em;
        }
        h2{
            font-size: 1.2em;
        }
        h3{
            font-size: 1.0em;
            font-weight: normal;
        }
        p{
            font-size: 0.8em;
            font-weight: normal;
        }
    }


`;
