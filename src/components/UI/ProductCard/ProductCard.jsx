import React from 'react'
import { ProductCardStyled, RateContainerStyled, DataContainerStyled, PurchaseContainerStyled, AddToCartBtnStyled, BtnContainerStyled } from './ProductCardStyles'
import {BsCart2} from "react-icons/bs"
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/cart/cartSlice'

const ProductCard = ({name, artist, genre, year, rating, price, img, id}) => {

    const dispatch = useDispatch();

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
                <AddToCartBtnStyled onClick={() => dispatch(addToCart({name, artist, genre, year, rating, price, img, id}))}>
                    Agregar
                    <BsCart2 size={12}/>
                </AddToCartBtnStyled>
            </BtnContainerStyled>
         
        </PurchaseContainerStyled>
    </ProductCardStyled>
  )
}

export default ProductCard