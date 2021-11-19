import {useEffect, useState} from "react";

const Message = () => {
    const [coords, setCoords] = useState({x: 0, y: 0});

    const mouseMove = (e: any) => {
        const coords = {x: e.x, y: e.y};
        setCoords(coords);
    }

    useEffect(() => {
        console.log('Component Mounted');
        window.addEventListener('mousemove', mouseMove);
        return () => {
            console.log('Component UnMounted');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);

    return (
        <div>
            <h1>You are great!!</h1>
            <p>x: {coords.x} - y:{coords.y}</p>
        </div>
    );
};

export default Message;
