import React from 'react'
import { FeaturedContainerStyled, FeaturedStyled } from './FeaturedStyles'
import Title from '../UI/Title/Title'
import ProductCard from '../UI/ProductCard/ProductCard'
import Button from "../UI/Button/Button"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Featured = () => {

  let featured = useSelector((state) => state.featured.featuredProducts);

  return (
    <FeaturedStyled>
        <Title>Destacados</Title>
        <FeaturedContainerStyled>
          {
            featured.map((product) => {
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