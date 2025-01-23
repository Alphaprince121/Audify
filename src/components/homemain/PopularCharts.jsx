import React from 'react';
import './PopularArtists.css';
import { FaPlay } from "react-icons/fa";
import Global from '../../assets/charts/global.jpg';
import India from '../../assets/charts/india.jpg';
import TopGlobal from '../../assets/charts/topGlobal.jpg';
import TopIndia from '../../assets/charts/topindia.jpg';
import ViralGlobal from '../../assets/charts/viralglobal.jpg';
import ViralIndia from '../../assets/charts/viralindia.jpg';


const artists = [
    { id: 1, name: 'Your weekly update of the most played...', image: Global },
    { id: 2, name: 'Your weekly update of the most played...', image: India },
    { id: 3, name: 'Your weekly update of the most played...', image: TopGlobal },
    { id: 4, name: 'Your weekly update of the most played...',image: TopIndia },
    { id: 5, name: 'Your daily update of the most viral tracks...', image: ViralGlobal },
    { id: 6, name: 'Your daily update of the most viral tracks...', image: ViralIndia },
];

const PopularCharts = () => {
    return (
        <div className="rounded-lg pb-10">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-white">Featured charts</h1>
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
                        <p className="text-gray-400 text-sm ">{artist.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularCharts;
