import { useState } from "react";
import DatePicker from "react-mobile-datepicker";
import "react-mobile-datepicker-ts/dist/main.css";

const NewTimePicker = () => {
    const [time, setTime] = useState<Date>(new Date());
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const handleSelect = (time: Date) => {
        setTime(time);
        setIsOpen(false);
    };

    const dateConfig = {
        hour: {
            format: "hh",
            step: 1,
        },
        minute: {
            format: "mm",
            step: 1,
        },
        second: {
            format: "ss",
            step: 1,
        },
    };

    return (
        <div>
            <DatePicker
                value={time}
                isOpen={isOpen}
                theme="ios"
                showHeader={false}
                showFooter={false}
                dateConfig={dateConfig}
                isPopup={false}
            />
        </div>
    );
};

export default NewTimePicker;

// const StyledDatePicker = styled(DatePicker)`
//     .datepicker.ios .datepicker-content {
//     }
// `;
