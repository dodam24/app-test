import { useState, ChangeEvent } from "react";
import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import LabelInput from "@/components/input/LabelInput";
import ButtonInput from "@/components/input/ButtonInput";
import EnabledButton from "@/components/button/EnabledButton";
import TimerInput from "@/components/input/TimerInput";

import { registerIdverify } from "@/apis/auth/register";
import { validateId } from "@/utils/inputVerify";
import ConsentComponent from "@/pages/auth/register/ConsentComponent";
import OwnerRegisterEmail from "@/pages/auth/register/option/OwnerRegisterEmail";

import { Styles } from "@/style/Styles";

const OwnerRegister = () => {
    const [username, setUsername] = useState("");
    const [isUsernameValid, setIsUsernameValid] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [showPasswordError, setShowPasswordError] = useState(false);

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setUsername(value);
        setIsUsernameValid(validateId(value));
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        validatePasswordMatch(e.target.value, passwordVerify);
    };

    const handlePasswordVerifyChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordVerify(e.target.value);
        validatePasswordMatch(password, e.target.value);
        setShowPasswordError(true);
    };

    const validatePasswordMatch = (pw1: string, pw2: string) => {
        setPasswordsMatch(pw1 === pw2);
    };

    const handleIdValue = async (username: string) => {
        try {
            const response = await registerIdverify({ username });
            console.log("메시지:", response.message);
            return response;
        } catch (error) {
            console.error("아이디 중복 확인 중 오류 발생:", error);
        }
    };

    const handleVerified = (status: boolean) => {
        if (status) {
            console.log("인증 성공");
        } else {
            console.log("인증 실패");
        }
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="회원가입" /> }}>
            <StyledRegisterWrapper>
                <h3>
                    소소상점과 함께
                    <br />더 즐거운 사업을 시작해 볼까요?
                </h3>
                <ButtonInput
                    option="아이디"
                    buttonTitle="중복확인"
                    placeholder="6자 이상 영문+숫자 포함"
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    disabled={!isUsernameValid}
                    onButtonClick={() => handleIdValue(username)}
                    id="username"
                />
                <LabelInput
                    placeholder="8~20자리 영문+숫자+특수문자 포함"
                    showPasswordToggle
                    option="비밀번호"
                    maxLength={20}
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <StyledPwVerify>
                    <LabelInput
                        placeholder="비밀번호를 한번 더 입력해 주세요."
                        showPasswordToggle
                        option="비밀번호 확인"
                        maxLength={20}
                        id="passwordverify"
                        value={passwordVerify}
                        onChange={handlePasswordVerifyChange}
                    />
                    {!passwordsMatch && showPasswordError && (
                        <PasswordMismatchError>비밀번호가 일치하지 않습니다.</PasswordMismatchError>
                    )}
                </StyledPwVerify>
                <LabelInput placeholder="예) 김소소" option="이름" type="text" id="name" />
                <TimerInput initialSeconds={180} onVerified={handleVerified} />
                <OwnerRegisterEmail />
                <LabelInput
                    placeholder="영업점 ID를 입력해 주세요."
                    option="영업점(선택)"
                    type="text"
                    id="company_id"
                />
                <ConsentComponent />
                <EnabledButton title="회원가입 신청" />
            </StyledRegisterWrapper>
        </AppLayout>
    );
};

const StyledRegisterWrapper = styled.div`
    width: 100%;
    padding: 0 1rem 0.6rem;
    margin-bottom: 2.5rem;
    h3 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
        line-height: 140%;
        width: 100%;
        text-align: left;
        margin: 1rem 0 1.5rem;
    }
`;

const StyledPwVerify = styled.div`
    position: relative;
    margin-bottom: 1.5rem;
`;
const PasswordMismatchError = styled.div`
    color: ${Styles.colors.systemError};
    font-size: ${Styles.font.size.fontsize14};
    margin-top: -1.1rem;
    margin-left: 0.8rem;
`;

export default OwnerRegister;
