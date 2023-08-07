import React from 'react'
import { ProductCardStyled, RateContainerStyled, DataContainerStyled, PurchaseContainerStyled, AddToCartBtnStyled, BtnContainerStyled } from './ProductCardStyles'
import {BsCart2} from "react-icons/bs"

const ProductCard = ({name, artist, genre, year, rating, price, img}) => {
  return (
    <ProductCardStyled>
        <RateContainerStyled>{rating}</RateContainerStyled>
        <img src={img} alt={name} />

        <DataContainerStyled>
            <p>{genre.join(", ")} / {year}</p>
            <p>{name} / <span>{artist}</span></p>
        </DataContainerStyled>

        <PurchaseContainerStyled>
            <p>${price}</p>

            <BtnContainerStyled>
                <AddToCartBtnStyled>
                    Agregar
                    <BsCart2 size={12}/>
                </AddToCartBtnStyled>
            </BtnContainerStyled>
         
        </PurchaseContainerStyled>
    </ProductCardStyled>
  )
}

export default ProductCard