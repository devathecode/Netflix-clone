import React, {useEffect, useState} from 'react';
import tiger from "../../../assets/video/raindrop.mp4"

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    //navbar scroll changeBackground function
    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
    })
    return (
        <div className="relative">
            <video className="h-[40rem] object-cover w-full"
                   autoPlay loop muted controls={false}>
                <source src={tiger} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div
                className={`absolute z-50 top-0 min-w-fit bg-gradient-to-b from-[#1a1a1a] via-transparent to-[#141414] ${navbar ? '' : 'container pt-2 pb-6'}`}>
                <div
                    className={`grid grid-cols-12 gap-1 z-50 tracking-[-0.05rem] w-full px-9 fixed transition-all ease-in-out duration-100 ${navbar ? 'bg-gradient-to-b from-black to-[#141414] py-4 top-0' : 'top-5'}`}>
                    <div className="col-span-1">
                        <div className="text-red-700 uppercase font-bold flex flex-row">
                            <h1 className="text-[2rem] leading-[2.4rem]">N</h1>
                            <h1 className="text-[1.9rem] leading-[2.2968rem]">e</h1>
                            <h1 className="text-[1.8rem] leading-[2.16rem]">t</h1>
                            <h1 className="text-[1.8rem] leading-[2.16rem]">f</h1>
                            <h1 className="text-[1.8rem] leading-[2.16rem]">l</h1>
                            <h1 className="text-[1.9rem] leading-[2.2968rem]">i</h1>
                            <h1 className="text-[2rem] leading-[2.4rem]">x</h1>
                        </div>
                    </div>
                    <div className="col-span-7 place-self-start my-auto">
                        <ul className="flex space-x-5 text-gray-100 text-sm ml-8">
                            <li>Home</li>
                            <li>TV Shows</li>
                            <li>Movies</li>
                            <li>New & Popular</li>
                            <li>My List</li>
                            <li>Browse by language</li>
                        </ul>
                    </div>
                    <div className="col-span-4 place-self-end my-auto">
                        <div className="flex items-center space-x-7">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                 stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                 className="feather feather-search w-6 h-6">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <p className="text-gray-100 text-[0.8rem] tracking-wider">Children</p>
                            <img
                                src="http://occ-0-4409-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeXzJtzquCWHw5ePx2uLmUX6bt2VOGp_HvHZf1m5cNbDSLkTEAfi1OGRBtBn2euTvrUPOrzptq60DdAj43k04Su9_yUmlLbHLlvXKBXrh0zFlTm1.avif?r=229"
                                alt=""/>
                        </div>
                        {/*<ul className="flex space-x-1 text-red-100 text-sm">*/}
                        {/*    <li>Home</li>*/}
                        {/*    <li>TV Shows</li>*/}
                        {/*    <li>Movies</li>*/}
                        {/*</ul>*/}
                    </div>
                </div>
                <div className={`grid grid-cols-12 ${navbar ? 'h-[40rem]' : 'h-[38rem]'}`}>
                    <div className="col-span-6 my-auto px-9">
                        <div className="flex items-center">
                            <div className="h-16 w-12 flex justify-center items-center">
                                <div className="h-3/5 w-1/6 bg-red-800"></div>
                                <div className="h-3/5 w-1/6 bg-red-700 transform skew-x-12"></div>
                                <div className="h-3/5 w-1/6 bg-red-800"></div>
                            </div>
                            <h1 className="text-gray-200 uppercase tracking-[0.4rem] text-sm font-bold">Series</h1>
                        </div>
                        <div className="flex flex-col px-2">
                            <p className="text-gray-100 text-7xl my-4">
                                Nature & World
                            </p>
                            <p className="text-white">
                                At a grisly murder scene sits a figurine made of chestnuts. From this creepy clue, two
                                detectives hunt a killer linked to a politician's missing child.
                            </p>
                            <div className="my-4 flex space-x-5">
                                <button
                                    className="bg-white rounded-lg flex flex-row justify-center items-center w-32 py-1.5 text-xl">
                                    <svg viewBox="0 0 24 24" width="24px" height="24px">
                                        <path fill="currentColor" d="M3,22V2L21,12L3,22Z"/>
                                    </svg>
                                    <span className="ml-1.5">Play</span>
                                </button>
                                <button
                                    className="bg-[#6d6d6eB3] text-white rounded-lg flex flex-row justify-center items-center w-40 py-1.5 text-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"
                                         viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                         stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="16" x2="12" y2="12"></line>
                                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                    </svg>
                                    <span className="ml-3">More Info</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;