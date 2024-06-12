import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 8%;
    
	position: fixed;
    top: 0;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left:10vw;
    padding-right: 10vw;
    background-color: var(--color-primary);
    border-bottom: 1px solid var(--color-border);
    z-index: 1000;
    color: white;
    .descriptionPages{
        display: flex;
        
        flex-direction: row;
        gap: 0.5rem;
    }
    @media (max-width: 512px) {
        display: none;
        width: 10vw;
        font-size: 5px;
    }
    .linkScroll{
        cursor: pointer;
    }
`