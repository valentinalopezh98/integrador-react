import {styled} from 'styled-components'

export const TitleStyled = styled.h2`
    font-size: 40px;
    font-weight: 500;
    text-transform: uppercase;
    position: relative;

    &::after{
        content: "";
        position: absolute;
        width: 200px;
        height: 18px;
        background: var(--primary-color);
        transform: rotate(-20deg);
        top: 30%;
        left: -30%;
        z-index: -1;
    }


    @media (max-width: 375px){
        &::after{
           left: -20%;
        }
    }
`