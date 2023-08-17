import styled from 'styled-components'

export const NotFoundContainerStyled = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 85px;
    height: calc(100vh - 5rem);
    position: relative;

    & img{
        height: 100vh;
        object-fit: cover;
    }

    & .centered {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    & h2{
        text-align: center;
        text-transform: uppercase;
        width: 31.25rem;
        font-size: 2.5rem;
        font-weight: 500;
    }

    & h2 span{
        padding: 0 0.3125rem;
        font-size: 2.5rem;
        background: linear-gradient(to bottom, transparent 50%, var(--primary-color) 50% );
    }

    & p{
        text-align: center;
    }

    @media (max-width: 768px){
        & img{
            width: 500px;
            height: auto;
            object-fit: cover;
        }

        & h2{
            font-size: 1.875rem;
        }

        & h2 span{
            font-size: 1.875rem;
        }
    }  

    @media (max-width: 480px){
        & img{
            width: 100%;
        }

        & h2{
            width: auto
        }
    }  
`
