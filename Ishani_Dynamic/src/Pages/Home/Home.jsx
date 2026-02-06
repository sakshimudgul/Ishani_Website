import React from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { 
  FaCalendarAlt, 
  FaDoorOpen, 
  FaListAlt,
  FaChartLine,
  FaHandshake,
  FaBuilding,
  FaHardHat,
  FaUsers 
} from "react-icons/fa";
import { bg1 } from "../../assets";

function Home() {
  const navigate = useNavigate();

  const handleExploreDoors = () => {
    navigate("/products");
  };

  const handleBookVisit = () => {
    navigate("/contact");
  };

  const handleAllCategories = () => {
    navigate("/products");
  };

  return (
    <div className="min-h-screen  ">
      {/* Hero Section - Original background styling preserved */}
      <div className="p-10 md:p-20 lg:p-40 relative h-[80vh]">
        <div
          className="absolute inset-0 h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${bg1})` }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-10 relative pt-20 md:pt-30 lg:pt-50 text-white text-2xl ml-10"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-bold text-4xl md:text-5xl lg:text-6xl text-white"
            >
              Secure Entrances With Smart Innovation
            </motion.h1>
            <br></br>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-300 text-lg md:text-xl"
            >
              High-end Security doors that blend advanced technology with
              elegant design.
            </motion.p>
          </motion.div>
        </div>

        {/* Info Card Overlay */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white absolute right-5 left-5 md:right-10 md:left-10 lg:right-50 lg:left-50 bottom-[-100px] p-8 md:p-10 rounded-2xl shadow-2xl"
        >
          <h1 className="flex justify-center text-2xl md:text-3xl font-bold">
            Ishani Enterprises
          </h1>
          <br />
          <p className="text-gray-600 text-lg md:text-xl flex justify-center text-center">
            Maharashtra's premier French door and window specialists since 2012
          </p>
          <br />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleExploreDoors}
              className="bg-green-600 rounded-md px-6 py-3 md:px-8 md:py-4 font-bold text-white hover:bg-green-700 transition duration-300 flex items-center justify-center gap-2"
            >
              <FaDoorOpen />
              Explore Doors
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBookVisit}
              className="border border-green-600 rounded-md font-bold text-green-600 px-6 py-3 md:px-8 md:py-4 hover:bg-green-50 transition duration-300 flex items-center justify-center gap-2"
            >
              <FaCalendarAlt />
              Book a Visit
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-100 pb-20 md:pb-32 lg:pb-40">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center pt-20 md:pt-30 lg:pt-40 font-bold text-3xl md:text-4xl text-center px-4"
        >
          Crafting Elegance Since 2012
        </motion.h1>
        <br />
        <br />
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base md:text-xl m-5 md:m-8 lg:m-10 text-center"
        >
          Ishani Enterprises is Maharashtra's premier manufacturer of{" "}
          <b>Premium French doors and windows,</b> blending European elegance
          with Indian craftsmanship. Since our founding in 2012, we've
          transformed over 500+ homes and commercial spaces with our{" "}
          <b>Precision-engineered, weather-resistant </b> entrance solutions that
          combine aesthetic appeal with uncompromising security.
        </motion.p>

        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-stretch gap-4 md:gap-6 lg:gap-8 px-4 md:px-8 lg:px-12"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white h-40 md:h-48 lg:h-56 w-full sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%] m-2 md:m-3 lg:m-4 border border-gray-300 rounded-xl shadow-md p-4 md:p-6 flex flex-col items-center justify-center"
            >
              <div className="text-green-600 mb-2">
                {stat.icon}
              </div>
              <h1 className="font-black text-2xl md:text-3xl lg:text-4xl text-center">
                {stat.value}
              </h1>
              <p className="text-gray-500 text-sm md:text-base text-center mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.section>
      </div>

      {/* Products Range Section */}
      <section className="pt-10 md:pt-16 lg:pt-20 pb-10 md:pb-16 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="font-bold text-3xl md:text-4xl flex justify-center pb-6 md:pb-8 lg:pb-10 text-center px-4">
            Our Products Range
          </h1>
          <p className="flex justify-center pb-5 md:pb-6 lg:pb-8 text-center px-4 text-gray-600 text-base md:text-lg">
            Explore premium doors and security solutions for modern Indian homes
          </p>
          <div className="flex justify-center px-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAllCategories}
              className="bg-green-500 hover:bg-green-600 px-8 md:px-10 py-3 md:py-4 rounded-2xl text-white font-bold transition duration-300 flex items-center gap-2"
            >
              <FaListAlt />
              All Categories
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

// Stats data with icons
const statsData = [
  { 
    value: "13+", 
    label: "Years of Excellence",
    icon: <FaChartLine size={24} className="md:w-6 md:h-6 lg:w-8 lg:h-8" />
  },
  { 
    value: "135+", 
    label: "Contractors",
    icon: <FaHardHat size={24} className="md:w-6 md:h-6 lg:w-8 lg:h-8" />
  },
  { 
    value: "56+", 
    label: "Architects",
    icon: <FaUsers size={24} className="md:w-6 md:h-6 lg:w-8 lg:h-8" />
  },
  { 
    value: "22,500+", 
    label: "Doors Installed",
    icon: <FaDoorOpen size={24} className="md:w-6 md:h-6 lg:w-8 lg:h-8" />
  },
  { 
    value: "100+", 
    label: "Door Designs",
    icon: <FaListAlt size={24} className="md:w-6 md:h-6 lg:w-8 lg:h-8" />
  },
  { 
    value: "85+", 
    label: "Builders",
    icon: <FaBuilding size={24} className="md:w-6 md:h-6 lg:w-8 lg:h-8" />
  },
];

export default Home;