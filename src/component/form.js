// FormComponent.js
import React, {useContext, useEffect, useState} from 'react';
import {MenuContext} from "../provider/MenuProvider";
import {useNavigate} from "react-router-dom";

export default function FormComponent({id = 0, name = '', description = '', method = '', image = ''}) {
    const {menu, setMenu} = useContext(MenuContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: 0,
        name: '',
        description: '',
        method: '',
        image: '',
    });

    useEffect(() => {
        if (id !== 0) {
            setFormData({
                ...formData,
                id: id,
                name: name,
                description: description,
                method: method,
                image: image,
            })
        }
    }, [id])

    useEffect(() => console.log(formData), [formData])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prevData) => ({
                    ...prevData,
                    image: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prevData) => ({
                    ...prevData,
                    image: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let recipieId = id
        let data = menu.data;

        if (recipieId === 0) {
            recipieId = data.length + 1;
            data.push({
                id: recipieId,
                name: formData.name,
                description: formData.description,
                method: formData.method,
                image: formData.image,
            })
        } else {
            const i = data.findIndex(_element => _element.id === id);
            if (i > -1) data[i] = {
                id: recipieId,
                name: formData.name,
                description: formData.description,
                method: formData.method,
                image: formData.image,
            };
        }
        setMenu({
            data: [
                ...data,
            ]
        })

        navigate(-1)

    };

    return (
        <div className="max-w-full mx-16 mt-8 p-6 bg-gray-100 rounded-md shadow-md"
             onDragOver={(e) => e.preventDefault()}
             onDrop={handleDrop}>
            <h2 className="text-2xl font-semibold mb-4">{id === 0 ? 'Add New Recipie' : 'Edit Recipie'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-600 text-sm font-semibold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-600 text-sm font-semibold mb-2">
                        Description
                    </label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="longText" className="block text-gray-600 text-sm font-semibold mb-2">
                        Method
                    </label>
                    <textarea
                        id="method"
                        name="method"
                        value={formData.method}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        rows="4"
                        required
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-600 text-sm font-semibold mb-2">
                        Drag & Drop Image (or click to select)
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleImageChange}
                        className="hidden" // Hide the default file input
                    />
                    <div
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 cursor-pointer"
                        onClick={() => document.getElementById('image').click()}
                    >
                        {formData.image ? (
                            <p>{formData.image.name ?? formData.image}</p>
                        ) : (
                            <p className="text-gray-500">Click here or drag & drop an image</p>
                        )}
                    </div>
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};
