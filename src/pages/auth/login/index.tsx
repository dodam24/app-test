import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Styles } from "../../../style/Styles";

import EnabledButton from "@/components/button/EnabledButton";
import CustomInput from "@/components/input/CustomInput";
import LabelInput from "@/components/input/LabelInput";
import SnsLogin from "./snsLogin";
import { login } from "@/apis/auth/login";
import { validatePassword } from "@/utils/inputVerify";

import { CheckIcon, CheckedIcon, LoginLogo } from "./loginImg";

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
    padding-top: 60px;
    .custom_btn {
        position: static;
    }
`;

const Form = styled.form`
    width: 100%;
    padding: 0 20px;
`;

const FormFieldSet = styled.fieldset`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .login_logo {
        width: 140px;
        height: 80px;
        flex-shrink: 0;
        margin-bottom: 38px;
    }
    .first_input {
        margin-bottom: 0.6rem;
    }
    .second_input {
        height: 2.8rem;
    }
`;

const FormFieldOption = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
`;

const SaveIdWrapper = styled.div`
    display: flex;
    gap: 6px;
    align-items: center;

    input {
        width: 20px;
        height: 20px;
        border-radius: 4px;
        background: url(${CheckIcon}) no-repeat center;
        background-size: 20px 20px;
        appearance: none;
        margin: 0;

        &:checked {
            background: url(${CheckedIcon}) no-repeat center;
            background-size: 20px 20px;
        }
    }

    label {
        color: ${Styles.colors.natural60};
        font-family: Pretendard;
        font-size: ${Styles.font.size.fontsize14};
        font-weight: 400;
        line-height: normal;
    }
`;

const FindOptionsWrapper = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;

    a {
        color: ${Styles.colors.natural60};
        font-family: Pretendard;
        font-size: ${Styles.font.size.fontsize14};
        font-weight: 400;
        line-height: normal;
        text-decoration: none;

        &::before {
            content: "|";
            margin-right: 10px;
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
    margin: 40px 0 12px;
    padding: 12px 0;
    text-align: center;
    font-family: Pretendard;
    font-weight: 400;
    line-height: normal;

    &::before,
    &::after {
        content: "";
        flex: 1;
        width: 103px;
        height: 1px;
        background: ${Styles.colors.natural30};
    }
    &::before {
        margin-right: 16px;
    }
    &::after {
        margin-left: 16px;
    }
`;

const RegisterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 46px;
    gap: 6px;
`;

const RegisterPrompt = styled.span`
    color: var(--Natural-N40, #a3a3a8);
    font-family: Pretendard;
    font-size: ${Styles.font.size.fontsize14};
    font-weight: 400;
    line-height: normal;
`;

const RegisterLink = styled(Link)`
    color: ${Styles.colors.primary100};
    font-family: Pretendard;
    font-size: ${Styles.font.size.fontsize14};
    font-weight: 500;
    line-height: normal;
    text-underline-position: under;
`;

export default Login;
