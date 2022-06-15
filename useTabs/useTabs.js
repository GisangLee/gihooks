import { useState } from "react";

export const useTabs = (initialTab, allTabs) => {

    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }
    const [currentIdx, setCurrentIdx] = useState(initialTab);

    return {
        currentItem: allTabs[currentIdx],
        changeItem: setCurrentIdx,
    };
}