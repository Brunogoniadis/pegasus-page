import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
` 
export const Icon = styled.div`
    z-index:1001;
    display: flex;
    position: relative;
    bottom:92%
`

export const Container = styled.div`
    
    div {
        height: 54px;
        
        width: auto;
        display: flex;
        align-items: flex-end;
    
        color: black;

        
        input {
            width: 100%;
            height: 100%;
            padding: 20px;
            padding-right: 30px;
            border: 1.25px solid;
            display: flex;
            color: black;
            border-radius: 5px;
            border-color: var(--color-secondary);
            z-index: 20;
        :focus{
            box-shadow: 0 0 20px var(--color-secondary);



        }

        }
        label {
            display: flex;
            align-items: center;
            height: 100%;
            z-index: 20;
            user-select: none;

            position: absolute;
            top: 0;
            padding-left: 20px;
            transition: top 0.5s, left 0.3s; 
        }
        input:is(:focus, :not(:placeholder-shown)) + label {
            top: -20px;
            left: 10px;
            user-select: none;

            height: fit-content;
            padding: 3px 10px;
            border-radius: 14px;
            background-color: var(--color-containerPages);
            color: var(--color-text);
            font-size: 12px;
            transition: 0.25s ;
        }
    
        input:focus ~ svg {
            color: var(--color-secondary);
        }
    
        svg {
            width: 18px;
            height: 18px;
        }
    }
    
    p.error-input {
        margin-top: 2px;
        position: absolute;
        text-align: left;
        color: var(--error-color)
    }

    
`;
