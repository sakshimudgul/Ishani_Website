import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import Home from './Pages/Home/Home';
import Product from "./Pages/Product/Product"
import Contact from "./Pages/Contact/Contact"
import About from "./Pages/About/About"
import DataManager from './Pages/Admin/DataManger'

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin/data" element={<DataManager />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;