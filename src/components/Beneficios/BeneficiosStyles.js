import styled from 'styled-components'

export const BeneficiosContainerStyled = styled.section`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding: 80px 40px;

    @media (max-width: 480px) {
        padding: 80px 20px;
    }
`

export const BeneficiosCardContainerStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;
`