import React, {useContext, useEffect} from "react";
import {Navigate, Outlet, useLocation, useNavigate} from "react-router-dom";
import {MenuContext} from "../provider/MenuProvider";
import menuList from "../data.json"

export default function RootLayout() {
    const navigate = useNavigate();
    const location = useLocation()
    const {menu, setMenu} = useContext(MenuContext)

    useEffect(() => {
        if (!menu.data?.length) {
            setMenu({
                data: [...menuList]
            })
        }
    }, [])

    return (
        <div className={'max-h-screen'}>
            <nav className="flex bg-blue-400 p-4 lg:px-24 md:px-12 fixed w-full">
                <div className="container mx-auto">
                    <div onClick={() => navigate('/')} className="flex w-fit items-center cursor-pointer ">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <img
                                className="h-12 w-12 rounded-full"
                                src="https://st2.depositphotos.com/3682225/7536/v/450/depositphotos_75361535-stock-illustration-saucepan-food-menu-kitchen-soup.jpg"
                                alt="Logo"
                            />
                        </div>
                        <p className={'ml-2 font-medium text-white'}>Recipie List</p>
                    </div>
                </div>
                {location.pathname === '/dashboard' ? <button
                    className={'bg-white w-48 rounded-xl'}
                    onClick={() => navigate('/new')}>
                    <span className={'font-medium'}>Add new</span>
                </button> : <div/>}
            </nav>
            <div className={'max-h-full pt-20'}>
                {(location.pathname === '/') ? <Navigate to={'dashboard'} replace/> : <Outlet/>}
            </div>
        </div>
    )
}