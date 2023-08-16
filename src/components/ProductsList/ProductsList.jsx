import React from 'react'
import { ProductsContainerStyled, ProductsListStyled } from './ProductsListStyled'
import {productsData} from "../../data/products"
import ProductCard from '../UI/ProductCard/ProductCard'


const ProductsList = () => {
  return (
    <ProductsListStyled>
        <ProductsContainerStyled>
        {
            productsData.map((product) => {
              return <ProductCard key={product.id} {...product}/>
            })
        }
        </ProductsContainerStyled>
    </ProductsListStyled>
  )
}

export default ProductsList