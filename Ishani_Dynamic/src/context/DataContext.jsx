import React, { createContext, useState, useContext, useEffect } from 'react';
import { homeData, productsData, aboutData } from '../data';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  // Initial state from data files
  const [home, setHome] = useState(() => {
    // Try to load from localStorage first
    const saved = localStorage.getItem('ishani_home_data');
    return saved ? JSON.parse(saved) : homeData;
  });
  
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('ishani_products_data');
    return saved ? JSON.parse(saved) : productsData;
  });
  
  const [about, setAbout] = useState(() => {
    const saved = localStorage.getItem('ishani_about_data');
    return saved ? JSON.parse(saved) : aboutData;
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('ishani_home_data', JSON.stringify(home));
  }, [home]);

  useEffect(() => {
    localStorage.setItem('ishani_products_data', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('ishani_about_data', JSON.stringify(about));
  }, [about]);

  // Functions to update data
  const updateHomeData = (newData) => {
    setHome(prev => ({ ...prev, ...newData }));
  };

  const updateProductsData = (newData) => {
    setProducts(prev => ({ ...prev, ...newData }));
  };

  const updateAboutData = (newData) => {
    setAbout(prev => ({ ...prev, ...newData }));
  };

  // Function to reset to original data
  const resetData = () => {
    setHome(homeData);
    setProducts(productsData);
    setAbout(aboutData);
    localStorage.removeItem('ishani_home_data');
    localStorage.removeItem('ishani_products_data');
    localStorage.removeItem('ishani_about_data');
  };

  const value = {
    home,
    products,
    about,
    updateHomeData,
    updateProductsData,
    updateAboutData,
    resetData
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};