import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faDiceSix, faTrash} from '@fortawesome/free-solid-svg-icons';


export default function ThirdPage(){
    const [color, setColor] = useState('green')

    return (
        <>
            <div className="h-[100vh] w-[100vw] flex items-center justify-center">
                <div className="container mx-auto border-2 w-[30vw] h-[60vh]">
                <div className="flex items-center ">
                    <h2 className="text-2xl mt-2 ml-4 mb-4">Data validation rules</h2>
                    <FontAwesomeIcon className="ml-40 text-2xl" icon={faXmark} />
                    </div>
                <hr/>
                    <div className="mt-2">
                    <p className="text-lg ml-3">Apply to range</p>
                    <select className="w-9/10 border-2 h-[4vh] ml-2 mt-2">
                    <option>'Colored dropdown'B3, Colored Dropwdown</option>
                    </select>
                    </div>
                    <p className="text-lg ml-3 mt-2">Criteria</p>
                    <select className="w-9/10 border-2 h-[4vh] ml-2">
                    <option>'Colored dropdown'B3, Colored Dropwdown</option>
                    </select>
                    <div className="flex mt-4 ml-2 relative">
                         <FontAwesomeIcon className="ml-2 text-2xl bg-black text-white mt-2" icon={faDiceSix} />
                        <div className="flex items-center justify-center border-1 ml-1">
                          <input
                            type="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className="h-5 w-5 px-2 py-2 bg-green-200  rounded-full appearance-none cursor-pointer"
                            style={{
                                padding: 20,
                                WebkitAppearance: "none",
                                MozAppearance: "none",
                                borderRadius: "9999px",
                            }}
                            />

                    </div>
                    <input className="ml-5 border-2 w-3/5" />
                    <FontAwesomeIcon className="text-2xl ml-5 mt-2" icon={faTrash} />

                    </div>
                    <div className="flex mt-4 ml-2 relative">
                         <FontAwesomeIcon className="ml-2 text-2xl bg-black text-white mt-2" icon={faDiceSix} />
                        <div className="flex items-center justify-center border-1 ml-1">
                          <input
                            type="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className="h-5 w-5 px-2 py-2 bg-red-200  rounded-full appearance-none cursor-pointer"
                            style={{
                                padding: 20,
                                WebkitAppearance: "none",
                                MozAppearance: "none",
                                borderRadius: "9999px",
                            }}
                            />

                    </div>
                    <input className="ml-5 border-2 w-3/5" />
                    <FontAwesomeIcon className="text-2xl ml-5 mt-2" icon={faTrash} />

                    </div>
                </div>
            </div>
        </>
    )
}
