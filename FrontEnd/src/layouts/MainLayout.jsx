import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="main-layout">
      {/* Background Mesh */}
      <div className="main-layout__bg-mesh"></div>
      
      <Navbar />
      
      <main className="main-layout__content">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
