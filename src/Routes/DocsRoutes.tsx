import React from "react";

import E_Dev_Res from "../components/Distribute/Documentation/Main-Docs/E_Dev_Res";
import E_GameStore from "../components/Distribute/Documentation/Main-Docs/E_GameStore";
import Dev_Portal from "../components/Distribute/Documentation/Main-Docs/Dev_Portal";
import E_OS from "../components/Distribute/Documentation/Main-Docs/E_OS";
import Game_Services from "../components/Distribute/Documentation/Main-Docs/Game_Services";
import E_Account_Services from "../components/Distribute/Documentation/Main-Docs/E_Account_Services";
import E_API_R from "../components/Distribute/Documentation/Main-Docs/E_API_R";
import E_Web_API_R from "../components/Distribute/Documentation/Main-Docs/E_Web_API_R";
import E_Kid_WS from "../components/Distribute/Documentation/Main-Docs/E_Kid_WS";

export const DocsRoutes = [
    {
        path:"/",
        element:<E_Dev_Res/>
    },
    {
        path:"/epic-game-store",
        element:<E_GameStore/>
    },
    {
        path:"/dev_portal",
        element:<Dev_Portal/>
    },
    {
        path: "/epic-online-services",
        element: <E_OS/>
    },
    {
        path: "/game-services",
        element: <Game_Services/>
    },
    {
        path: "/epic-account-services",
        element: <E_Account_Services/>
    },
    {
        path:"/api-ref",
        element:<E_API_R/>
    },
    {
        path:"/web-api-ref",
        element:<E_Web_API_R/>
    },
    {
        path:"/kids-web-services",
        element:<E_Kid_WS/>
    },
]