import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import HomePage from '../components/homemain/HomePage';

const Home = () => {
  return (
    <div className="flex h-screen pt-20">
      {/* Sidebar */}
      <div className="w-[30%] bg-black fixed h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-[70%] ml-[30%] overflow-y-auto bg-black text-white">
        <HomePage />
      </div>
    </div>
  );
};

export default Home;
