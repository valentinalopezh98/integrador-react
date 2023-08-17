import React from 'react'
import { FeaturedContainerStyled, FeaturedStyled } from './FeaturedStyles'
import Title from '../UI/Title/Title'
import {featuredProductsData} from "../../data/featured"
import ProductCard from '../UI/ProductCard/ProductCard'
import Button from "../UI/Button/Button"
import { Link } from 'react-router-dom'

const Featured = () => {
  return (
    <FeaturedStyled>
        <Title>Destacados</Title>
        <FeaturedContainerStyled>
          {
            featuredProductsData.map((product) => {
              return <ProductCard key={product.id} {...product}/>
            })
          }
        </FeaturedContainerStyled>
        <Link to='productos'>
          <Button>Ver más</Button>
        </Link>
    </FeaturedStyled>
  )
}

export default Featured