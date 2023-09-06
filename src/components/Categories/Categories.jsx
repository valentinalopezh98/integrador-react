import React from 'react'
import { CategoriesContainerStyled, CategoriesStyled } from './CategoriesStyles'
import Title from '../UI/Title/Title'
import CategorieCard from "../UI/CategorieCard/CategorieCard"
import { useSelector } from 'react-redux'


const Categories = () => {

  const {categories} = useSelector((state) => state.categories)

  return (
    <CategoriesStyled>
        <Title>Categorías</Title>
        <CategoriesContainerStyled>
          {
            categories.map((category) => {
              return <CategorieCard {...category} key={category.id} />
            })
          }
        </CategoriesContainerStyled>
    </CategoriesStyled>
  )
}

export default Categories