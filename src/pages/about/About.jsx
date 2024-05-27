import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className=" min-h-screen mt-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
            mauris leo. Nullam consectetur tortor vel metus congue, sed commodo
            leo cursus. Nulla facilisi. Duis tincidunt leo a risus tristique,
            vel tempor urna aliquam.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Aliquam erat volutpat. Sed id lacus vel velit lacinia tempus.
            Maecenas nec odio sed orci porta mattis. Fusce ultrices urna et odio
            interdum dapibus.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About