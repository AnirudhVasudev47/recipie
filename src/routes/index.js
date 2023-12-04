import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import NotFound from "../layout/NotFound";
import Dashboard from "../screens/home/dashboard";
import SingleRecipie from "../screens/recipie/SingleRecipie";
import NewRecipie from "../screens/recipie/NewRecipie";
import EditRecipie from "../screens/recipie/EditRecipie";

const IndexRoute = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
                <Route element={<Dashboard/>} path={'dashboard'}/>
                <Route element={<SingleRecipie/>} path={'/recipie/:id'}/>
                <Route element={<NewRecipie/>} path={'/new'}/>
                <Route element={<EditRecipie/>} path={'/edit/:id'}/>
            <Route path={'*'} element={<NotFound/>}/>
        </Route>
    )
);

export default IndexRoute;