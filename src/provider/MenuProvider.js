import React, {createContext, useState} from 'react';

export const MenuContext = createContext({
    data: [],
});

export const MenuProvider = ({children}) => {
    const [menu, setMenu] = useState({
        data: [],
    });

    return (
        <MenuContext.Provider value={{menu, setMenu}}>
            {children}
        </MenuContext.Provider>
    );
};