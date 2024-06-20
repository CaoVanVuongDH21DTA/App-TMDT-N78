import React, {useEffect,  useState} from "react";
import '../../../../styles/Store/MainStore/Discover/Discover.css';

import Discover_section1 from "./Discover_section-1";
import Discover_section2 from "./Discover_section-2";

const Discover = () =>{
    const [showSection2, setShowSection2] = useState(false);
    const [section2Displayed, setSection2Displayed] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.querySelector(".section-1");
            const section1Height = section1?.scrollHeight;
            const windowHeight = window.innerHeight;
            const scrollPosition = window.scrollY;

            if (!section2Displayed && section1Height && scrollPosition + windowHeight >= section1Height) {
                setIsLoading(true);
                setTimeout(() => {
                    setShowSection2(true);
                    setSection2Displayed(true);
                    setIsLoading(false);
                }, 1500); // Timeout set to 600 milliseconds (.6 seconds)
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [section2Displayed]);


    return (
        <div className="discover">
            <Discover_section1/>

            {isLoading && (
                <div className="loading">
                    <div className="loading-spinner"></div>
                    <p>Loading</p>
                </div>
            )}

            {/*hiển thị section-2*/}
            {showSection2 && (
                <Discover_section2/>
            )}
        </div>
    );
};

export default Discover;