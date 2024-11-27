import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
const STYLES = ["btn__primary", "btn__outline", "btn__test"];
const SIZES = ["btn__medium", "btn__large"];

type BUT = {
    children: React.ReactNode,
    type?: "submit" | "reset" | "button",
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    buttonStyle: string,
    buttonSize: string
};

export const Button = ({  
    children, type, onClick,
    buttonStyle, buttonSize
}: BUT) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];
    
    const checkButtonSize = SIZES.includes(buttonSize)
        ? buttonSize
        : SIZES[0];
    
    return (
        <Link 
            className="btn__mobile"
            to={"/signup"}
        >
            <button
                className={`btn 
                        ${checkButtonStyle} 
                        ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                { children }
            </button>
        </Link>
    );
};


