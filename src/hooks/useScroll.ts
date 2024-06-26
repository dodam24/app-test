import { useEffect, useState } from "react";

export default function useScroll() {
    const [scrollY, setScrollY] = useState<number>(0);
    const [isDown, setIsDown] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            const moving = window.scrollY;
            setIsDown(scrollY < moving);
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollY]);

    return { scrollY, isDown };
}
