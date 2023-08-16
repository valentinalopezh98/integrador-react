import styled from 'styled-components'

export const MenuWrapperStyled = styled.div`

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
    width: 70%;
    z-index: 2;
    background-color: var(--bg-color);
    display: ${props => props.showmenu ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
    animation: fade 0.5s ease-in, ${props => props.showmenu ? "slide-left 0.7s ease-in" : "slide-right 0.7s ease-out"} ;
`

export const LinksContainerStyled = styled.div`

    & ul{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
    }

    & ul li a:hover{
        transform: scale(0.98);
        transition: all 0.3s ease-in;
        color: var(--primary-color);
    }
    
`
