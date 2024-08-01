import { ChangeEvent, useState } from "react";

export function useInputHandler<T>(initialState: T) {
    const [values, setValues] = useState<T>(initialState);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const file = e.target.files?.[0];

        if (file) {
            setValues({ ...values, [name]: file });
        } else if (e.target.type === "tel") {
            setValues({ ...values, [name]: Number(value.replace(/[^0-9]/g, "")) });
        } else {
            setValues({ ...values, [name]: value });
        }
    };

    return { values, setValues, handleInputChange };
}
