import React from 'react';
import './PopularArtists.css';
import { FaPlay } from "react-icons/fa";
import Arijit from '../../assets/radio/arijit.jpeg';
import Diljit from '../../assets/radio/daljit.jpeg';
import Honey from '../../assets/radio/honey.jpeg';
import Kk from '../../assets/radio/kk.jpeg';
import Rahet from '../../assets/radio/rahet.jpeg';



const artists = [
    { id: 1, singer: 'With Sachin-Jigar, Vishal-Shekhar....', image: Arijit },
    { id: 2, singer: 'With Karan Aujla, Shubh, AP Dhillon...', image: Diljit },
    { id: 3, singer: 'With Badshah, Diljit Dosanjh, Harrdy..', image: Honey },
    { id: 4, singer: 'With Armaan Malik, Mohit Chauhan....',image: Kk },
    { id: 5, singer: 'With Shankar-Ehsaan-Loy, Javed Ali, A.R...', image: Rahet },
    { id: 6, singer: 'With Sachin-Jigar, Vishal-Shekhar....', image: Arijit },
    { id: 7, singer: 'With Karan Aujla, Shubh, AP Dhillon...', image: Diljit },
    { id: 8, singer: 'With Badshah, Diljit Dosanjh, Harrdy..', image: Honey },

];

const PopularRadio = () => {
    return (
        <div className="rounded-lg pb-10">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-white">Popular radio</h1>
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
                        <p className="text-gray-400 text-sm ">{artist.singer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularRadio;
