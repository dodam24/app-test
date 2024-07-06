import { useState } from "react";

export interface DateOverlayState {
    isActive: boolean;
    isStartDate: boolean;
    isEndDate: boolean;
    startDate?: string;
    endDate?: string;
}

const useDateOverlay = () => {
    const [overlayState, setOverlayState] = useState<DateOverlayState>({
        isActive: false,
        isStartDate: false,
        isEndDate: false,
    });
    const hideOverlay = () => setOverlayState({ ...overlayState, isActive: false });
    return { overlayState, setOverlayState, hideOverlay };
};

export default useDateOverlay;
