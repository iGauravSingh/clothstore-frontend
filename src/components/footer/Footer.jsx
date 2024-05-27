import { IoHomeOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" w-screen md:h-[400px]  bg-pink-300 flex justify-center font-poppins">

      <div className=" w-[85%] flex mt-2 mb-10">
        {/* About us  */}
        <div className=" w-[50%] flex flex-col items-center mt-6 border-t-2 border-r-2 pr-2 ">
          <h3 className=" mt-16 text-xl mb-4">About Us</h3>
          <p className=" text-justify">
            adipisicing elit. Nam fugiat facilis officia et ipsum saepe
            cupiditate, illo debitis quisquam incidunt? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ut, voluptas?
          </p>
        </div>

        <div className=" w-[50%] flex flex-col   justify-between mt-6 border-t-2">
          {/* constact us  and follow us */}
          <div className=" ml-12">
            {/* Contact us  */}
            <h3 className=" mt-16 text-xl mb-4">Contact us</h3>
            <div className=" flex gap-4 items-center">
            <IoHomeOutline size={25} color="" />
            <p>Address....</p>
            </div>
            <div className=" flex gap-4 items-center">
            <IoIosMail size={25} color=""  />
            <p>Email.....</p>
            </div>
            <div className=" flex gap-4 items-center">
            <IoCallSharp size={25} color=""  />
            <p>Phone .....</p>
            </div>
          </div>
          {/* follow us ? */}
          <div className=" ml-12">
            <h4 className=" mt-8 text-xl mb-4">Follow Us</h4>
            <div className=" flex gap-5 ml-4">
              <FaFacebook size={25} color=""  />
              <FaInstagramSquare size={25} color=""  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
