import styled from 'styled-components'

export const LocalContainerStyled = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    padding: 50px 40px;

    @media(max-width:480px){
        padding: 50px 20px;
    }
`

export const BackgroundStyled = styled.span`
    background-color: var(--bg-color);
    display: grid;
    place-items: center;
    height: 100vh;

    @media (max-width: 750px){
        display: none;
    }
`

export const GalleryContainerStyled = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    max-width: 1200px;

    @media (max-width: 750px){
        flex-direction: column;
    }
`

export const CardImageContainerStyled = styled.article`
    position: relative;
    left: 0;
    width: 200px;
    border-radius: 16px;
    height: 500px;
    overflow: hidden;
    background-color: var(--bg-color);
    transition: 0.4s ease-in-out;
    box-shadow: 0px 5px 12px rgba(0,0,0,0.5);
    flex: 0.25;

    & img{
        height: 500px;
    }

    &:hover{
        flex: 2;
        font-weight: bold;
        cursor: pointer;
        border-radius: 8px;
    }
`

export const MobileImagesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    flex-direction: column;
    padding: 50px 20px;

    @media (min-width: 749px){
        display: none;
    }

    @media(max-width:480px){
        padding: 50px 0px;
    }
`

export const ImgContainer = styled.div`
    width: 100%;
    border-radius: 8px 8px 8px 8px;
    overflow: hidden;

    & img{
        width: 100%;
    }
`