import React from "react";
import { useData } from "../../context/DataContext";
import * as Icons from "react-icons/fa";

function About() {
  const { about } = useData();
  
  // Helper function to get icon component
  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  return (
    <div>
      <h1 className="flex justify-center pt-12 md:pt-16 lg:pt-20 text-3xl md:text-4xl font-bold px-4 text-center">
        About {about.company.name}
      </h1>
      <br />
      
      {/* Company Info */}
      <div className="px-4 md:px-8 lg:px-12 py-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Company Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>Founded:</strong> {about.company.founded}</p>
              <p><strong>Employees:</strong> {about.company.employees}</p>
            </div>
            <div>
              <p><strong>Facility Size:</strong> {about.company.facilitySize}</p>
              <p><strong>Description:</strong> {about.company.description}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dynamic Sections */}
      {about.sections && about.sections.map((section) => (
        <div key={section.id} className="px-4 md:px-8 lg:px-12 py-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">{section.title}</h3>
            <p className="text-gray-600">{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;