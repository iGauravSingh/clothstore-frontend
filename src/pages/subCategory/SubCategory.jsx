import React, { useEffect, useState } from "react";

import mentshirt from "./men/mantshirt.jpg";
import mentpants from "./men/manpants.jpg";
import mentformal from "./men/menformal.jpg";
import lower from "./men/mantshirt.jpg";

import womantshirt from "./woman/tshirt.jpg";
import saree from "./woman/saree.jpg";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useProducts from "../../hooks/useProducts";
import useSubCategory from "../../hooks/useSubCategory";

// {
//   "id": 3,
//   "category": "men",
//   "name": "Men Jeans",
//   "slug": "men-jeans",
//   "is_top": true,
//   "image": "/media/subcategory_images/1000060362.jpg",
//   "created_at": "2024-05-20T19:25:31.220066Z",
//   "updated_at": "2024-05-20T19:25:31.220066Z"
// }

const fakeDataMan = [
  { id: 1, name: "Tshirts", image: mentshirt, slug: "tshirt" },
  { id: 2, name: "Pants", image: mentpants, slug: "pant" },
  { id: 1, name: "Formal Shirts", image: mentformal, slug: "formal" },
  { id: 1, name: "Lowers", image: lower, slug: "lower" },
  { id: 1, name: "Tshirts", image: mentshirt, slug: "tshirt" },
  { id: 2, name: "Pants", image: mentpants, slug: "pant" },
  { id: 1, name: "Formal Shirts", image: mentformal, slug: "formal" },
  { id: 1, name: "Lowers", image: lower, slug: "lower" },
];

const fakeDataWomen = [
  { id: 1, name: "Tshirts", image: womantshirt, slug: "tshirt" },
  { id: 2, name: "Jeans", image: womantshirt, slug: "pant" },
  { id: 1, name: "Saree", image: saree, slug: "saree" },
  { id: 1, name: "Suits", image: saree, slug: "suit" },
  { id: 1, name: "Tshirts", image: womantshirt, slug: "tshirt" },
  { id: 2, name: "Jeans", image: womantshirt, slug: "pant" },
  { id: 1, name: "Saree", image: saree, slug: "saree" },
  { id: 1, name: "Suits", image: saree, slug: "suit" },
];

const fakeDataKids = [
  { id: 1, name: "Tshirts", image: mentshirt, slug: "tshirt" },
  { id: 2, name: "Pants", image: mentpants, slug: "pant" },
  { id: 1, name: "Lower", image: lower, slug: "lower" },
  { id: 1, name: "Shirt", image: mentformal, slug: "formal" },
];

const SubCategory = () => {
  const { type } = useParams(); // Get the type from the URL parameters
  const { categoryProduct } = useProducts();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  console.log("in sub category");

  useEffect(() => {
    const fetchCategoryProduct = async () => {
      console.log("going to fetch category data");
      try {
        const categoryData = await categoryProduct(type);
        console.log(categoryData);
        setData(categoryData);
      } catch (error) {
        console.error("Error fetching category data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (type) { // Only fetch data if `type` is defined
      setIsLoading(true); // Reset loading state before fetching new data
      fetchCategoryProduct();
    }
  }, []); // Run the effect when `type` or `categoryProduct` changes

  if (isLoading) {
    return (
      <div>
        <p>Loading....</p>
      </div>
    );
  }


 

  return (
    <>
    <Navbar />
    <div className=" min-h-screen">
      <div className=" my-8 mx-4">
        
        {1 && (
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
          >
            {data.map((file) => (
              <li key={file.id} className="relative">
                <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <img
                    src={`https://ajayvastraliyamart.online/${data?.image}`}
                    alt=""
                    className="pointer-events-none object-cover group-hover:opacity-75"
                  />
                  <Link
                    to={`/category/${type}/${file.slug}`}
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">
                      View details for {file.name}
                    </span>
                  </Link>
                </div>
                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                  {file.name}
                </p>
                {/* <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.size}</p> */}
              </li>
            ))}
          </ul>
        )}
        
        
      </div>
    </div>
    <Footer />
    </>
  );
};

export default SubCategory;
