import styled from 'styled-components'

export const ContactSectionStyled = styled.section`
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 80px;
    padding: 80px 40px;
    gap: 50px;
    

    
    @media (max-width: 768px){
        padding: 80px 20px;
    }
`

export const ContactContainerStyled = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 50px;
        max-width: 350px;
    }

    @media (max-width: 475px){
        max-width: 280px;
    }
`

export const ContactLeftStyled = styled.section`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 30px;

    & p{
        text-align: center;
    }

    @media (max-width: 768px){
        width: 100%;
        padding: 0px;
    }
`