import React from 'react'
import CategoryCard from './CategoryCard'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

import tshirt from './tshirt.jpg'
import boyst from './boyst.jpg'
import kidst from './kidst.jpg'

const fakeMenData = [
    {id: 1, imageLink: tshirt, title: 'Women Clothes', description: 'Shop The Latest Women Clothes', linkVar: 'women' },
    {id: 1, imageLink: boyst, title: 'Men Clothes', description: 'Shop The Latest men Clothes',linkVar: 'men' },
    {id: 1, imageLink: kidst, title: 'Kids Clothes', description: 'Shop The Latest Kids Clothes',linkVar: 'kids' }

]

const CategoryList = () => {
  return (
    <>
    <Navbar />
    <div className=' flex justify-center items-center mx-4'>
    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-7 mb-7'>
    {fakeMenData.map((data) => <CategoryCard data={data} />)}
    </div>
    </div>
        
    <Footer />
    </>
  )
}

export default CategoryList