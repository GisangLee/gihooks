import { useRef } from "react";

export const useFullScreen = (callback) => {
    const element = useRef();

    const runCb = (isFull) => {
        if (callback && typeof(callback) === "function"){
            callback(isFull);
        }
    };

    const triggerFullScreen = () => {
        if (element.current){
            if(element.current.requestFullScreen){
                element.current.requestFullScreen();
            } else if (element.current.mozRequestFullScreen){
                element.current.mozRequestFullScreen();
            } else if (element.current.webkitRequestFullScreen){
                element.current.webkitRequestFullScreen();
            } else if (element.current.msRequestFullScreen){
                element.current.msRequestFullScreen();
            }

            runCb(true);
        }

    };

    const exitFullScreen = () => {
        document.exitFullscreen();

        if(document.exitFullscreen){
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen){
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullScreen){
            document.webkitExitFullScreen();
        } else if (document.msExitFullScreen){
            document.msExitFullScreen();
        }

        runCb(false);
    };


    return { element, triggerFullScreen, exitFullScreen };

};

