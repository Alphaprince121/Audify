import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import PopularArtists from '../components/homemain/PopularArtists';
import PopularAlbums from '../components/homemain/PopolarAlbums';
import PopularRadio from '../components/homemain/PopularRadio';
import PopularCharts from '../components/homemain/PopularCharts';
import IndiaBest from '../components/homemain/IndiaBest';
import Footer from '../components/base/footer';

const Home = () => {
  return (
    <div className="flex h-screen pt-20">
      {/* Main Content */}
      <div className="w-[70%] ml-[30%] overflow-y-auto bg-black text-white">
      <div className='bg-[#141417] p-6 m-2 rounded-lg'>
      <PopularArtists />
      <PopularAlbums/>
      <PopularRadio/>
      <IndiaBest/>
      <PopularCharts/>
      <Footer/>
      </div>
       
      </div>
    </div>
  );
};

export default Home;
