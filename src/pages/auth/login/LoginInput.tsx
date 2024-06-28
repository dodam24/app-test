import React, { useState } from "react";
import styled from "styled-components";

import { login } from "@/apis/auth/login";
import { validatePassword } from "@/utils/inputVerify";

import OptionInput from "@/components/input/OptionInput";
import Button from "@/components/button/Button";

import { LoginLogo } from "@/pages/auth/login/_images/loginImg";

const LoginInput = () => {
    const [value, setValue] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState<string>("");

    const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value: inputValue } = e.target;

        setValue((prev) => ({
            ...prev,
            [name]: inputValue,
        }));

        if (name === "password") {
            if (!validatePassword(inputValue)) {
                setError("비밀번호는 8~20자리 영문+숫자+특수문자 포함이어야 합니다.");
            } else {
                setError("");
            }
        }
    };

    const handleLogin = async (e: React.FormEvent | React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!validatePassword(value.password)) {
            setError("8~20자리 영문+숫자+특수문자 모두 포함하여 입력해주세요.");
            return;
        }

        try {
            const response = await login({ username: value.username, password: value.password });
            console.log(response);
        } catch (error) {
            setError("아이디 또는 비밀번호를 다시 입력해주세요.");
        }
    };

    const isPasswordValid = validatePassword(value.password);

    return (
        <StyedLoginInputWrapper>
            <img className="login_logo" src={LoginLogo} alt="로그인 로고" />
            <FormFieldSet onSubmit={handleLogin}>
                <OptionInput
                    type="text"
                    name="username"
                    value={value.username}
                    onChange={handle}
                    placeholder="아이디"
                />
                <OptionInput
                    type="password"
                    name="password"
                    value={value.password}
                    onChange={handle}
                    placeholder="8~20자리 영문+숫자+특수문자 포함"
                    maxLength={20}
                    options={{
                        buttonOption: {
                            passwordOption: true,
                        },
                        error: {
                            errorStatus: !!error,
                            errorMessage: error,
                        },
                    }}
                />
            </FormFieldSet>

            <Button type="submit" onClick={handleLogin} disabled={!isPasswordValid}>
                로그인
            </Button>
        </StyedLoginInputWrapper>
    );
};

export default LoginInput;

const StyedLoginInputWrapper = styled.div`
    text-align: center;
    .login_logo {
        width: 7rem;
        height: 4rem;
        flex-shrink: 0;
        margin-bottom: 1.9rem;
    }
`;

const FormFieldSet = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.2rem;
`;
