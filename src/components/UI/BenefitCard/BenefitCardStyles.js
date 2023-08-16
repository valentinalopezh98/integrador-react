import styled from 'styled-components'

export const BenefitCardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    background-color: var(--bg-secondary);
    border-radius: 10px;
    padding: 40px;
    width: 300px;
    height: 200px;
    
    &:hover{
        background-color: var(--bg-hover);
        transform: scale(0.99);
        transition: all 0.1s ease-in;
    }

    & p{
        text-align: center;
        font-size: 18px;
        font-weight: 500;
    }

    @media (max-width: 375px){
        width: 250px;
    }
`