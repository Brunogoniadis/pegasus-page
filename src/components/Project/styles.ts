import styled from "styled-components";

export const ProjectContainer= styled.div`
    height: 20vw;    
    width: 30vw;


    align-items: center;



    color:var(--color-text);


    display: flex;
    flex-direction: column;
    
    

    h3{
        font-size: min(18px , 1.4vw);
        font-weight: normal;
    }
    p{
        font-size: min(15px , 1.2vw);
        font-weight: normal;
    }

    .imgContainer{
        display: flex;
        flex-direction: column;

        img{
            width: 26vw;
            height: 14vw;
            margin-top: 1vw;

            border-radius: 15px;
        }

    }
    .descriptionContainer{
        width: 100%;
        display: flex;

        flex-direction: column;
        align-items: flex-start;

        margin-top: 1vh;
        
        .pContainer{
            display: flex;
            flex-direction: row;
            width: 100%;
            align-items: flex-end;
            gap:0.8vw ;
        }
    }

    @media (max-width: 512px){
        

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
        
        
        .imgContainer{
            img{
                width: auto;
                height: 24vw;
                margin-top: 1vw;
                border-radius: 15px;
        }
        }
    }

`