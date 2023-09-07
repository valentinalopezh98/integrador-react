import React from 'react'
import { CartProductStyled, ProductArtistStyled, ProductHandlerStyled, ProductImgContainerStyled, ProductInfoStyled, ProductNameStyled, ProductPriceStyled, ProductStyled, QuantityHandlerStyled } from './CartItemStyles'
import { useDispatch } from 'react-redux'
import {BsTrash} from 'react-icons/bs'
import { removeFromCart, addToCart } from '../../redux/cart/cartSlice'

export const CartItem = ({name, artist, genre, year, rating, price, img, id, quantity}) => {

    const dispatch = useDispatch()

    return (
    <CartProductStyled>
        <ProductStyled>
            <ProductImgContainerStyled>
                <img src={img} alt={name} />
            </ProductImgContainerStyled>

            <ProductInfoStyled>
                <ProductNameStyled>{name}</ProductNameStyled>
                <ProductArtistStyled>{artist}</ProductArtistStyled>
                <ProductPriceStyled>${price}</ProductPriceStyled>
            </ProductInfoStyled>
        </ProductStyled>

        <ProductHandlerStyled>
            <QuantityHandlerStyled
               onClick={() => dispatch(removeFromCart(id))}
            >
                {
                    quantity === 1 ? <BsTrash/> : "-"
                }
            </QuantityHandlerStyled>
            <span>{quantity}</span>
            <QuantityHandlerStyled
               onClick={() => dispatch(addToCart({name, artist, genre, year, rating, price, img, id, quantity}))}
            >+</QuantityHandlerStyled>
        </ProductHandlerStyled>
    </CartProductStyled>
  )
}

