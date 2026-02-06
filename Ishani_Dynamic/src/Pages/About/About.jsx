import React from "react";
import { FaLightbulb, FaBolt, FaIndustry, FaUsers, FaCheckCircle, FaUserTie } from "react-icons/fa";
import { GiFactory, GiTeamIdea } from "react-icons/gi";
import { MdOutlinePrecisionManufacturing, MdWorkspacePremium } from "react-icons/md";

function About() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="pt-8 md:pt-12 lg:pt-16">
        <h1 className="flex justify-center text-2xl md:text-3xl lg:text-4xl font-bold px-4 text-center">
          About Ishani Enterprises
        </h1>
        <br />
        
        {/* Navigation Buttons */}
        <div className="flex flex-wrap gap-3 justify-center px-4">
          <button className="bg-gray-200 p-2 md:p-3 rounded-md hover:bg-green-600 hover:text-white transition duration-300 text-sm md:text-base">
            Company Overview
          </button>
          <button className="bg-gray-200 p-2 md:p-3 rounded-md hover:bg-green-600 hover:text-white transition duration-300 text-sm md:text-base">
            Vision & Mission
          </button>
          <button className="bg-gray-200 p-2 md:p-3 rounded-md hover:bg-green-600 hover:text-white transition duration-300 text-sm md:text-base">
            Manufacturing Facility
          </button>
          <button className="bg-gray-200 p-2 md:p-3 rounded-md hover:bg-green-600 hover:text-white transition duration-300 text-sm md:text-base">
            Team / Leadership
          </button>
        </div>
      </div>
      
      <br /> <br />

      {/* Company Overview Section */}
      <div className="px-4 md:px-8 lg:px-12 py-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Company Overview</h1>
            <div className="space-y-4">
              <p className="text-gray-600 md:text-lg">
                Founded in 2011, Ishani Enterprises has grown to become a trusted
                name in premium architectural solutions. Specializing in French
                doors and windows, what began as a modest operation has blossomed
                into a thriving business with a reputation for craftsmanship and
                reliability.
              </p>
              <p className="text-gray-600 md:text-lg">
                We've served hundreds of satisfied clients including architects,
                builders, and homeowners. Our journey has been marked by steady
                growth, innovation, and an unwavering commitment to excellence.
              </p>
              <p className="text-gray-600 md:text-lg">
                Today, we stand as a leading manufacturer with 50+ employees,
                state-of-the-art manufacturing facilities, and a distribution
                network that ensures timely delivery of our premium products.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              className="rounded-xl shadow-xl w-full h-auto max-w-lg mx-auto"
              alt="Ishani Enterprises Manufacturing Facility"
              src="https://ishanib.demovoting.com/uploads/company-images/Ishani_Enterprises.jpg"
            />
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <section className="mx-4 md:mx-8 lg:mx-12 my-8 md:my-12 py-6 md:py-8 bg-gray-100 rounded-xl md:rounded-2xl">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl pt-6 md:pt-8 flex justify-center text-center px-4">
          Our Vision & Mission
        </h1>

        <div className="mt-6 md:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 md:px-8">
          {/* Vision Card */}
          <div className="bg-white shadow-lg p-6 md:p-8 lg:p-12 rounded-xl">
            <div className="text-green-500 mb-4">
              <FaLightbulb size={40} />
            </div>
            <h1 className="font-bold text-xl md:text-2xl pb-3">Our Vision</h1>
            <p className="text-gray-600">
              To be the most trusted manufacturer of premium French doors and
              windows in India, recognized for our elegant design, superior
              craftsmanship, and commitment to sustainable manufacturing practices.
            </p>
          </div>
          
          {/* Mission Card */}
          <div className="bg-white shadow-lg p-6 md:p-8 lg:p-12 rounded-xl">
            <div className="text-green-500 mb-4">
              <FaBolt size={40} />
            </div>
            <h1 className="font-bold text-xl md:text-2xl pb-3">Our Mission</h1>
            <p className="text-gray-600">
              To redefine architectural elegance through innovative French door
              and window solutions that combine timeless design with modern
              functionality. We commit to using premium materials, precision
              engineering, and sustainable practices to deliver exceptional
              value to our customers.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Facility Section */}
      <div className="px-4 md:px-8 lg:px-12 py-8">
        <h1 className="flex justify-center font-bold text-2xl md:text-3xl text-center">
          Our Manufacturing Facility
        </h1>
        
        <div className="mt-6 md:mt-8">
          <div className="flex items-center mb-4">
            <GiFactory className="text-green-500 mr-3" size={30} />
            <h2 className="font-medium text-xl md:text-2xl">
              Precision Craftsmanship
            </h2>
          </div>
          
          <div className="space-y-3 ml-2 md:ml-5">
            <p className="text-gray-600 md:text-lg">
              Spread over 15,000 square feet, our facility combines traditional
              craftsmanship with CNC precision machinery to create French doors and
              windows of exceptional quality.
            </p>
            <div className="flex items-center">
              <MdOutlinePrecisionManufacturing className="text-green-500 mr-2" />
              <p className="text-gray-600">
                5 dedicated production lines with capacity of 400+ units/month
              </p>
            </div>
            <div className="flex items-center">
              <MdWorkspacePremium className="text-green-500 mr-2" />
              <p className="text-gray-600">
                Advanced glass tempering and wood finishing stations
              </p>
            </div>
            <div className="flex items-center">
              <FaIndustry className="text-green-500 mr-2" />
              <p className="text-gray-600">
                Sustainable manufacturing with 85% material utilization efficiency
              </p>
            </div>
          </div>
        </div>

        {/* Quality Assurance Section */}
        <div className="bg-green-50 md:bg-green-100 p-4 md:p-6 rounded-xl mt-6 md:mt-8 border border-green-200">
          <div className="flex items-center mb-3">
            <FaCheckCircle className="text-green-600 mr-2" size={24} />
            <h1 className="font-bold text-green-800 md:text-green-900 text-lg md:text-xl">
              Quality Assurance
            </h1>
          </div>
          <p className="text-green-700 md:text-green-800">
            Every French door and window undergoes 27 quality checkpoints from
            raw material inspection to final packaging. Our quality assurance
            process includes stress testing, weatherproofing verification, and
            finish durability assessments to ensure products that stand the test
            of time.
          </p>
        </div>
      </div>

      {/* Leadership Team Section */}
      <div className="px-4 md:px-8 lg:px-12 py-8">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl flex justify-center text-center mb-6 md:mb-8">
          Our Leadership Team
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Founder Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 border border-gray-200">
            <div className="flex items-center mb-4">
              <FaUserTie className="text-green-500 mr-3" size={32} />
              <div>
                <h1 className="font-bold text-lg md:text-xl">Shri Pramod Ashok Murkewar</h1>
                <h3 className="font-medium text-green-500 text-sm md:text-base">Founder & Director</h3>
              </div>
            </div>
            <p className="text-gray-600">
              Visionary Entrepreneur | Builder | Industry Leader. Shri Pramod
              Ashok Murkewar is a seasoned entrepreneur and industry expert, known
              for his strategic thinking and visionary leadership. He is the
              Founder and Director of Ishani Enterprises, a pioneer in French door
              manufacturing in Maharashtra. With a deep understanding of
              engineering and design, he laid the foundation for a company that
              today stands as a symbol of quality, precision, and trust.
            </p>
          </div>
          
          {/* Team Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 border border-gray-200">
            <div className="flex items-center mb-4">
              <GiTeamIdea className="text-green-500 mr-3" size={32} />
              <div>
                <h1 className="font-bold text-lg md:text-xl">Our Expert Team</h1>
                <h3 className="font-medium text-green-500 text-sm md:text-base">50+ Professionals</h3>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Our team consists of experienced engineers, skilled craftsmen, and
              dedicated support staff who work together to deliver exceptional
              products and services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <FaUsers className="text-green-400 mr-2" />
                <span className="text-gray-600">Experienced Engineers & Designers</span>
              </div>
              <div className="flex items-center">
                <FaUsers className="text-green-400 mr-2" />
                <span className="text-gray-600">Skilled Craftsmen & Technicians</span>
              </div>
              <div className="flex items-center">
                <FaUsers className="text-green-400 mr-2" />
                <span className="text-gray-600">Dedicated Customer Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;