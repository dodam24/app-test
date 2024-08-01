import { useState } from "react";
import DatePicker from "react-mobile-datepicker-ts";
import "react-mobile-datepicker-ts/dist/main.css";

interface TimePickerProps {
    isCheckIn: boolean;
}

const TimePicker = ({ isCheckIn }: TimePickerProps) => {
    const [time, setTime] = useState<Date>(new Date());
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const now = new Date();
    const minTime = isCheckIn ? new Date(now.getTime() - 10 * 60000) : undefined;
    const maxTime = isCheckIn ? new Date(now.getTime() + 10 * 60000) : undefined;

    const handleSelect = (e: TouchEvent, nextTime: typeof time) => {
        e.stopPropagation();
        setTime(nextTime);
        setIsOpen(false);
    };
    // console.log(time);

    return (
        <DatePicker
            value={time}
            onSelect={handleSelect}
            isOpen={isOpen}
            theme="ios"
            showHeader={false}
            isPopup={false}
            min={minTime}
            max={maxTime}
            dateConfig={[
                {
                    type: "hour",
                    format: "hh",
                    caption: "Hour",
                    step: 1,
                },
                {
                    type: "minute",
                    format: "mm",
                    caption: "Min",
                    step: 1,
                },
                {
                    type: "second",
                    format: "ss",
                    caption: "Sec",
                    step: 1,
                },
            ]}
        />
    );
};

export default TimePicker;
