import  { useEffect, useState } from 'react'
import BestSale from './BestSale'
import Featured from './Featured'
import useProducts from '../../hooks/useProducts'

const Offer = () => {

  const { allProduct } = useProducts()

  // best , featured
  const [selectTab, setSelectTab] = useState('best')


   //

   const [isLoading, setIsLoading] = useState(true);
   const [data, setData] = useState(null);
 
   
 
   useEffect(() => {
     const fetchProductInSubCat = async () => {
       console.log("going to fetch product data");
       try {
         const ProdData = await allProduct();
         console.log(ProdData);
         setData(ProdData);
       } catch (error) {
         console.error("Error fetching subCatData data:", error);
       } finally {
         setIsLoading(false);
       }
     };
 
     if (true) { // Only fetch data if `type` is defined
       setIsLoading(true); // Reset loading state before fetching new data
       fetchProductInSubCat();
     }
   }, []); // Run the effect when `type` or `categoryProduct` changes
 
   if (isLoading) {
     return (
       <div>
         <p>Loading....</p>
       </div>
     );
   }
 
   //

   const isTop = data?.filter((item) => item.is_top === true)



   const isBestSeller = data?.filter((item) => item.is_bestseller === true)

   console.log("top data", isTop)

   console.log("is best seller", isBestSeller)


  const handleBest = () => {
    setSelectTab('best')
  }

  const handleFeatured = () => {
    setSelectTab('featured')
  }

  return (
    <div className=' mt-5 font-poppins'>
      <div className=' flex justify-center items-center gap-6 mb-11'>
        <h3 className={`${selectTab === 'best' ? ' border-b-4 border-cyan-200 text-cyan-400' : ''} text-xl md:text-4xl cursor-pointer`} onClick={handleBest}>Best Sold</h3>
        <h3 className={`${selectTab === 'featured' ? 'border-b-4 border-cyan-200 text-cyan-400' : ''} text-xl md:text-4xl cursor-pointer`} onClick={handleFeatured} >Featured</h3>
      </div>
        {selectTab === 'best' ? <BestSale data={isBestSeller} /> : <Featured data={isTop} />}
        
    </div>
  )
}

export default Offer