import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ButtonInput from "./ButtonInput";
import { Styles } from "@/style/Styles";
import instance from "@/apis/instance";

const VERIFICATION_CODE_LENGTH = 6;

interface TimerInputProps {
    initialSeconds: number;
    onVerified?: (status: boolean, phoneNumber?: string, verificationCode?: string) => void;
}

interface VerificationStatus {
    verified: boolean;
    message: string;
}

function TimerInput({ initialSeconds /*onVerified*/ }: TimerInputProps) {
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const [isRequestSent, setIsRequestSent] = useState<boolean>(false);
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [verificationCode, setVerificationCode] = useState<string>("");
    const [verificationStatus, setVerificationStatus] = useState<VerificationStatus>({
        verified: false,
        message: "3분 이내로 인증번호를 입력해 주세요.",
    });
    const [timer, setTimer] = useState<number>(initialSeconds);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [intervalId, setIntervalId] = useState<number | null>(null);
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [showResend, setShowResend] = useState<boolean>(false);

    useEffect(() => {
        let id: number | null = null;

        const tick = () => {
            setTimer((prevTimer) => {
                if (prevTimer <= 1) {
                    clearInterval(id!);
                    setIsActive(false);
                    setShowResend(true);
                    setVerificationStatus({
                        verified: false,
                        message: "인증시간이 초과되었습니다. 재전송 버튼을 눌러 다시 진행해주세요.",
                    });
                    return 0;
                }
                return prevTimer - 1;
            });
        };

        if (isActive) {
            id = window.setInterval(tick, 1000);
        } else {
            if (intervalId) {
                clearInterval(intervalId);
                setIntervalId(null);
            }
        }

        return () => {
            if (id) {
                clearInterval(id);
            }
        };
    }, [isActive, intervalId]);

    const formatPhoneNumberForDisplay = (value: string) => {
        const cleaned = value.replace(/\D/g, "");
        const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
        if (match) {
            return `${match[1]}-${match[2]}-${match[3]}`;
        }
        return value;
    };

    const formatPhoneNumberForServer = (value: string) => {
        return value.replace(/\D/g, "");
    };

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedPhoneNumber = formatPhoneNumberForDisplay(e.target.value);
        setPhoneNumber(formattedPhoneNumber);

        const phoneNumberRegex = /^010-\d{4}-\d{4}$/;
        setIsRequestSent(phoneNumberRegex.test(formattedPhoneNumber));
    };

    const handleVerificationCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numbersOnly = e.target.value.replace(/\D/g, "");
        if (numbersOnly.length <= VERIFICATION_CODE_LENGTH) {
            setVerificationCode(numbersOnly);
        }
    };

    //휴대폰번호 인증 요청
    const handleButtonClick = async () => {
        setIsRequestSent(true);
        setIsActive(true);
        setShowResend(false);
        setVerificationStatus({
            verified: false,
            message: "3분 이내로 인증번호를 입력해 주세요.",
        });

        try {
            const cleanedPhoneNumber = formatPhoneNumberForServer(phoneNumber);
            const response = await instance.post("/api/v1/members/verification/request/cellphone", {
                cellphone_number: cleanedPhoneNumber,
            });
            const json = response.data;
            if (json && json.body === "SUCCESS") {
                setIsAuth(true);
            }
        } catch (error) {
            console.error("인증 요청 실패", error);
            setVerificationStatus({
                verified: false,
                message: "인증 요청에 실패했습니다. 다시 시도해주세요.",
            });
        }
    };
    const handleVerificationSuccess = () => {
        // onVerified(true, formatPhoneNumberForServer(phoneNumber), verificationCode);
    };
    //인증 코드 확인
    const handleTest = async (callphone_number: string, verificationCode: string) => {
        try {
            const callphone_number = formatPhoneNumberForServer(phoneNumber);
            const response = await instance.post("/api/v1/members/verification/check/cellphone", {
                cellphone_number: callphone_number,
                verification_code: verificationCode,
            });
            console.log("인증 성공");
            setIsVerified(false);
            const json = response.data;
            handleVerificationSuccess();
            console.log(json);

            setIsActive(false);
            // onVerified(true);
        } catch (error) {
            console.error("인증 실패", phoneNumber);
            setVerificationStatus({
                verified: false,
                message: "인증번호가 틀렸습니다.",
            });
            // onVerified(false);
        }
    };
    //재전송 코드
    const handleResendClick = async () => {
        setTimer(initialSeconds);
        setIsActive(true);
        setShowResend(false);
        setVerificationStatus({
            verified: false,
            message: "3분 이내로 인증번호를 입력해 주세요.",
        });

        try {
            const cleanedPhoneNumber = formatPhoneNumberForServer(phoneNumber);
            const response = await instance.post("/api/v1/members/verification/request/cellphone", {
                cellphone_number: cleanedPhoneNumber,
            });
            const json = response.data;
            if (json && json.body === "SUCCESS") {
                setIsAuth(true);
            }
            setIsVerified(false);
        } catch (error) {
            console.error("재전송 요청 실패", error);
            setVerificationStatus({
                verified: false,
                message: "재전송 요청에 실패했습니다. 다시 시도해주세요.",
            });
        }
    };

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
    };

    return (
        <StyledTimerInputWrapper>
            <InputContainer
                $isVisible={!isVerified}
                className={`phone_input ${verificationStatus.message ? "message_visible" : ""}`}
            >
                <ButtonInput
                    option="휴대폰번호"
                    handleChange={handlePhoneNumberChange}
                    buttonTitle="인증요청"
                    placeholder="예) 010-1234-5678"
                    type="text"
                    value={phoneNumber}
                    onButtonClick={handleButtonClick}
                    disabled={!isRequestSent}
                    id="cellphone_number"
                    maxLength={11}
                />
            </InputContainer>
            <InputContainer className="positon_div" $isVisible={isAuth && !isVerified}>
                <ButtonInput
                    option=""
                    handleChange={handleVerificationCodeChange}
                    buttonTitle="인증확인"
                    placeholder="인증번호 입력"
                    type="text"
                    value={verificationCode}
                    onButtonClick={() => handleTest("01000000000", "111111")}
                    maxLength={VERIFICATION_CODE_LENGTH}
                />
                {!isVerified && !showResend && <Timer>{formatTime(timer)}</Timer>}
                {showResend && <ResendButton onClick={handleResendClick}>재전송</ResendButton>}
            </InputContainer>
        </StyledTimerInputWrapper>
    );
}

const StyledTimerInputWrapper = styled.div`
    .phone_input {
        fieldset {
            margin-bottom: 0;
        }
    }
    .phone_input.message_visible {
        fieldset {
            margin-bottom: 0.2rem;
        }
    }
    .positon_div {
        position: relative;
        margin-bottom: 2rem;
    }
`;

const InputContainer = styled.div<{ $isVisible?: boolean }>`
    display: ${(props) => (props.$isVisible ? "block" : "none")};
`;

const Timer = styled.div`
    position: absolute;
    right: 6.35rem;
    top: 1.15rem;
    color: ${Styles.colors.systemError};
    text-align: right;
    font-size: ${Styles.font.size.fontsize14};
    font-weight: ${Styles.font.weight.regular};
`;

const ResendButton = styled.button`
    position: absolute;
    right: 6.35rem;
    top: 1.15rem;
    color: ${Styles.colors.systemError};
    text-align: right;
    font-size: ${Styles.font.size.fontsize14};
    font-weight: ${Styles.font.weight.regular};
    background: none;
    border: none;
    cursor: pointer;
`;

export default TimerInput;
