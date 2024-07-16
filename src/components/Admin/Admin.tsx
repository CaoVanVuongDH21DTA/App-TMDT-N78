import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header_AdminPage} from "./Header_AdminPage";
import {Route, Routes} from "react-router-dom";
import {AdminRoutes} from "../../Routes/AdminRoutes";

export function Admin () {
    return (
        <>
            <Header_AdminPage/>
            <Routes>
                {AdminRoutes.map((item, index) => (
                    <Route key={index} path={item.path} element={item.element}/>
                ))}
            </Routes>
        </>
    );
};