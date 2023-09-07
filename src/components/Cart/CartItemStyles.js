import { sync } from 'framer-motion'
import styled from 'styled-components'

export const CartProductStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.625rem;
    padding: 0.9375rem;
    border: 0.0625rem solid var(--font-color);
    border-radius: 0.5rem;
`

export const ProductStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.9375rem;
`

export const ProductImgContainerStyled= styled.div`
    width: 5rem;
    border-radius: 0.5rem;
    overflow: hidden;

    & img{
        width: 100%;
    }

    @media (max-width: 450px){
        display: none;
    }
`

export const ProductInfoStyled = styled.div`
    height: 4.375rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    text-align: left;
`

export const ProductNameStyled = styled.p`
    max-width: 9.375rem;
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 500;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`

export const ProductArtistStyled = styled.p`
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 300;
    max-width: 9.375rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`

export const ProductPriceStyled = styled.p`
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 800;
`

export const ProductHandlerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.625rem;
`

export const QuantityHandlerStyled = styled.span`
    width: 1.875rem;
    height: 1.875rem;
    padding: 0.25rem 0.5rem;
    border: 1px solid var(--font-color);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        border: 1px solid var(--primary-color);
    }
`
