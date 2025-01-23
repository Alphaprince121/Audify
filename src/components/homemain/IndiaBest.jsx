import React from 'react';
import './PopularArtists.css';
import { FaPlay } from "react-icons/fa";
import IPop from '../../assets/india-best/i-pop.jpeg';
import Central from '../../assets/india-best/central.jpeg';
import Panjabi from '../../assets/india-best/panjabi.jpeg';
import Rap from '../../assets/india-best/rap.jpeg';
import Haryanvi from '../../assets/india-best/haryanvi.jpeg';
import Bhojpuri from '../../assets/india-best/bhojpuri.jpeg';

const artists = [
    { id: 1, name: 'Hottest tracks from your favourite I-Pop.', image: IPop },
    { id: 2, name: 'Jab baje toh seedha dil ke centre mein lage...', image: Central },
    { id: 3, name: 'Ultimate 101 Punjabi Hits with Karan Aujla.', image: Panjabi },
    { id: 4, name: 'India Rap Scene. Cover - DIVINE.', image: Rap },
    { id: 5, name: 'Biggest Haryanvi hits from the last 10 years.', image: Haryanvi },
    { id: 6, name: 'Catch all the Bhojpuri top hits.', image: Bhojpuri },
];

const IndiaBest = () => {
    return (
        <div className="rounded-lg pb-10">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-white">India's Best</h1>
            </div>
            <div className="flex overflow-hidden overflow-x-auto wrapper cursor-pointer">
                {artists.map((artist) => (
                    <div
                        key={artist.id}
                        className="relative flex-shrink-0 w-44 rounded-lg shadow-lg p-4 hover:bg-[#252424] transform hover:scale-105 transition duration-300 group"
                    >
                        <div className="relative">
                            <img
                                src={artist.image}
                                alt={artist.name}
                                className="w-32 h-32 mb-4 mx-auto rounded-lg"
                            />
                            {/* Play Icon */}
                            <div className="hidden group-hover:flex bg-red-500 justify-center items-center w-10 h-10 rounded-full absolute -right-6 top-28 transform -translate-x-1/2 -translate-y-1/2">
                                <FaPlay className="text-white" />
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm">{artist.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IndiaBest;
