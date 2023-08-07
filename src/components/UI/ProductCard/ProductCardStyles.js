import {styled} from "styled-components"

export const ProductCardStyled = styled.div`
    width: 15.625rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.9375rem;
    position: relative;
    margin-bottom: 20px;
    padding-bottom: 0.625rem;

    & img{
        width: 100%;
    }

    &:hover{
    border-bottom: 0.0625rem solid var(--secondary-color);
    transform: scale(1.02);
    transition: all 0.1s ease-in;
    }
`

export const RateContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 1.875rem;
    height: 1.875rem;
    top: -0.9375rem;
    right: -0.9375rem;
    border-radius: 50%;
    background-color: var(--secondary-color);
    padding: 0.3125rem;
`

export const DataContainerStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    & :nth-child(1){
        text-align: center;
        width: 15.625rem;
        font-size: 0.625rem;
        color: var(--font-grey);
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    & :nth-child(2){
        text-align: center;
        width: 15.625rem;
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 400;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    & :nth-child(2) span{
        font-size: 1rem;
        font-weight: 100;   
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`

export const PurchaseContainerStyled = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;

    & p {
        font-size: 1.25rem;
        font-weight: 700;
    }
`

export const BtnContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3125rem;
`

export const AddToCartBtnStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3125rem;
    border: none;
    background-color: var(--bg-color);
    color: var(--font-color);
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 500;
    cursor: pointer;

    
    &:hover{
    color: var(--secondary-color);
    transform: scale(1.02);
    transition: all 0.1s ease-in;
    }
`