import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ButtonInput from "./ButtonInput";
import { Styles } from "@/style/Styles";
import instance from "@/apis/instance";

const VERIFICATION_CODE_LENGTH = 6;

interface TimerInputProps {
    initialSeconds: number;
    onVerified: (status: boolean) => void;
}

interface VerificationStatus {
    verified: boolean;
    message: string;
}

function TimerInput({ initialSeconds, onVerified }: TimerInputProps) {
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
    const [isAUth, setIsAuth] = useState<boolean>(false);

    useEffect(() => {
        let id: number | null = null;

        const tick = () => {
            setTimer((prevTimer) => {
                if (prevTimer <= 1) {
                    clearInterval(id!);
                    setIsActive(false);
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

    const handleButtonClick = async () => {
        setIsRequestSent(true);
        setIsActive(true);
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
                return setIsAuth(true);
            }
        } catch (error) {
            console.error("인증 요청 실패", error);
            setVerificationStatus({
                verified: false,
                message: "인증 요청에 실패했습니다. 다시 시도해주세요.",
            });
        }
    };

    const verifyCode = () => {
        if (verificationCode === "111111") {
            setVerificationStatus({
                verified: true,
                message: "인증 성공", // 임시 원래는 체크아이콘이 출력 되어야함
            });
            setIsVerified(false);
            setIsActive(false);
            onVerified(true); // 인증 성공 시 onVerified 호출
        } else {
            setVerificationStatus({
                verified: false,
                message: "인증번호가 틀렸습니다.",
            });
            onVerified(false); // 인증 실패 시 onVerified 호출
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
                />
            </InputContainer>
            <InputContainer className="positon_div" $isVisible={isAUth}>
                <ButtonInput
                    option=""
                    handleChange={handleVerificationCodeChange}
                    buttonTitle="인증확인"
                    placeholder="인증번호 입력"
                    type="text"
                    value={verificationCode}
                    onButtonClick={verifyCode}
                    maxLength={VERIFICATION_CODE_LENGTH}
                />
                {!isVerified && <Timer>{formatTime(timer)}</Timer>}
                {verificationStatus.message && <Message>{verificationStatus.message}</Message>}
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

const Message = styled.div`
    position: absolute;
    left: 0.8rem;
    bottom: -0.9rem;
    font-size: ${Styles.font.size.fontsize12};
    font-weight: ${Styles.font.weight.regular};
    color: ${Styles.colors.systemError};
    line-height: 140%;
`;

export default TimerInput;
