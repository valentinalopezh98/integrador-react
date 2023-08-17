import styled from "styled-components"

export const NavbarLinksStyled = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 3rem;

    & ul{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2.5rem;
    }

    & ul li a:hover{
        transform: scale(0.98);
        transition: all 0.3s ease-in;
        color: var(--primary-color);
    }

    & ul li a.active{
        color: var(--primary-color);
    }

    @media (max-width: 1024px){
        display: none;
    }
`