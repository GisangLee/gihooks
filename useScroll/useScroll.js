import { useState, useEffect } from "react";

export const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0
    });

    const onScroll = () => {
        setState({
            x: window.scrollX,
            y: window.scrollY
        });
    };


    useEffect(() => {
        // componentDidMount
        window.addEventListener("scroll", onScroll);

        // componentWillUnMount
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return state;
};

