import React from "react";
import PostGame from "../components/Admin/Post/PostGame";
import UpdateGame from "../components/Admin/Update/UpdateGame";
import UpdateUser from "../components/Admin/Update/UpdateUser";
import ListUser from "../components/Admin/List/ListUser";
import ProfileAdmin from "../components/Admin/ProfileAdmin";
import ListGame from "../components/Admin/List/ListGame";
import PostUser from "../components/Admin/Post/PostUser";

export const AdminRoutes = [
    {
        path:"/",
        element:<ProfileAdmin/>
    },
    {
        path:"/list-user",
        element:<ListUser/>
    },
    {
        path:"/list-game",
        element:<ListGame/>
    },
    {
        path:"/post-game",
        element:<PostGame/>
    },
    {
        path:"/post-user",
        element:<PostUser/>
    },
    {
        path:"/update-game/:gameId",
        element:<UpdateGame/>
    },
    {
        path:"/update-user/:userId",
        element:<UpdateUser/>
    },
]