import React from 'react'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import Recommendations from '../Components/Recommendations'
import Offers from '../Components/Offers'
import Products from '../Components/Products'
import BestSellings from '../Components/BestSellings'
import Seasonals from '../Components/Seasonals'
import Categoriesmore from '../Components/Categoriesmore'
import Aquaculture from '../Components/Aquacultures'
import Brands from '../Components/Brands'
import Footer from '../Components/Footer'
const Home = () => {
    return (
        <div>
          <Navbar/>
          <Slider/>
          <Categories/>
          <Recommendations/>
          <Offers/>
          <Products/>
          <BestSellings/>
          <Seasonals/>
          <Aquaculture/>
          <Categoriesmore/>
          <Brands/>
          <Footer/>
        </div>
    )
}

export default Home
