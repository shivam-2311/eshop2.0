import React from 'react'
import Advertisment from '../components/Advertisment'
import Banner from '../components/Banner'
import Category from '../components/Category'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

function Home() {
    return (
        <div className="relative h-screen w-screen overflow-y-scroll">
            <Navbar />
            <Banner />
            <Category />
            <Products />
            <Advertisment />
            <Footer />
        </div>
    )
}

export default Home
