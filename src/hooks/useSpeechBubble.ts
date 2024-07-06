import { useState } from "react";

export default function useSpeechBubble() {
    const [isClose, setIsClose] = useState(false);
    const closeSpeechBubble = () => setIsClose(true);

    return { isClose, closeSpeechBubble };
}
