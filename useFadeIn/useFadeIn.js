import { useEffect, useRef } from "react";

export const useFadeIn = (options) => {
    
    if (typeof(options) !== "obejct" || !options){
        return;
    }

    const { property="none", duration=1, delay=0, timing="ease-in-out" } = options;

    const element = useRef();

    useEffect(() => {
        
        // componentDidMount
        if(element.current){
        const { current } = element;
        current.style.transition = `${property} opacity ${duration}s ${timing} ${delay}s`;
        current.style.opacity = 1;
        }

    }, []);

    return { ref: element, style: { opacity:0 } };
};
  
