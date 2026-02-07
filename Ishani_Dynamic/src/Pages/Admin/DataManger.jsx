import React, { useState } from 'react';
import { useData } from '../../context/DataContext';

const DataManager = () => {
  const { 
    home, 
    products, 
    about, 
    updateHomeData, 
    updateProductsData, 
    updateAboutData,
    resetData 
  } = useData();

  const [activeTab, setActiveTab] = useState('home');
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});

  const handleEdit = (section, data) => {
    setEditData(data);
    setActiveTab(section);
    setIsEditing(true);
  };

  const handleSave = () => {
    if (activeTab === 'home') {
      updateHomeData(editData);
    } else if (activeTab === 'products') {
      updateProductsData(editData);
    } else if (activeTab === 'about') {
      updateAboutData(editData);
    }
    setIsEditing(false);
    setEditData({});
  };

  const handleInputChange = (e, path) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNestedChange = (e, parent, child) => {
    const { value } = e.target;
    setEditData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [child]: value
      }
    }));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Data Management</h1>
        
        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          {['home', 'products', 'about'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg ${
                activeTab === tab 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Edit Form */}
        {isEditing ? (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-bold mb-4">Edit {activeTab} Data</h2>
            <div className="space-y-4">
              {Object.keys(editData).map((key) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {key}
                  </label>
                  <input
                    type="text"
                    name={key}
                    value={editData[key] || ''}
                    onChange={(e) => handleInputChange(e, key)}
                    className="w-full p-2 border rounded"
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-6">
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Save Changes
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : null}

        {/* Data Display */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">
            Current {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Data
          </h2>
          
          {activeTab === 'home' && (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Hero Section</h3>
                <p>Title: {home.hero.title}</p>
                <p>Description: {home.hero.description}</p>
              </div>
              <button
                onClick={() => handleEdit('home', home.hero)}
                className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
              >
                Edit Hero
              </button>
            </div>
          )}
          
          {activeTab === 'products' && (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Categories</h3>
                <p>Total Categories: {products.categories?.length || 0}</p>
              </div>
              <button
                onClick={() => handleEdit('products', { categories: products.categories })}
                className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
              >
                Edit Categories
              </button>
            </div>
          )}
          
          {activeTab === 'about' && (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Company Info</h3>
                <p>Name: {about.company?.name}</p>
                <p>Founded: {about.company?.founded}</p>
              </div>
              <button
                onClick={() => handleEdit('about', about.company)}
                className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
              >
                Edit Company Info
              </button>
            </div>
          )}
        </div>

        {/* Reset Button */}
        <div className="mt-6">
          <button
            onClick={resetData}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Reset All Data to Default
          </button>
          <p className="text-sm text-gray-500 mt-2">
            This will reset all data to original values and clear localStorage
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataManager;