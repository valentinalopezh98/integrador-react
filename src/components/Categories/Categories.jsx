import React from 'react'
import { CategoriesContainerStyled, CategoriesStyled } from './CategoriesStyles'
import Title from '../UI/Title/Title'
import CategorieCard from "../UI/CategorieCard/CategorieCard"
import { categoriesData } from '../../data/categories'

const Categories = () => {
  return (
    <CategoriesStyled>
        <Title>Categorías</Title>
        <CategoriesContainerStyled>
          {
            categoriesData.map((cat) => {
              return <CategorieCard key={cat.id} {...cat}/>
            })
          }
        </CategoriesContainerStyled>
    </CategoriesStyled>
  )
}

export default Categories