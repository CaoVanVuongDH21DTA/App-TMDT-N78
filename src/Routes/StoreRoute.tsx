import Browse from "../components/Store/MainStore/Browse/Browse";
import News from "../components/Store/MainStore/News/News";
import TopSeller from "../components/Store/MainStore/Discover/TopSeller";
import MostPlayed from "../components/Store/MainStore/Discover/MostPlayed";
import TopUpcommingWishlisted from "../components/Store/MainStore/Discover/TopUpconmingWishlisted";
import React from "react";
import Discover from "../components/Store/MainStore/Discover/Discover";

export const StoreRoute =[
    // Store Page
    {
        path:"/",
        element:<Discover/>
    },
    {
        path:"/browse",
        element:<Browse/>
    },
    {
        path:"/news",
        element:<News/>
    },
    {
        path:"/topSeller",
        element:<TopSeller/>
    },
    {
        path:"/mostPlayed",
        element:<MostPlayed/>
    },
    {
        path:"/topUpcommingWishlisted",
        element:<TopUpcommingWishlisted/>
    },
]