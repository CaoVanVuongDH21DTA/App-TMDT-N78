import DistributeOnEpicGameStore from "../components/Distribute/DistributeOnEpicGameStore/DistributeOnEpicGameStore";
import DeveloperForums from "../components/Distribute/DeveloperForums";
import React from "react";

export const DistributeRoutes = [
    {
        path:"/",
        element:<DistributeOnEpicGameStore/>
    },
    {
        path:"/developerForums",
        element:<DeveloperForums/>
    },
]