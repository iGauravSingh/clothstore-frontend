import React, {  useRef, useState } from "react";

// import { bestSaleData } from "../../utils/data/data";
import Card from "./Card";
// import useProduct from "../../hooks/useProduct";
// const temData = bestSaleData[0]
// console.log(temData)

const BestSale = ({data}) => {

//   const {data, loading, error} = useProduct()

const bestSaleData = [
    {id: 1, productName: 'dino', productImage: "/img/2.jpg", price: 12 , discount: 6, stars: 4, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 6, productName: 'dino', productImage: "/img/3.jpg", price: 22 , discount: 17, stars: 4, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 7, productName: 'dino', productImage: "/img/4.jpg", price: 82 , discount: 0, stars: 4, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
]

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

  React.useEffect(() => {
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
    <div className=" w-screen flex justify-center items-center">
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
            {data?.map((bestSale) => (
              <div className=" flex-none snap-center touch-pan-x">
                <Card
                id={bestSale.id}
                  productName={bestSale.name}
                  productImage={`https://ajayvastraliyamart.online/${bestSale.image}`}
                  price={bestSale.price}
                  
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BestSale;

{
  /* <div className=' w-[85%] flex justify-center items-center'>
        <div className=' flex' >
        {bestSaleData.map((bestSale) => (
            <div className=''>
            <Card productName={bestSale.productName} productImage={bestSale.productImage} price={bestSale.price} discount={bestSale.discount}  />
        </div>
        ))}
    </div>
    </div> */
}
