import React, { useState } from "react";
import Hero from "../components/heroSection/Hero";
import { homeObjOne } from "../components/infoSection/data";
import Info from "../components/infoSection/Info";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            <Info {...homeObjOne} />
        </>
    );
};

export default Home;
