import {styled} from "styled-components";

export const SocialStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    & a:hover{
        cursor: pointer;
        color: var(--primary-color);
        transform: scale(0.98);
        transition: all 0.3s ease-in;
    }
`