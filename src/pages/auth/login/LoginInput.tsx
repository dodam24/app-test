import React, { FormEvent } from "react";
import styled from "styled-components";

import OptionInput from "@/components/input/OptionInput";
import Button from "@/components/button/Button";

import { ILoginValues } from "@/interface/auth/signIn/signIn";
import { login } from "@/apis/auth/login";
import { validatePassword, validateId } from "@/utils/inputVerify";
import { useInputHandler } from "@/utils/baseVerify";

import { LoginLogo } from "@/pages/auth/login/_images/loginImg";

const LoginInput = () => {
    const { values, error, handleInputChange, setError } = useInputHandler<ILoginValues>({
        username: "",
        password: "",
    });

    const handleLogin = async (e: FormEvent | React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!validateId(values.username)) {
            setError("아이디는 영문자와 숫자를 포함하여 6자 이상이어야 합니다.");
            return;
        }

        if (!validatePassword(values.password)) {
            setError("8~20자리 영문+숫자+특수문자 모두 포함하여 입력해주세요.");
            return;
        }

        try {
            const response = await login({ username: values.username, password: values.password });
            console.log(response);
        } catch (error) {
            setError("아이디 또는 비밀번호를 다시 입력해주세요.");
        }
    };

    const isPasswordValid = validatePassword(values.password);
    const isUsernameValid = validateId(values.username);

    return (
        <StyedLoginInputWrapper>
            <img className="login_logo" src={LoginLogo} alt="로그인 로고" />
            <StyledInputContainer onSubmit={handleLogin}>
                <OptionInput
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleInputChange}
                    placeholder="아이디"
                />
                <OptionInput
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleInputChange}
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
            </StyledInputContainer>

            <Button
                type="submit"
                onClick={handleLogin}
                disabled={!isPasswordValid || !isUsernameValid}
            >
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

const StyledInputContainer = styled.form`
    // form 요소로 수정
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.2rem;
`;
