import styled from "styled-components"

export const CategorieCardStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-width: 85px;
    gap: 10px;
    background-color: var(--bg-secondary);
    padding: 20px;
    border-radius: 12px;

    &:hover{
        background-color: var(--bg-hover);
        transform: scale(0.99);
        transition: all 0.1s ease-in;
        cursor: pointer;
    }

    & h3{
        font-weight: 600;
        font-size: 25px;
    }

    & div {
        width: 100%;
        height: 4px;
        background: hsla(71, 80%, 72%, 1);
        background: linear-gradient(90deg, hsla(71, 80%, 72%, 1) 0%, hsla(185, 100%, 41%, 1) 0%, hsla(220, 45%, 37%, 1) 100%, hsla(51, 66%, 73%, 1) 100%);
        background: -moz-linear-gradient(90deg, hsla(71, 80%, 72%, 1) 0%, hsla(185, 100%, 41%, 1) 0%, hsla(220, 45%, 37%, 1) 100%, hsla(51, 66%, 73%, 1) 100%);
        background: -webkit-linear-gradient(90deg, hsla(71, 80%, 72%, 1) 0%, hsla(185, 100%, 41%, 1) 0%, hsla(220, 45%, 37%, 1) 100%, hsla(51, 66%, 73%, 1) 100%);
        filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#DCF180", endColorstr="#00C1D1", GradientType=1 );
        border-radius: 10px;
    }
`