import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {MenuContext} from "../provider/MenuProvider";

export default function MenuCard({id, image, name, description, onDelete}) {
    const navigate = useNavigate();

    return (
        <div className="flex lg:flex-col max-h-full max-w-full bg-white rounded-xl overflow-hidden shadow-lg m-4">
            <img className="w-32 lg:w-full lg:h-48 object-cover" src={image} alt={name}/>
            <div className="w-full flex flex-1 flex-col p-2 justify-between">
                <div className="flex justify-between">
                    <h2 className="flex-1 text-xl font-semibold text-gray-800 line-clamp-1">{name}</h2>
                    <div className="w-2"/>
                    <div className="flex items-center relative group">
                        {/* Menu Button */}
                        <button className="focus:outline-none">
                            <svg
                                className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        <div
                            className="absolute top-6 right-0 pt-2 w-48 hidden group-hover:block">
                            <div
                                className="bg-white border rounded-lg shadow-md">
                                <div className="py-1">
                                    <div
                                        onClick={() => navigate(`/edit/${id}`)}
                                        className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                    >
                                        Edit
                                    </div>
                                    <div
                                        onClick={() => onDelete(id)}
                                        className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                    >
                                        Delete
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex  mt-4 text-gray-600 overflow-ellipsis">
                    <div className={'line-clamp-2'}>
                        {description}
                    </div>
                </div>

                {/* Button at the Bottom */}
                <button onClick={() => navigate(`/recipie/${id}`)}
                        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View
                </button>
            </div>
        </div>
    );
};

