import { useState } from "react";

export function useInputHandler<T>(initialState: T) {
    const [values, setValues] = useState<T>(initialState);
    const [format, setFormat] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === "user_phone" || name === "phone") {
            if (value.length > 13) return;

            const phone = value
                .replace(/[^0-9]/g, "")
                .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/, "$1-$2-$3")
                .replace(/-{1,2}$/, "");

            setFormat(phone);

            return setValues({
                ...values,
                [name]: value.replace(/-/g, ""),
            });
        }

        setValues({ ...values, [name]: value });
    };

    return { values, format, handleInputChange };
}
