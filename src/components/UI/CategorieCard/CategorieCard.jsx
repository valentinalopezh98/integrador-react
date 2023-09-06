import React from 'react'
import { CategorieCardStyled } from './CategorieCardStyles'
import { useDispatch, useSelector } from 'react-redux'
import {selectCategory} from "../../../redux/categories/categoriesSlice"

export const CategorieCard = ({name,category}) => {

  const { selectedCategory } = useSelector((state) => state.categories)

  const dispatch = useDispatch();

  return (
    <CategorieCardStyled
      selected={category === selectedCategory}
      onClick={() => dispatch(selectCategory(category))}
    >
        <h3>{name}</h3>
        <div></div>
    </CategorieCardStyled>
  )
}

export default CategorieCard