import React, { ChangeEvent, useState } from "react";
import Button from "@/components/button/Button";
import OptionInput from "@/components/input/OptionInput";
import { Styles } from "@/style/Styles";
import { useInputHandler } from "@/utils/phoneAuth";
import { useTimer } from "@/utils/timer";
import { requestPhoneVerification, requestPhoneVerificationCheck } from "@/apis/auth/callPhone";
import styled from "styled-components";

interface PhoneAuthInputProps {
    onPhoneChange: (phone: string) => void;
    onVerificationCodeChange: (verificationCode: string) => void;
}

const PhoneAuthInput = ({ onPhoneChange, onVerificationCodeChange }: PhoneAuthInputProps) => {
    const [value, setValue] = useState({
        verificationCode: "",
        showVerificationInput: false,
        verificationSuccess: false,
    });

    const { values, format, handleInputChange } = useInputHandler({
        phone: "",
    });

    const { timer, startTimer, resetTimer, formatTime } = useTimer(180);

    const handleRequestVerification = async () => {
        try {
            await requestPhoneVerification(values.phone);
            setValue({
                ...value,
                showVerificationInput: true,
            });
            startTimer();
        } catch (error) {
            console.error("인증 요청 실패", error);
        }
    };

    const handleRequestVerificationCheck = async () => {
        try {
            const success = await requestPhoneVerificationCheck(
                values.phone,
                value.verificationCode,
            );
            if (success) {
                setValue({
                    ...value,
                    verificationSuccess: true,
                });
                resetTimer();
            }
        } catch (error) {
            console.error("인증 확인 실패", error);
        }
    };

    const handleResendVerification = async () => {
        try {
            await requestPhoneVerification(values.phone);
            resetTimer();
            startTimer();
            setValue({
                ...value,
                verificationCode: "",
            });
        } catch (error) {
            console.error("재전송 요청 실패", error);
        }
    };

    const handleInputChangeVerification = (e: ChangeEvent<HTMLInputElement>) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
        onVerificationCodeChange(e.target.value);
    };

    const formattedTime = formatTime(timer.seconds);

    const noticeMessage = value.verificationSuccess
        ? "인증이 완료되었어요."
        : timer.seconds > 0
          ? `3분 이내로 인증번호를 입력해주세요.`
          : "인증시간이 초과되었습니다.\n재전송 버튼을 눌러 다시 진행해주세요.";

    const handlePhoneChange = (phone: string) => {
        onPhoneChange(phone);
    };

    return (
        <StyledPhoneAuthWrapper>
            <OptionInput
                label="휴대폰 번호"
                type="text"
                id="phone"
                name="phone"
                value={format}
                onChange={(e) => {
                    handleInputChange(e, handlePhoneChange);
                }}
                placeholder="휴대폰 번호를 입력해주세요."
            >
                <Button
                    size="sub"
                    onClick={handleRequestVerification}
                    disabled={values.phone.length < 11}
                >
                    인증요청
                </Button>
            </OptionInput>
            {value.showVerificationInput && (
                <OptionInput
                    type="text"
                    id="verificationCode"
                    name="verificationCode"
                    value={value.verificationCode}
                    onChange={handleInputChangeVerification}
                    placeholder="인증번호를 입력해주세요."
                    options={{
                        buttonOption: {
                            checkedOption: value.verificationSuccess,
                            timer:
                                timer.seconds > 0 && !value.verificationSuccess ? (
                                    <span className="timer">{formattedTime}</span>
                                ) : timer.seconds <= 0 && !value.verificationSuccess ? (
                                    <button
                                        className="replay_btn"
                                        onClick={handleResendVerification}
                                    >
                                        재전송
                                    </button>
                                ) : (
                                    ""
                                ),
                        },
                        notice: noticeMessage,
                    }}
                >
                    <Button size="sub" onClick={handleRequestVerificationCheck}>
                        인증확인
                    </Button>
                </OptionInput>
            )}
        </StyledPhoneAuthWrapper>
    );
};

const StyledPhoneAuthWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    .timer {
        color: ${Styles.colors.systemError};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
    }
    .replay_btn {
        color: ${Styles.colors.systemError};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
        text-decoration: underline;
        width: max-content;
    }
`;
// const SuccessMessage = styled.span`
//     color: ${Styles.colors.primary100};
// `;

export default PhoneAuthInput;
