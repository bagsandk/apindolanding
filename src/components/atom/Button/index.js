import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
    text,
    color = 'blue',
    type,
    className,
    onClick,
}) {
    switch (type) {
        case "primary":
            color = "blue";
            break
        case "danger":
            color = "red";
            break
        case "secondary":
            color = "gray";
            break
        case "success":
            color = "green";
            break
        case "warning":
            color = "yellow";
            break
        case "white":
            color = "white";
            break
        default:
            color = "blue"
            break
    }
    let outline = '';
    // switch (props.outline) {
    //     case true:
    //         color = "blue";
    //         break
    //     default:
    //         color = "red";
    //         break
    // }

    return (
        <Link to="/more">
            <div className={className, "w-max from-" + color + "-600 to-" + color + "-400 justify-items-center align-middle rounded-md text-center text-white bg-gradient-to-b px-5 py-2"}>
                {text}
            </div>
        </Link>
    );
}
