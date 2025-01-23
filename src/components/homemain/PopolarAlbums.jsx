import React from 'react';
import './PopularArtists.css';
import { FaPlay } from "react-icons/fa";
import Honey from '../../assets/albums/honey.jpeg';
import Aashiqui from '../../assets/albums/ashique.jpg';
import Jawaani from '../../assets/albums/jawaani.jpg';
import Sidhu from '../../assets/albums/sidhu.jpg';
import Karan from '../../assets/albums/karan.jpeg';



const artists = [
  { id: 1, singer: 'Yo Yo Honey Singh', album: 'Glory', image: Honey },
  { id: 2, singer: 'Mithoon, Ankit Tiwari & Jeet Gannguli', album: 'Aashiqui 2', image: Aashiqui },
  { id: 3, singer: 'Pritam', album: 'Yeh Jawaani Hai Deewani', image: Jawaani },
  { id: 4, singer: 'Sidhu Moose Wala', album: 'Moose Wala', image: Sidhu },
  { id: 5, singer: 'Karan Aujla, Ikky', album: 'Making Memories', image: Karan },
  { id: 6, singer: 'Yo Yo Honey Singh', album: 'Glory', image: Honey },
  { id: 7, singer: 'Mithoon, Ankit Tiwari & Jeet Gannguli', album: 'Aashiqui 2', image: Aashiqui },

];

const PopularArtists = () => {
  return (
    <div className="rounded-lg pb-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Popular albums and singles</h1>
      </div>
      <div className="flex  overflow-hidden overflow-x-auto wrapper cursor-pointer">
        {artists.map((artist) => (
          <div
            key={artist.id}
            className="relative flex-shrink-0 w-44 rounded-lg shadow-lg p-4 hover:bg-[#252424] transform hover:scale-105 transition duration-300 group"
          >
            <div className="relative">
              <img
                src={artist.image}
                alt={artist.album}
                className="w-32 h-32 mb-4 mx-auto"
              />
              {/* Play Icon */}
              <div className="hidden group-hover:flex bg-red-500 justify-center items-center w-10 h-10 rounded-full absolute -right-6 top-28 transform -translate-x-1/2 -translate-y-1/2">
                <FaPlay className="text-white" />
              </div>
            </div>
            <h1 className="text-lg font-semibold text-white ">
              {artist.album}
            </h1>
            <p className="text-gray-400 text-sm ">{artist.singer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularArtists;
