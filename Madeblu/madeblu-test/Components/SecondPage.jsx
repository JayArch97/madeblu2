import { useState } from "react";

function Tab1() {
    return <div className="p-4">Payroll Info</div>;
}
function Tab2() {
    return <div className="p-4">Time Off Info</div>;
}

function Tab3() {
    return <div className="p-4">Journey Info</div>;
}

const sections = [
    { name: "Tab1", component: <Tab1 /> },
    { name: "Tab2", component: <Tab2 /> },
    { name: "Tab3", component:   <Tab3 /> },



];

export default function SecondPage(){
    const [activeSection, setActiveSection] = useState(0);
    const types = ["Cash", "Credit Card", "Bitcoin"];


    return (
    <div className="container mx-auto">
        <div className="flex h-screen">
             <div className="w-20" />   
               <div className="flex flex-col flex-1">
            
                  <div className="flex flex-1 overflow-auto p-4 bg-gray-50">
                    {sections[activeSection].component}
            
                    <div className="h-[100vh] grid-col-2 grid-rows-2">

                    <div className="ml-20 w-[40vw] min-w-[300px] h-[80vh] border-2 border-gray-200 bg-white p-6 rounded-md shadow-sm relative">
                    <p className="absolute top-5 right-0 size-16  "> </p>

                    <div className="flex space-x-4 p-4 border-b bg-white rounded-sm">
                    {sections.map((section, index) => (
                        <button
                            key={index}
                            className={`px-4 py-2 rounded ${
                                activeSection === index
                                    ? "bg-white-600 text-gray-700 underline"
                                    : "bg-white-200 text-gray-700"
                            }`}
                            onClick={() => setActiveSection(index)}
                        >
                            {section.name}
                        </button>
                    ))}
                      </div> 

                        <div className="flex space-x-4 p-4  bg-white  border-gray-300 border-1 rounded-full mt-4">
                        {sections.map((section, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 rounded ${
                                    activeSection === index
                                        ? "bg-blue-600  text-white rounded-full px-4 py-4"
                                        : "bg-white-200 text-gray-700"
                                }`}
                                onClick={() => setActiveSection(index)}
                            >
                                {section.name}
                            </button>
                        ))}
                      </div>  
                      <div className="flex space-x-4 p-4  bg-white  border-gray-300 border-1 rounded-full mt-4">
                        {sections.map((section, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 rounded ${
                                    activeSection === index
                                        ? "bg-white border-blue-400 border-2  text-blue-600 rounded-full px-4 py-4"
                                        : "bg-white-200 text-gray-700"
                                }`}
                                onClick={() => setActiveSection(index)}
                            >
                                {section.name}
                            </button>
                        ))}
                      </div>  
                      <div className="flex space-x-4 p-4  bg-gray-100  border-gray-300 border-1 rounded-full mt-4">
                        {sections.map((section, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 rounded ${
                                    activeSection === index
                                        ? "bg-white border-blue-400 border-2  text-blue-600 rounded-full px-4 py-4"
                                        : "bg-white-200 text-gray-700"
                                }`}
                                onClick={() => setActiveSection(index)}
                            >
                                {section.name}
                            </button>
                        ))}
                      </div>  

                      </div>  
                    </div>
                    </div>
                  </div>
                 </div>
                </div>

    )
}