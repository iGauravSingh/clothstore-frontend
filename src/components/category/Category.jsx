import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import menCat from './menCat.jpg'
import kidsCat from './kidsCat.jpg'
import womanCat from './womanCat.jpg'

const categoryToShow = [
  { id:1 , name: 'MEN', image: menCat, categoryIdentity: 'men'},
  { id:1 , name: 'WOMAN', image: womanCat, categoryIdentity: 'woman'},
  { id:1 , name: 'KIDS', image: kidsCat, categoryIdentity: 'kids'},
]


const Category = ({catData}) => {

  const [categoryData, setCategoryData] = useState(categoryToShow)

  if(catData){
    setCategoryData([...categoryData, ...catData])
  }
 
 

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const ref = useRef(null);

  const onMouseDown = (e) => {
    if (!ref.current) return;
    setIsDragging(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e) => {
    if (!isDragging || !ref.current) return;
    e.preventDefault(); // Prevent text selection
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    ref.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener("mousemove", onMouseMove);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("mousemove", onMouseMove);
      }
    };
  }, [onMouseMove]);

  return (
    <div className=" w-screen flex justify-center items-center mt-16 mb-16 font-poppins">
      <div className=" w-[85%] flex justify-center items-center">
        <div
          ref={ref}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          className="flex overflow-auto cursor-grab select-none no-scrollbar"
          style={{ userSelect: "none" }}
        >
          {/* Add your content here */}
            <div className=" flex flex-nowrap gap-6 ">
            
          {categoryData?.map((category) => (
            <div
              key={category.id}
              className=" flex-none snap-center touch-pan-x cursor-pointer  "
            >
              <Link to={`/category/${category.categoryIdentity}`} >
              <div className=" flex flex-col  justify-center items-center gap-4  ">
                <img
                  className=" h-[5rem] md:h-[12rem] w-[5rem] md:w-[12rem] rounded-full hover:outline-4 hover:outline-blue-300 transition duration-150 ease-in-out"
                  src={category.image}
                  alt=""
                />
                <p>{category.name}</p>
              </div>
              </Link>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
          }
export default Category
  