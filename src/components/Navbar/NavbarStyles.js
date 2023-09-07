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

export const CartIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 25px;
    position: relative;
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

export const OverlayStyled = styled.div`  
    position: absolute;
    top: 5rem;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 1; 
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0.5rem 2rem 0 rgba(1, 2, 5, 0.37);
    backdrop-filter: blur(0.3125rem);
    -webkit-backdrop-filter: blur(0.3125rem);
    display:  ${props => (props.showmenu || props.showcart) ? "flex" : "none"};
`

export const CartBubble = styled.div`
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    text-align: center;
    background: var(--secondary-color);
    color: var(--font-color);
    font-size: 0.625rem;
    font-weight: 600;
    height: 1.125rem;
    width: 1.125rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`