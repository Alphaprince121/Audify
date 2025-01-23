import React from 'react';
import './PopularArtists.css';
import { FaPlay } from "react-icons/fa";
import Pritam from '../../assets/artists/pritam.jpeg';
import Arijit from '../../assets/artists/arijit.jpeg';
import sachin from '../../assets/artists/sachin-jigar.webp';
import Rahman from '../../assets/artists/ar-rahman.avif';
import vishal from '../../assets/artists/vishal-shekhar.jpeg';

const artists = [
  { id: 1, name: 'Pritam', role: 'Artist', image: Pritam, link: '/artist/Pritam' },
  { id: 2, name: 'Arijit Singh', role: 'Artist', image: Arijit, link: '/artists/arijit' },
  { id: 3, name: 'Sachin-Jigar', role: 'Artist', image: sachin, link: '/artists/sachin-jigar' },
  { id: 4, name: 'A.R.Rahman', role: 'Artist', image: Rahman, link: '/artists/ar-rahman' },
  { id: 5, name: 'Vishal-Shekhar', role: 'Artist', image: vishal, link: '/artists/vishal-shekhar' },
  { id: 6, name: 'Pritam', role: 'Artist', image: Pritam, link: '../../components/artist/Pritam' },
  { id: 7, name: 'Arijit Singh', role: 'Artist', image: Arijit, link: '/artist/arijit' },
  { id: 8, name: 'Vishal-Shekhar', role: 'Artist', image: vishal, link: '/artists/vishal-shekhar' },
];

const PopularArtists = () => {
  return (
    <div className="rounded-lg pb-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Popular Artists</h1>
      </div>
      <div className="flex gap-5 overflow-hidden overflow-x-auto wrapper cursor-pointer">
        {artists.map((artist) => (
          <a 
            href={artist.link} 
            key={artist.id} 
            className="relative flex-shrink-0 rounded-lg shadow-lg p-4 hover:bg-[#252424] transform hover:scale-105 transition duration-300 group"
          >
            <div className="relative">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              {/* Play Icon */}
              <div className="hidden group-hover:flex bg-red-500 justify-center items-center w-10 h-10 rounded-full absolute -right-6 top-28 transform -translate-x-1/2 -translate-y-1/2">
                <FaPlay className="text-white" />
              </div>
            </div>
            <h1 className="text-lg font-semibold text-white">
              {artist.name}
            </h1>
            <p className="text-gray-400 text-sm">{artist.role}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PopularArtists;
