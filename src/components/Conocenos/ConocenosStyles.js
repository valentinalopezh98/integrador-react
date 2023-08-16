import styled from 'styled-components'

export const AboutUsBackgroundContainerStyled = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    gap: 30px;
    height: auto;
    margin-top: 80px;
    padding: 100px 40px;

    &::before{
        content: "";
        position: absolute;
        top: 0; 
        left: 0;
        width: 100%; height: 100%;
        background: var(--bg-color) url(https://cdn.thespaces.com/wp-content/uploads/2019/10/Supervinyl74.jpg) no-repeat fixed center;
        filter: opacity(20%);
    }

    @media(max-width: 375px){
        padding: 100px 15px;
    }
`

export const AboutUsTextContainerStyled = styled.div`
        margin-top: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;

        &div{
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        & div p{
            padding: 40px 40px;
            text-align: center;
            font-size: 18px;
            text-align: justify;
        }

        @media (max-width: 1024px){
            flex-direction: column;
            gap: 5px;
        }

        @media (max-width: 768px){

            & div p{
                padding: 20px 0px;
                text-align: center;
                font-size: 16px;
            }
        }
`