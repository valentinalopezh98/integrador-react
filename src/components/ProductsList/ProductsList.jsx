import React from 'react'
import { ProductsContainerStyled, ProductsListStyled } from './ProductsListStyled'
import Button from "../UI/Button/Button"
import ProductCard from '../UI/ProductCard/ProductCard'
import { useSelector } from 'react-redux'
import { INITIAL_LIMIT } from '../../utils/constants'
import { useState } from 'react'


const ProductsList = () => {

  let products = useSelector((state) => state.products.products);

  const { selectedCategory } = useSelector((state) => state.categories);

  const [limit, setLimit] = useState(INITIAL_LIMIT)

  const totalProducts = useSelector((state) => state.products.totalProducts)


  if(selectedCategory){
    products = products.filter((product) => product.category == selectedCategory)
  }

  return (
    <>
       <ProductsListStyled>
        <ProductsContainerStyled>
        {
            products.map((product) => {
              if(limit >= product.id || selectedCategory){
                 return <ProductCard key={product.id} {...product}/>
              }
              return null
            })
        }
        </ProductsContainerStyled>
        {
          !selectedCategory && (
            <Button
              onClick={() => setLimit((prevLimit) => prevLimit + INITIAL_LIMIT)}
              disabled={totalProducts <= limit}
            >
              Ver más
            </Button>
          )
        }
    </ProductsListStyled>
  
    </>
 
  )
}

export default ProductsList