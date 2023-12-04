import React, {useContext, useEffect, useState} from "react";
import MenuCard from "../../component/MenuCard";
import {MenuContext} from "../../provider/MenuProvider";

export default function Dashboard() {
    const {menu, setMenu} = useContext(MenuContext)
    const [dishes, setDishes] = useState({
        data: []
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
        setDishes({
            data: [...menu.data]
        })
    }, [menu])
    return (
        <div className={'mx-4 lg:mx-20 md:mx-12 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'}>
            {
                dishes.data.map((item) => (
                        <MenuCard
                            key={item.id} {...item}
                            onDelete={deleteRecipie}/>
                    )
                )
            }
        </div>
    )
}