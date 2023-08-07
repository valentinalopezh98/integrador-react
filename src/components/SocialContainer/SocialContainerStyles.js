import {styled} from "styled-components"

export const SocialContainerStyled = styled.div`
    @keyframes slide-up{
        from  {
            transform: translateY(6.25rem);
        }
        to {
            transform: translateY(0);
        }
    }  

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 60px 40px;
    width: 100%;
    max-width: 1200px;
    height: auto;
    animation: fade 1.2s ease-in, slide-up 1s ease-in;

    @media (max-width: 375px){
        flex-direction: column;
        gap: 30px;
    }
`