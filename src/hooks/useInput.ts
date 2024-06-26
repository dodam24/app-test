import { useState } from "react";

interface UseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const useInput = ({ ...rest }: UseInputProps) => {
    const [type, setType] = useState<string>(rest.type || "password");
    const handleTypeChange = () => {
        setType((prev) => (prev === "password" ? "text" : "password"));
    };
    const handleDeleteValue = () => {
        if (rest.onChange) {
            rest.onChange({
                target: { name: rest.name, value: "" },
            } as React.ChangeEvent<HTMLInputElement>);
        }
    };

    return { type, handleTypeChange, handleDeleteValue };
};

export default useInput;
