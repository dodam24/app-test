import { useState } from "react";
import { validatePassword, validateId } from "@/utils/inputVerify";
import { IValidationValues } from "@/interface/auth/register/register";

export function useInputHandler<
    T extends {
        passwordVerify?: string;
        password?: string;
        username?: string;
        name?: string;
        cellphone_number?: string;
        verificationCode?: string;
        email?: string;
        email_id?: string;
        selectDomain?: string;
        company_id?: string;
        user_type?: string;
        required_terms_accepted?: boolean;
        selected_terms_accepted_list?: string[];
    },
    //얘를 Interface 불러와 쓰고싶은데 그럴 경우에 제네릭 사용이 아닌 고정 타입으로 써야하는건지 확인하고 고치기
>(initialState: T) {
    const [values, setValues] = useState<T>(initialState);
    const [format, setFormat] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [validations, setValidations] = useState<IValidationValues>({
        passwordMatch: false,
        passwordValid: false,
        usernameValid: false,
        idChecked: false,
        nameValid: false,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === "cellphone_number" || name === "phone") {
            if (value.length > 13) return;

            const cellphone_number = value
                .replace(/[^0-9]/g, "")
                .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/, "$1-$2-$3")
                .replace(/-{1,2}$/, "");

            setFormat(cellphone_number);

            setValues({
                ...values,
                [name]: value.replace(/-/g, ""),
            });
            return;
        }

        setValues((prevValues) => ({ ...prevValues, [name]: value }));

        if (name === "password") {
            const isPasswordValid = validatePassword(value);
            setValidations((prevValidations) => ({
                ...prevValidations,
                passwordMatch: isPasswordValid && values.passwordVerify === value,
                passwordValid: isPasswordValid,
            }));

            if (!isPasswordValid) {
                setError("비밀번호는 8~20자리 영문+숫자+특수문자 포함이어야 합니다.");
                return;
            } else {
                setError("");
            }
        } else if (name === "passwordVerify") {
            setValidations((prevValidations) => ({
                ...prevValidations,
                passwordMatch: values.password === value,
            }));
        }

        if (name === "username") {
            const isIdValid = validateId(value);
            setValidations((prevValidations) => ({
                ...prevValidations,
                usernameValid: isIdValid,
                idChecked: false,
            }));
        }

        if (name === "name") {
            setValidations((prevValidations) => ({
                ...prevValidations,
                nameValid: value.length >= 1,
            }));
        }
    };

    return {
        values,
        format,
        error,
        handleInputChange,
        setValues,
        setError,
        validations,
        setValidations,
    };
}
