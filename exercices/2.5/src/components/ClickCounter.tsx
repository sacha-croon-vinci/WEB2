import { useState } from "react";
import "./ClickCounter.css";

interface ClickCounterProps {
    title: string;
    on10ClicksAction?: string;
    onMouseOver?: string;
    }

const ClickCounter = ({
    title,
    on10ClicksAction ,
    onMouseOver,
}: ClickCounterProps) => {

    //state -etats et changements
    const [count, setCount] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    return(
        <div className="card">
            <h3>{title}</h3>
            {isHovered ? <p>{onMouseOver}</p> : null}
            <button
             onClick={() => setCount((count) => count+1)}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
            >
            count is {count}
            </button>
            
            {count >= 10 ? <p>{on10ClicksAction}</p>: null}
        </div>

    )

}

export default ClickCounter;