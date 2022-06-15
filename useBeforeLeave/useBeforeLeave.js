import { useEffect } from "react";

export const useBeforeLeave = (onBefore) => {
  
    if(typeof(onBefore) !== "function"){	
        return;
    };

    const handle = (event) => {
        const { clientY } = event;
        
        if (clientY <= 0) {
        onBefore();
        }
    };

    useEffect(() => {
        //componentDidMount
        document.addEventListener("mousemove", handle);
        
        // componentWillUnMount
        return () => document.removeEventListener("mousemove", handle);;
        
        // [] is componentWillUpdate
    }, []);
};

