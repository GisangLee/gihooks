import { useEffect, useState } from "react";

export const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);

    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    };

    // title 변수 값이 변경될 때마다, updateTitle 함수 호출
    // componentDidMount, componentWillUpdate
    useEffect(updateTitle, [title]);

    return setTitle;
};
