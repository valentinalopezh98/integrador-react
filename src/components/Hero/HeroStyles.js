import {styled} from "styled-components"

export const HeroWrapperStyled = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: auto;
    max-width: 1200px;
    margin-top: 80px;
    padding: 60px 40px;
`
export const HeroLeftStyled = styled.div`

    @keyframes slide-right {
        from  {
            transform: translateX(-6.25rem);
        }
        to {
            transform: translateX(0);
        }
    }

    @keyframes slide-up{
        from  {
            transform: translateY(6.25rem);
        }
        to {
            transform: translateY(0);
        }
    }  

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    gap: 30px;
    animation: fade 1s ease-in, slide-right 1s ease-in;

    & h1{
        text-align: left;
        text-transform: uppercase;
        font-size: 3rem;
        font-weight: 500;
    }

    & h1 span{
        padding: 0 0.3125rem;
        font-size: 3rem;
        background: linear-gradient(to bottom, transparent 50%, var(--primary-color) 50% );
    }

    & p {
        font-size: 1.1rem;
    }

    @media (max-width: 1024px){
        width: 100%;
        align-items: center;
        animation: fade 1s ease-in, slide-up 1s ease-in;

        & h1{
            text-align: center;
        }

        & p {
            text-align: center;
        }
    }

    @media (max-width: 375px){
        
        & h1{
            font-size: 40px;
        }

        & h1 span{
            font-size: 40px;
        }
    }
`

export const HeroRightStyled = styled.div`

    
    @keyframes slide-left {
        from  {
            transform: translateX(6.25rem);
        }
        to {
            transform: translateX(0);
        }
    } 

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    animation: fade 1s ease-in, slide-left 1s ease-in;

    & img {
        width: 100%;
    }

    @media (max-width: 1024px){
        display: none;
    }
`