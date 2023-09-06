import React from 'react'
import { CartProductStyled, ProductArtistStyled, ProductHandlerStyled, ProductImgContainerStyled, ProductInfoStyled, ProductNameStyled, ProductPriceStyled, ProductStyled, QuantityHandlerStyled } from './CartItemStyles'

export const CartItem = () => {
  return (
    <CartProductStyled>
        <ProductStyled>
            <ProductImgContainerStyled>
                <img src="https://upload.wikimedia.org/wikipedia/en/b/b2/Lorde_-_Melodrama.png" alt="" />
            </ProductImgContainerStyled>

            <ProductInfoStyled>
                <ProductNameStyled>Melodrama</ProductNameStyled>
                <ProductArtistStyled>Lorde</ProductArtistStyled>
                <ProductPriceStyled>$23455</ProductPriceStyled>
            </ProductInfoStyled>
        </ProductStyled>

        <ProductHandlerStyled>
            <QuantityHandlerStyled>-</QuantityHandlerStyled>
            <span>5</span>
            <QuantityHandlerStyled>+</QuantityHandlerStyled>
        </ProductHandlerStyled>
    </CartProductStyled>
  )
}

