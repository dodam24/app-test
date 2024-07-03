import { useEffect, useState } from "react";

interface Timer {
    seconds: number;
    running: boolean;
}

export const useTimer = (initialSeconds: number) => {
    const [timer, setTimer] = useState<Timer>({
        seconds: initialSeconds,
        running: false,
    });

    useEffect(() => {
        let interval: number;

        if (timer.running) {
            interval = setInterval(() => {
                setTimer((prevState) => ({
                    ...prevState,
                    seconds: prevState.seconds > 0 ? prevState.seconds - 1 : 0,
                }));
            }, 1000);
        }

        if (timer.seconds === 0) {
            setTimer((prevState) => ({
                ...prevState,
                running: false,
            }));
        }

        return () => clearInterval(interval);
    }, [timer.running, timer.seconds]);

    const startTimer = () => setTimer({ seconds: initialSeconds, running: true });
    const resetTimer = () => setTimer({ seconds: initialSeconds, running: false });

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `0${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
    };

    return {
        timer,
        startTimer,
        resetTimer,
        formatTime,
    };
};
