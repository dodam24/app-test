import { useState } from "react";

const useOverlay = () => {
    const [isActive, setIsActive] = useState(false);
    const hideOverlay = () => setIsActive(false);
    return { isActive, setIsActive, hideOverlay };
};

export default useOverlay;
