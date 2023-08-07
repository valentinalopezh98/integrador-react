import {styled} from 'styled-components'

export const FeaturedStyled = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 80px;
    padding: 100px 40px;
    width: 100%;
    max-width: 1200px;

    @media(max-width: 375px){
        padding: 100px 20px;
    }
`

export const FeaturedContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 35px;
`