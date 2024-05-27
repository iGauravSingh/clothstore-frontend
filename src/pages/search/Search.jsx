import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { IoIosSearch } from "react-icons/io";

const Search = () => {

    const [text,setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <>
    <Navbar />

    <div className=' w-screen h-screen flex justify-center mt-6'>
        {/* search  */}
      <div className=" ">
      <div className=" relative border-2 border-cyan-500 flex justify-center items-center rounded-2xl px-1 py-1 gap-1">
        <IoIosSearch size={30} />
        <input value={text} onChange={handleChange} className=" border-transparent focus:border-transparent focus:ring-0" type="text" />
        {/* { text.length > 0 ? (
          <div className=" absolute top-8 w-full pl-2 pt-2 pb-1  border-2 border-cyan-500 bg-white rounded-lg z-40 flex flex-col">
            {catData?.map((cat) => (
              <Link key={cat.id} to={`/category/${cat.id}`}><p>{cat.categoryName.toLocaleLowerCase().includes(text) ? cat.categoryName : ''}</p></Link>
            ))}
          </div>
        ) : ('')} */}
      </div>
      </div>
    </div>

    <Footer />
    </>
  )
}

export default Search