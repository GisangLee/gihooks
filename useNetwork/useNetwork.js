import { useState, useEffect } from "react";

export const useNetwork = (onChange) => {

    const [status, setStatus] = useState(navigator.onLine);
        
    const handleChange = () => {
        
        if(typeof(onChange) !== "function" || !onChange){
            onChange(navigator.onLine);
        }
        
        setStatus(navigator.onLine);
    };

    useEffect(() => {
        // componentDidMount
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        
        // componentWillUnMount
        return () => {
            window.removeEvenetListener("online", handleChange);
            window.removeEvenetListener("offline", handleChange)
        };
        
    }, []);

    return status;
};
