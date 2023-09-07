import { styled } from "styled-components";

export const ModalStyled = styled.div`
    padding: 0.9375rem 0rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--font-color);
    background-color: var(--primary-color);
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    transform: ${props => props.show ? "translateY(0)" : "translateY(200%)"};
    transition: all 0.5s ease-in;
    //transform:translateY(0);
`