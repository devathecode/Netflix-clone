import React from 'react';
import Imagecard from "../../../Shared/Components/Imagecard";

const Home = () => {
    return (
        <>
            <Imagecard>
                <div className="pl-8 mb-3 cursor-pointer">
                    <h1 className="text-lg tracking-wider text-gray-300">New Releases</h1>
                </div>
            </Imagecard>
            <div className="my-6">
                <Imagecard>
                    <div className="pl-8 mb-3 cursor-pointer inline-flex group">
                        <h1 className="text-lg font-semibold tracking-wider text-gray-300">Continue watching for username</h1>
                        <p className="text-[#0E7490] opacity-0 group-hover:opacity-100 text-sm transition-all ease-in-out duration-700 mt-1.5 ml-2">Explore All </p>
                    </div>
                </Imagecard>
            </div>
            <Imagecard>
                <div className="pl-8 mb-3 cursor-pointer inline-flex group">
                    <h1 className="text-lg font-semibold tracking-wider text-gray-300">Trending Now</h1>
                    <p className="text-[#0E7490] opacity-0 group-hover:opacity-100 text-sm transition-all ease-in-out duration-700 mt-1.5 ml-2">Explore All </p>
                </div>
            </Imagecard>
        </>
    );
};

export default Home;