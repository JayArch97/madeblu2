import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUniversalAccess, faCamera, faMagnifyingGlass, faContactBook} from "@fortawesome/free-solid-svg-icons";

export default function SixthPage() {
    return (
        <div className="w-full h-screen bg-white">
            <div className="container mx-auto">
            <h1 className="text-black text-2xl ml-4 font-bold mt-4">Permissions</h1>
            <p className="text-black text-lg ml-4 mt-4">
                Please allow us permission to access the <br />
                following for fast and wide facial detection
            </p>
            </div>
            <div className=" w-3/12 ml-20 mt-10 flex items-center px-2 py-2 border-2 ">
               <FontAwesomeIcon className="text-2xl ml-5" icon={faUniversalAccess} />
                <p className="ml-4 text-2xl ">Allow to access apps</p>
            </div>
            <div className=" w-3/12 ml-20 mt-10 flex items-center px-2 py-2 border-2 ">
               <FontAwesomeIcon className="text-2xl ml-5" icon={faCamera} />
                <p className="ml-4 text-2xl ">Allow to access apps</p>
            </div>
            <div className=" w-3/12 ml-20 mt-10 flex items-center px-2 py-2 border-2 ">
               <FontAwesomeIcon className="text-2xl ml-5" icon={faMagnifyingGlass} />
                <p className="ml-4 text-2xl ">Allow to access apps</p>
            </div>
            <div className=" w-3/12 ml-20 mt-10 flex items-center px-2 py-2 border-2 ">
               <FontAwesomeIcon className="text-2xl ml-5" icon={faContactBook} />
                <p className="ml-4 text-2xl ">Allow to access apps</p>
            </div>
            <p className="ml-20 mt-2">I have read the privacy policy and I accept <br/> the terms and conditions </p>
            <button className="text-white text-2xl ml-40 px-2 py-2 border-2 border-green-300 rounded-2xl w-40 mt-2 bg-green-300 hover:cursor-pointer">Allow</button>
        </div>
    );
}
