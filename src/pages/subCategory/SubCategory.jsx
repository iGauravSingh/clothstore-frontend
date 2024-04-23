import React from "react";

import mentshirt from "./men/mantshirt.jpg";
import mentpants from "./men/manpants.jpg";
import mentformal from "./men/menformal.jpg";
import lower from "./men/mantshirt.jpg";

import womantshirt from "./woman/tshirt.jpg";
import saree from "./woman/saree.jpg";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const fakeDataMan = [
  { id: 1, subCatName: "Tshirts", imageLink: mentshirt, link: "tshirt" },
  { id: 2, subCatName: "Pants", imageLink: mentpants, link: "pant" },
  { id: 1, subCatName: "Formal Shirts", imageLink: mentformal, link: "formal" },
  { id: 1, subCatName: "Lowers", imageLink: lower, link: "lower" },
  { id: 1, subCatName: "Tshirts", imageLink: mentshirt, link: "tshirt" },
  { id: 2, subCatName: "Pants", imageLink: mentpants, link: "pant" },
  { id: 1, subCatName: "Formal Shirts", imageLink: mentformal, link: "formal" },
  { id: 1, subCatName: "Lowers", imageLink: lower, link: "lower" },
];

const fakeDataWomen = [
  { id: 1, subCatName: "Tshirts", imageLink: womantshirt, link: "tshirt" },
  { id: 2, subCatName: "Jeans", imageLink: womantshirt, link: "pant" },
  { id: 1, subCatName: "Saree", imageLink: saree, link: "saree" },
  { id: 1, subCatName: "Suits", imageLink: saree, link: "suit" },
  { id: 1, subCatName: "Tshirts", imageLink: womantshirt, link: "tshirt" },
  { id: 2, subCatName: "Jeans", imageLink: womantshirt, link: "pant" },
  { id: 1, subCatName: "Saree", imageLink: saree, link: "saree" },
  { id: 1, subCatName: "Suits", imageLink: saree, link: "suit" },
];

const fakeDataKids = [
  { id: 1, subCatName: "Tshirts", imageLink: mentshirt, link: "tshirt" },
  { id: 2, subCatName: "Pants", imageLink: mentpants, link: "pant" },
  { id: 1, subCatName: "Lower", imageLink: lower, link: "lower" },
  { id: 1, subCatName: "Shirt", imageLink: mentformal, link: "formal" },
];

const SubCategory = () => {
  const { type } = useParams();

  return (
    <>
    <Navbar />
    <div className=" min-h-screen">
      <div className=" my-8 mx-4">
        {/* for men  */}
        {type === "men" && (
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
          >
            {fakeDataMan.map((file) => (
              <li key={file.id} className="relative">
                <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <img
                    src={file.imageLink}
                    alt=""
                    className="pointer-events-none object-cover group-hover:opacity-75"
                  />
                  <Link
                    to={`/category/${type}/${file.link}`}
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">
                      View details for {file.subCatName}
                    </span>
                  </Link>
                </div>
                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                  {file.subCatName}
                </p>
                {/* <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.size}</p> */}
              </li>
            ))}
          </ul>
        )}
         {/* for woman  */}
        {type === "woman" &&
          (
            <ul
              role="list"
              className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
            >
              {fakeDataWomen.map((file) => (
                <li key={file.id} className="relative">
                  <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                    <img
                      src={file.imageLink}
                      alt=""
                      className="pointer-events-none object-cover group-hover:opacity-75"
                    />
                    <Link
                      to={`/category/${type}/${file.link}`}
                      className="absolute inset-0 focus:outline-none"
                    >
                      <span className="sr-only">
                        View details for {file.subCatName}
                      </span>
                    </Link>
                  </div>
                  <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                    {file.subCatName}
                  </p>
                  {/* <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.size}</p> */}
                </li>
              ))}
            </ul>
          )}
        {type === "kids" && (
            (
                <ul
                  role="list"
                  className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
                >
                  {fakeDataKids.map((file) => (
                    <li key={file.id} className="relative">
                      <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                        <img
                          src={file.imageLink}
                          alt=""
                          className="pointer-events-none object-cover group-hover:opacity-75"
                        />
                        <Link
                          to={`/category/${type}/${file.link}`}
                          className="absolute inset-0 focus:outline-none"
                        >
                          <span className="sr-only">
                            View details for {file.subCatName}
                          </span>
                        </Link>
                      </div>
                      <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                        {file.subCatName}
                      </p>
                      {/* <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.size}</p> */}
                    </li>
                  ))}
                </ul>
              )
        )}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default SubCategory;
