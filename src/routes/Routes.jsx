import React from 'react'
import { BrowserRouter, Route, Routes as RouteContainer} from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import Layout from '../components/Layout/Layout'
import AboutUs from '../pages/AboutUs/AboutUs'
import Products from '../pages/Products/Products'
import Contact from '../pages/Contact/Contact'
import {NotFound} from '../pages/NotFound/NotFound'

const Routes = () => {
  return (
    <BrowserRouter>
        <Layout>
            <RouteContainer>
                <Route path='/' element={<Home/>}/>
                <Route path='nosotros' element={<AboutUs/>}/>
                <Route path='productos' element={<Products/>}/>
                <Route path='contacto' element={<Contact/>}/>
                <Route path='*' element={<NotFound/>} />
            </RouteContainer>
        </Layout>
    </BrowserRouter>
  )
}

export default Routes