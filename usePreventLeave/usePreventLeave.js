
export const usePreventLeave = () => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = "";
    };

    const protect = () => window.addEventListener("beforeunload", listener);
    const unprotect = () => window.removeEventListener("beforeunload", listener);

    return { protect, unprotect };
};
