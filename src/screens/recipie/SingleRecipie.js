import {useNavigate, useParams} from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import {MenuContext} from "../../provider/MenuProvider";
import MenuCard from "../../component/MenuCard";

export default function SingleRecipie() {
    const navigate = useNavigate();
    const {id} = useParams();
    const {menu, setMenu} = useContext(MenuContext)
    const [data, setData] = useState({
        menu: {},
        other: []
    })

    const deleteRecipie = (id) => {
        let data = menu.data;
        let index = menu.data.findIndex((obj) => obj.id === id)

        data.splice(index, 1)

        setMenu({
            ...menu,
            data: [...data]
        })
    }

    useEffect(() => {
        let recipieId = parseInt(id);
        let data = menu.data;
        let recipie = data.find((obj) => obj.id === recipieId)
        let filteredData = data.filter((obj) => (obj.id !== recipieId)).slice(0, 3)

        setData({
            menu: {...recipie},
            other: [...filteredData]
        });
    }, [menu])

    return (
        <div className={'flex  mx-24'}>
            <div className={'w-[70%] max-h-full'}>
                <div className={'w-full mt-8 -mb-8 flex justify-end'}>
                    <div className="flex justify-self-center items-center relative group">
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
                                        className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                        Edit
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'flex justify-center my-14'}>
                    <img className={'w-4/6'} src={data.menu.image} alt={data.menu.name}/>
                </div>
                <h1 className={'text-center font-bold text-2xl'}>{data.menu.name}</h1>
                <div className={'my-4'}>
                    <h2 className={'my-2 font-medium'}>Description:</h2>
                    <p>{data.menu.description}</p>
                </div>
                <div className={'my-4'}>
                    <h2 className={'my-2 font-medium'}>Method:</h2>
                    <p>{data.menu.method}</p>
                </div>
            </div>
            <div className={'w-px bg-gray-300 mx-2'}/>
            <div className={'w-[30%] max-h-full'}>
                <p className={'px-4 font-bold'}>Other Recipies</p>
                <div className={''}>
                    {
                        data.other.map((item) => (
                                <MenuCard
                                    key={item.id} {...item}
                                    onDelete={deleteRecipie}/>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}