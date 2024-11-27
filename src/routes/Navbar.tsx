import React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { Button } from "../components/button/Button";

export const Navbar = () => {
    const [click, setClick] = React.useState(false);
    const [button, setButton] = React.useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= (960)) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    React.useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <React.Fragment>
            <nav className="navbar">
                <section className="nav__container">
                    <Link 
                        to={"/"}
                        className="nav__logo"
                        onClick={closeMobileMenu}
                    >
                        TRVL
                        <i className="fab fa-typeo3" />
                    </Link>
                    <aside className="menu__icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </aside>
                    <ul className={click ? "nav__menu active" : "nav__menu"}>
                        <li className="nav__item">
                            <Link 
                                to={"/"}
                                className="nav__links"
                                onClick={closeMobileMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link 
                                to={"/services"}
                                className="nav__links"
                                onClick={closeMobileMenu}
                            >
                                Services
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link 
                                to={"/products"}
                                className="nav__links"
                                onClick={closeMobileMenu}
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to={"/signup"}
                                className="nav__links-mobile"
                                onClick={closeMobileMenu}
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {
                        button && 
                        <Button 
                            buttonStyle="btn__outline"
                            buttonSize="btn__large"
                        >
                            SIGN UP
                        </Button>
                    }
                </section>
            </nav>
            <Outlet />
        </React.Fragment>
    );
};


