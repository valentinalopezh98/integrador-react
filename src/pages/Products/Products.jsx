import React, { useState } from 'react'
import Categories from '../../components/Categories/Categories'
import ProductsList from '../../components/ProductsList/ProductsList'
import { useSelector } from 'react-redux'



const Products = () => {

  return (
    <>
        <Categories/>
        <ProductsList/>
    </>
  )
}

export default Products