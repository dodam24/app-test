import { useState, ChangeEvent } from "react";
import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import LabelInput from "@/components/input/LabelInput";
import EnabledButton from "@/components/button/EnabledButton";
import TimerInput from "@/components/input/TimerInput";
import ButtonInput from "@/components/input/ButtonInput";
import { validateId } from "@/utils/inputVerify";
import { registerIdverify } from "@/apis/auth/register";

import { Styles } from "@/style/Styles";

import { ToggleIcon } from "@/pages/auth/register/_images/register_img";

const StaffRegister = () => {
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
            console.log("인증 실패 test");
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
                    option="가맹점"
                    buttonTitle="조회"
                    placeholder="가맹점을 입력해 주세요."
                    type="text"
                    id="representative_name"
                    onButtonClick={() => console.log("가맹점 조회")}
                />
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
                <StyledBankWrapper>
                    <label htmlFor="account_bank_code">계좌은행</label>
                    <StyledBankInner>
                        <button id="account_bank_code">선택하세요.</button>
                        <span>
                            <img src={ToggleIcon} alt="이메일 토글" />
                        </span>
                    </StyledBankInner>
                </StyledBankWrapper>
                <LabelInput
                    placeholder="계좌주를 입력해 주세요."
                    id="account_holder"
                    option="계좌주"
                    type="text"
                />
                <LabelInput
                    placeholder="계좌번호를 입력해 주세요."
                    id="account_number"
                    option="계좌번호"
                    type="text"
                />
                {/* <ConsentComponent /> */}
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

const StyledBankWrapper = styled.div`
    margin-top: 1rem;
    label {
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
    }
`;

const StyledBankInner = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    margin: 0.4rem 0 1.2rem;
    button {
        width: 100%;
        height: 2.3rem;
        padding: 0 0.8rem;
        align-items: center;
        background-color: ${Styles.colors.systemBackground};
        border: none;
        border-radius: 0.4rem;
        text-align: left;
        color: ${Styles.colors.natural40};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
    }
    span {
        position: absolute;
        top: 50%;
        right: 0.8rem;
        transform: translateY(-50%);
        cursor: pointer;
        display: flex;
        justify-content: end;
        align-items: center;

        img {
            width: 1.2rem;
            height: 1.2rem;
            margin: 0;
        }
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

export default StaffRegister;
