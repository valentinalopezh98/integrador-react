import styled from 'styled-components'

export const NavbarContainerStyled = styled.header`
    box-sizing: border-box;
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    background-color: var(--bg-color);
    padding: 1rem 4rem;

    & div a img{
                width: 100px;
            }

    
    @media (max-width: 768px){
        padding: 1rem 2rem;
    }
`

export const LinksContainerStyled = styled.div`
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const LoginContainerStyled = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        border-radius: 20px;
        border: 2px solid var(--font-grey);
        padding: 8px 12px;
        cursor: pointer;

        & a{
            font-size: 0.875rem;
        }
        &:hover {
            border: 2px solid var(--primary-color);
            transform: scale(0.98);
            transition: all 0.3s ease-in;
    
        }
        @media (max-width: 1024px){
            display: none;
        }
`

export const MenuContainerStyled = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    @media (max-width: 1024px){
        display: flex;
    }
`