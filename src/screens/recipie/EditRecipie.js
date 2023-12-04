import FormComponent from "../../component/form";
import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {MenuContext} from "../../provider/MenuProvider";

export default function EditRecipie() {
    const {id} = useParams();
    const {menu} = useContext(MenuContext)
    const [data, setData] = useState({
        menu: {},
    })

    useEffect(() => {
        let recipieId = parseInt(id);
        let data = menu.data;
        let recipie = data.find((obj) => obj.id === recipieId)

        console.log('data: ', recipie)

        setData({
            menu: {...recipie}
        });
    }, [menu])

    return (
        <div>
            <FormComponent {...data.menu}/>
        </div>
    )
}