import React from 'react'
import Categories from '../../components/Categories/Categories'
import ProductsList from '../../components/ProductsList/ProductsList'
import Button from '../../components/UI/Button/Button'

const Products = () => {
  return (
    <>
        <Categories/>
        <ProductsList/>
        <Button>Ver más</Button>
    </>
  )
}

export default Products