// MobileMenu.jsx
import { useState } from "react";
import { Link } from "react-router-dom"; // Ensure correct import for react-router-dom

const MobileMenu = () => {
    const [isActive, setIsActive] = useState({ status: false, key: "" });
    const [isSubActive, setSubIsActive] = useState({ status: false, key: "" });

    const handleClick = (key) => {
        setIsActive((prevState) =>
            prevState.key === key
                ? { status: false, key: "" }
                : { status: true, key }
        );
    };
    const handleSubClick = (key) => {
        // Handle second-level menu toggle
        setSubIsActive((prevState) =>
            prevState.key === key
                ? { status: false, key: "" }
                : { status: true, key }
        );
    };

    return (
        <>

        <ul className="navigation">
            <li className="">
                <Link to="/">Home</Link>
            </li>
            <li className="">
                <Link to="/products">Products</Link>
            </li>
            <li className="">
                <Link to="/about">About Us</Link>
            </li>
            <li className="">
                <Link to="/contact">Contact Us</Link>
            </li>
        </ul>

        </>
    );
};

export default MobileMenu;
