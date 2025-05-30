import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faEnvelope, faGear, faList, faLiraSign} from '@fortawesome/free-solid-svg-icons';

function Tab1() {
  return <div className="p-4">Tab 1 content</div>;
}
function Tab2() {
  return <div className="p-4">Tab 2 content</div>;
}
function Tab3() {
  return <div className="p-4">Tab 3 content</div>;
}

const sections = [
  { name: "Tab1", component: <Tab1 /> },
  { name: "Tab2", component: <Tab2 /> },
  { name: "Tab3", component: <Tab3 /> },
];

export default function SecondPage() {
  const [row1, setRow1] = useState(0);
  const [row2, setRow2] = useState(0);
  const [row3, setRow3] = useState(0);

  return (
    <div className="container mx-auto">
      <div className="flex h-screen">
        <div className="w-20" />

        <div className="flex">

          <div className="flex flex-1 overflow-auto p-4 bg-gray-50">
            {sections[row1].component}

            <div className="h-[100vh] grid-cols-2 grid-rows-2">
              <div className="ml-20 w-[40vw] min-w-[300px] h-[80vh] border-2 border-gray-200 bg-white p-6 rounded-md shadow-sm relative">
               <div className="flex">
                <div className=" w-4/5 mr-10">
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
                    <p className="z-10 ml-4 mt-5">
                      <FontAwesomeIcon icon={faUser} />
                    </p>

                    <svg
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full text-white animate-spin dark:white fill-blue-600 z-0"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>

                  <div className="flex space-x-4 p-4 bg-white w-full min-width-80 border-gray-300 border-1 rounded-full mt-4">
                    {sections.map((section, index) => (
                      <button
                        key={index}
                        className={`flex items-center justify-center w-full text-center  ${
                          row2 === index
                            ? "bg-blue-600 text-lg text-white rounded-full px-4 py-4"
                            : "bg-white-200 text-gray-700"
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
                    <p className="ml-4 mr-8">
                      <FontAwesomeIcon icon={faUser} />
                    </p>
                    <p className="ml-2 mt-2">User</p>
                    <p className="ml-1">Profile</p>
                  </div>
                  <div className="flex space-x-4 p-4 bg-white w-full border-gray-300 border-1 rounded-full mt-4">
                    {sections.map((section, index) => (
                      <button
                        key={index}
                        className={`flex items-center justify-center w-full text-center ${
                          row3 === index
                            ? "bg-white text-lg border-blue-400 border-2 text-blue-600 rounded-full px-4 py-4"
                            : "bg-white-200 text-gray-700"
                        }`}
                        onClick={() => setRow3(index)}
                      >
                        {section.name}
                      </button>
                    ))}
                  </div>
                </div>
                </div>
                <div className="mt-8 h-4/5 border-4 border-gray-200 px-2 py-2 border-t-0 border-b-0 flex flex-col items-center justify-center">
                <FontAwesomeIcon className="text-2xl mb-2 mt-4 text-gray-400" icon={faList} />
                <hr/>
                <FontAwesomeIcon className="text-2xl mb-2 mt-4 text-gray-400" icon={faUser} />
                <hr/>
                <FontAwesomeIcon className="text-2xl mb-2 mt-4 text-gray-400" icon={faHome} />
                <hr/>
                <FontAwesomeIcon className="text-2xl mb-2 mt-4 text-gray-400" icon={faEnvelope} />
                <hr/>
                <FontAwesomeIcon className="text-2xl mt-4 text-gray-400" icon={faGear} />

                </div>
                </div>

                <div className="flex gap-4 mt-4">
                  {/* Dropdowns container */}
                  <div className="flex flex-col gap-4">
                    {[0, 1, 2].map((idx) => (
                      <div className="flex items-center" key={idx}>
                        <p
                          className={`text-lg border-1 ml-2 rounded-full px-2 py-2 mr-4 ${
                            idx === 2
                              ? "text-white border-white bg-sky-600"
                              : idx === 1
                              ? "text-sky-400"
                              : ""
                          }`}
                        >
                          <FontAwesomeIcon icon={faHome} />
                        </p>
                        <select className="border-1 w-[15vw] h-[7vh] px-2 py-2">
                          <option value="someOption">Droplist</option>
                          <option value="otherOption">Other option</option>
                        </select>
                      </div>
                    ))}

                  </div>

                  <div className="w-[20vw] min-w-[200px] h-[25vh] bg-blue-100 border border-gray-300 rounded-md p-4 shadow-sm">
                    <select className="text-lg font-semibold mb-2 w-full border-1 px-2 py-2">
                    <option className="text-gray-700 text-sm">
                      Add Something
                    </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
