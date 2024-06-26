import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import EnabledButton from "@/components/button/EnabledButton";
import CustomInput from "@/components/input/CustomInput";
import LabelInput from "@/components/input/LabelInput";
import { login } from "@/apis/auth/login";
import { validatePassword } from "@/utils/inputVerify";
import SnsLogin from "@/pages/auth/login/SnsLogin";

import { Styles } from "@/style/Styles";

import { CheckIcon, CheckedIcon, LoginLogo } from "@/pages/auth/login/_images/loginImg";

const Login = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isPasswordInvalid, setIsPasswordInvalid] = useState<boolean>(false);

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        setPassword(value);
        setIsPasswordInvalid(!validatePassword(value));
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await login({ username, password });
            console.log(response);
        } catch (error) {
            setIsPasswordInvalid(true);
        }
    };

    return (
        <ReservationWrapper>
            <Form onSubmit={handleLogin}>
                <FormFieldSet>
                    <img className="login_logo" src={LoginLogo} alt="로그인 로고" />
                    <CustomInput
                        className="first_input"
                        type="text"
                        id="username"
                        name="username"
                        placeholder="아이디"
                        handleChange={handleUsernameChange}
                    />
                    <LabelInput
                        className="second_input"
                        placeholder="8~20자리 영문+숫자+특수문자 포함"
                        handleChange={handlePasswordChange}
                        showPasswordToggle
                        isInvalid={isPasswordInvalid}
                        maxLength={20}
                        errorMessage="아이디 또는 비밀번호를 다시 입력해주세요."
                    />
                </FormFieldSet>
                <EnabledButton className="custom_btn" title="로그인" disabled={!password} />
                <FormFieldOption>
                    <SaveIdWrapper>
                        <input type="checkbox" />
                        <label>자동로그인</label>
                    </SaveIdWrapper>
                    <FindOptionsWrapper>
                        <a href="">아이디 찾기</a>
                        <a href="">비밀번호 찾기</a>
                    </FindOptionsWrapper>
                </FormFieldOption>
                <DividerText>또는 간편로그인</DividerText>
                <SnsLogin />
                <RegisterWrapper>
                    <RegisterPrompt>아직 회원이 아니신가요?</RegisterPrompt>
                    <RegisterLink to={"/register"}>회원가입</RegisterLink>
                </RegisterWrapper>
            </Form>
        </ReservationWrapper>
    );
};

const ReservationWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 3rem;
    .custom_btn {
        position: static;
        left: 0;
        transform: translateX(0);
        width: 100%;
    }
`;

const Form = styled.form`
    width: 100%;
    padding: 0 1rem;
`;

const FormFieldSet = styled.fieldset`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .login_logo {
        width: 7rem;
        height: 4rem;
        flex-shrink: 0;
        margin-bottom: 1.9rem;
    }
    .first_input {
        margin-bottom: 0.2rem;
    }
    .second_input {
        height: 2.8rem;
    }
`;

const FormFieldOption = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 0.6rem;
`;

const SaveIdWrapper = styled.div`
    display: flex;
    gap: 0.3rem;
    align-items: center;

    input {
        width: 1rem;
        height: 1rem;
        border-radius: 0.2rem;
        background: url(${CheckIcon}) no-repeat center;
        background-size: 1rem 1rem;
        appearance: none;
        margin: 0;

        &:checked {
            background: url(${CheckedIcon}) no-repeat center;
            background-size: 1rem 1rem;
        }
    }

    label {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
    }
`;

const FindOptionsWrapper = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;

    a {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};

        text-decoration: none;

        &::before {
            content: "|";
            margin-right: 0.5rem;
            color: ${Styles.colors.natural60};
        }

        &:first-child::before {
            content: none;
        }
    }
`;

const DividerText = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-size: ${Styles.font.size.fontsize14};
    color: ${Styles.colors.natural80};
    margin: 2rem 0 0.6rem;
    padding: 0.6rem 0;
    text-align: center;
    font-weight: ${Styles.font.weight.regular};

    &::before,
    &::after {
        content: "";
        flex: 1;
        width: 5.15rem;
        height: 0.05rem;
        background: ${Styles.colors.natural30};
    }
    &::before {
        margin-right: 0.8rem;
    }
    &::after {
        margin-left: 0.8rem;
    }
`;

const RegisterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2.3rem;
    gap: 0.3rem;
`;

const RegisterPrompt = styled.span`
    color: var(--Natural-N40, #a3a3a8);
    font-family: Pretendard;
    font-size: ${Styles.font.size.fontsize14};
    font-weight: ${Styles.font.weight.regular};
`;

const RegisterLink = styled(Link)`
    color: ${Styles.colors.primary100};
    font-family: Pretendard;
    font-size: ${Styles.font.size.fontsize14};
    font-weight: ${Styles.font.weight.medium};

    text-underline-position: under;
`;

export default Login;
