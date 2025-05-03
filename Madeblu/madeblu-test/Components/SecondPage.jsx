import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faHome} from '@fortawesome/free-solid-svg-icons'

function Tab1() {
    return <div className="p-4"></div>;
}
function Tab2() {
    return <div className="p-4"></div>;
}

function Tab3() {
    return <div className="p-4"></div>;
}

const sections = [
    { name: "Tab1", component:   <Tab1 /> },
    { name: "Tab2", component:   <Tab2 /> },
    { name: "Tab3", component:   <Tab3 /> },



];

export default function SecondPage(){
    const [row1, setRow1] = useState(0);
    const [row2, setRow2] = useState(0);
    const [row3, setRow3] = useState(0);
    const [row4, setRow4] = useState(0);


    return (
    <div className="container mx-auto">
        
        <div className="flex h-screen">
             <div className="w-20" />   
             
               <div className="flex flex-col flex-1">

                  <div className="flex flex-1 overflow-auto p-4 bg-gray-50">
                    {sections[row1].component}
            
                    <div className="h-[100vh] grid-col-2 grid-rows-2">

                    <div className="ml-20 w-[40vw] min-w-[300px] h-[80vh] border-2 border-gray-200 bg-white p-6 rounded-md shadow-sm relative">
                    <p className="absolute top-5 right-0 size-16  "> </p>

                    <div className="flex space-x-4 p-4 border-b bg-white rounded-sm">
                        
                    {sections.map((section, index) => (
                        <button
                            key={index}
                            className={`px-4 py-2 rounded ${
                                row1 === index
                                    ? "bg-white-600 text-gray-700 underline"
                                    : "bg-white-200 text-gray-700"
                            }`}
                            onClick={() => setRow1(index)}
                        >
                            {section.name}
                        </button>
                    ))}
                      </div> 
                      <div className="flex items-center justify-center">
                        <div className="relative h-15 w-14 mr-4">
                      <p className="z-10 ml-4  mt-5">{<FontAwesomeIcon icon={faUser} />} </p>

                      <svg aria-hidden="true" class="absolute inset-0 w-full h-full text-white animate-spin dark:white fill-blue-600 z-0 " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    </div>

                        <div className="flex space-x-4 p-4 bg-white w-full min-width-80 border-gray-300 border-1 rounded-full mt-4">

                        {sections.map((section, index) => (

                            <button
                                key={index}
                                className={`flex items-center justify-center w-full text-center  ${
                                    row2 === index
                                        ? "bg-blue-600 text-lg text-white rounded-full px-4 py-4 items-center justify-between"
                                        : "bg-white-200 text-gray-700 "
                                }`}
                                onClick={() => setRow2(index)}
                            >
                                {section.name}
                            </button>
                        ))}
                      </div>    
                      </div>
                      <div className="flex items-center justify-center">
                      <div>
                      <p className="ml-4  mr-8">{<FontAwesomeIcon icon={faUser} />} </p>
                      <p className="ml-2 mt-2 ">User</p>
                      <p className="ml-1 ">Profile</p>

                       </div>
                      <div className="flex space-x-4 p-4 bg-white w-full border-gray-300 border-1 rounded-full mt-4">
                        
                        {sections.map((section, index) => (
                            <button
                                key={index}
                                className={`flex items-center justify-center w-full text-center ${
                                    row3 === index
                                        ? "bg-white text-lg border-blue-400 border-2  text-blue-600 rounded-full px-4 py-4"
                                        : "bg-white-200 text-gray-700"
                                }`}
                                onClick={() => setRow3(index)}
                            >
                                {section.name}
                            </button>
                        ))}
                      </div>  
                      </div>  

                      <div className="flex items-center justify-center">
                      <div>
                      <p className="ml-4  mr-8">{<FontAwesomeIcon icon={faHome} />} </p>
                      </div>
                        
                        {sections.map((section, index) => (
                            <button
                                key={index}
                                className={`flex items-center justify-center w-full text-center${
                                    row4 === index
                                        ? "bg-white  text-lg border-blue-400 border-2  text-blue-600 rounded-full px-4 py-4"
                                        : "bg-white-200 text-gray-700"
                                }`}
                                onClick={() => setRow4(index)}
                            >
                                {section.name}
                            </button>
                        ))}
                      </div>  
                      <div className="flex">
                      <p className="text-lg border-1 ml-2 rounded-full px-2 py-2 mt-4 mb-2 mr-10">{<FontAwesomeIcon icon={faHome} />} </p>
                       <select className="border-1 mt-2 w-[10vw] px-2 py-2">
                        <option value="someOption">Dropdown</option>
                        <option value="otherOption">Other option</option>
                        </select>
                      <div>
                      </div>
                      </div>
                      <div className="flex">
                      <p className="text-lg border-1 ml-2 rounded-full px-2 py-2 mt-4 mb-2 mr-10">{<FontAwesomeIcon icon={faHome} />} </p>
                       <select className="border-1 mt-2 w-[10vw] px-2 py-2">
                        <option value="someOption">Dropdown</option>
                        <option value="otherOption">Other option</option>
                        </select>
                        <div>
                      </div>
                      </div>
                      <div className="flex">
                      <p className="text-lg border-1 ml-2 rounded-full px-2 py-2 mt-4 mb-2 mr-10">{<FontAwesomeIcon icon={faHome} />} </p>
                       <select className="border-1 mt-2 w-[10vw] px-2 py-2">
                        <option value="someOption">Dropdown</option>
                        <option value="otherOption">Other option</option>
                        </select>
                        <div>
                      </div>
                      </div>
                      </div>  
                    </div>
                    </div>
                  </div>
                 </div>
                </div>

    )
}