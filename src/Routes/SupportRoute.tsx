import FAQ from "../components/Support/FAQ";
import About from "../components/Support/About";
import React from "react";
import Mid from "../components/Support/Mid";
import Report from "../components/Support/Report";
import Contact from "../components/Support/Contact";

export const SupportRoute=[
    {
        path:"/support",
        element:<Mid/>
    },
    {
        path:"/support/faq",
        element:<FAQ/>
    },
    {
        path:"/support/about",
        element:<About/>
    },
    {
        path:"/support/report",
        element:<Report/>
    },
    {
        path:"/support/contact",
        element:<Contact/>
    },
]