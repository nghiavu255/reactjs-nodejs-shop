import React from 'react'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Products from './layout/Products'
import Slide from './layout/Slide'
import Title from './layout/Title'

import './view.scss'
const View = () => {
    return (
        <div>
            <Header />
            <Slide/>
            <Title title="Sản Phẩm"/>
            <Products/>
            <Footer/>
            
        </div>
    )
}

export default View
