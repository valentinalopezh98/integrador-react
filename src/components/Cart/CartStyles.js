import styled from 'styled-components'

export const CartWrapperStyled = styled.div`

    @keyframes slide-left {
        from  {
            transform: translateX(6.25rem);
        }
        to {
            transform: translateX(0);
        }
    } 

    @keyframes slide-right {
        from  {
            transform: translateX(0);
        }
        to {
            transform: translateX(6.25rem);
        }
    } 

    position: absolute;
    height: calc(100vh - 5rem);
    top: 5rem;
    right: 0;
    width: 500px;
    z-index: 2;
    padding: 50px 30px;
    background-color: var(--bg-color);
    color: var(--font-color);
    display: ${props => props.showCart ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    gap: 30px;
    overflow-y: scroll;
    animation: fade 0.5s ease-in, ${props => props.showCart ? "slide-left 0.7s ease-in" : "slide-right 0.7s ease-out"} ;

    &::-webkit-scrollbar {
    width: 0px;
    background: transparent; 
    }

    @media (max-width: 768px){
        width: 70%;
    }
`

export const DividerStyled = styled.span`
    margin-top: 1.25rem;
    border: 0.0625rem solid var(--font-color);
    width: 100%;
`

export const CartTotal = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ButtonDeleteStyled = styled.button`
    margin-top: 0.625rem;
    border: none;
    background-color: var(--bg-color);
    color: white;
    text-transform: uppercase;
    cursor: pointer;
`

    
