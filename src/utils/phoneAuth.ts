import { ChangeEvent, useState } from "react";

export function useInputHandler<T>(initialState: T) {
    const [values, setValues] = useState<T>(initialState);
    const [format, setFormat] = useState<string>("");

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement>,
        handlePhoneChange?: (phone: string) => void,
    ) => {
        const { name, value } = e.target;

        if (name === "phone") {
            if (value.length > 13) return;

            const formattedPhone = value
                .replace(/[^0-9]/g, "")
                .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/, "$1-$2-$3")
                .replace(/-{1,2}$/, "");

            setFormat(formattedPhone);

            const cleanedPhone = value.replace(/-/g, "");
            setValues({
                ...values,
                [name]: cleanedPhone,
            });

            if (handlePhoneChange) {
                handlePhoneChange(cleanedPhone);
            }
        } else {
            setValues({ ...values, [name]: value });
        }
    };

    return { values, format, handleInputChange };
}
