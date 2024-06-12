import styled from "styled-components";

export const ModalContainer=styled.div`
    position: fixed;
    z-index: 10001;
    top: 0vw;

    width: 100%;
    height: 100vh;
    
    background-color: rgba(3, 3, 4, 0.7); 


    @keyframes 
    example {
                from {opacity:0}
                to {opacity:100}
            }
    animation: example 0.2s;


    font-weight: normal;

    .overlay{
        


        width: 100%;
        height: 100%;
        
        display: flex;
        align-items: center;
        justify-content: center;

        position:absolute;

    }
    .content{

        width: 50%;
        height: 90%;
        border-radius: 10px;

        top: 9vh;
        left: 25vw;



        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-color: var(--color-backgroundMain);


        z-index:1001;
        position:absolute;
        

        img{
            width: 100%;
        } 

        h2{
            
            margin-top: -50px;
            margin-bottom: 10px;
        }

        .pContainer{

            margin-top: 2px;
            padding: 6px;

            width: 100%;
            height: auto;

            display: flex;
            gap: 20px;
        }
        .containerLink{
            width: 100%; 
            text-align: center;
            margin: 15px;
        }
        
    }
    @media (max-width: 512px){
        align-items: center;
        justify-content: center;
        width: 100vw;

        .overlay{

            height: 1000px;
        }
        .content{
            width: 85%;
            height: 65%;
            left: 8vw;
            right: 5vw;

        }
    }

`
export const MyAnchor = styled.a`
    color: var(--color-text);
`