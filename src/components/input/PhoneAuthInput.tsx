import { ChangeEvent, useState } from "react";
import Button from "@/components/button/Button";
import OptionInput from "@/components/input/OptionInput";
import { Styles } from "@/style/Styles";
import { useInputHandler } from "@/utils/phoneAuth";
import { useTimer } from "@/utils/timer";
import { requestPhoneVerification, requestPhoneVerificationCheck } from "@/apis/auth/callPhone";
import styled from "styled-components";
import DynamicModal from "@/components/modal/DynamicModal";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";
import useModal from "@/hooks/useModal";

interface PhoneAuthInputProps {
    onPhoneChange: (phone: string) => void;
    onVerificationCodeChange: (verificationCode: string) => void;
}

const PhoneAuthInput = ({ onPhoneChange, onVerificationCodeChange }: PhoneAuthInputProps) => {
    const [value, setValue] = useState({
        verificationCode: "",
        showVerificationInput: false,
        verificationSuccess: false,
        phoneSuccess: false,
        errorStatus: false,
        errorMessage: "",
    });

    const { values, format, handleInputChange } = useInputHandler({
        phone: "",
    });

    const { timer, startTimer, resetTimer, formatTime } = useTimer(180);

    const {
        isOpen: isOpenConfirmationModal,
        openModal: openConfirmationModal,
        closeModal: closeConfirmationModal,
    } = useModal();
    const {
        isOpen: isOpenDynamicModal,
        openModal: openDynamicModal,
        closeModal: closeDynamicModal,
    } = useModal();

    const handleRequestVerification = async () => {
        try {
            await requestPhoneVerification(values.phone);
            setValue({
                ...value,
                showVerificationInput: true,
                phoneSuccess: true,
                errorStatus: false,
                errorMessage: "",
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
                    errorStatus: false,
                    errorMessage: "",
                });
                resetTimer();
                openConfirmationModal();
            } else {
                setValue({
                    ...value,
                    errorStatus: true,
                    errorMessage: "인증번호가 일치하지 않습니다.",
                });
            }
        } catch (error) {
            setValue({
                ...value,
                errorStatus: true,
                errorMessage: "인증번호가 일치하지 않습니다.",
            });
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
                errorStatus: false,
                errorMessage: "",
            });
        } catch (error) {
            console.error("재전송 요청 실패", error);
        }
    };

    const handleInputChangeVerification = (e: ChangeEvent<HTMLInputElement>) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
            errorStatus: false,
            errorMessage: "",
        });
        onVerificationCodeChange(e.target.value);
    };

    const formattedTime = formatTime(timer.seconds);

    const noticeMessage = value.verificationSuccess
        ? "" // 원래는 인증 완료 메세지가 나와야 하는데 파란색 설정이 되지 않아 잠시 비워둠
        : timer.seconds > 0
          ? `3분 이내로 인증번호를 입력해주세요.`
          : "인증시간이 초과되었습니다.\n재전송 버튼을 눌러 다시 진행해주세요.";

    const handlePhoneChange = (phone: string) => {
        onPhoneChange(phone);
    };

    const confirmHandler = () => {
        closeConfirmationModal();
        closeDynamicModal();
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
                options={{
                    buttonOption: {
                        checkedOption: value.phoneSuccess,
                    },
                }}
            >
                <Button
                    size="sub"
                    type="button"
                    onClick={() => {
                        handleRequestVerification();
                        openDynamicModal();
                    }}
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
                        notice: !value.errorStatus ? noticeMessage : "",
                        error: {
                            errorStatus: value.errorStatus,
                            errorMessage: value.errorMessage,
                        },
                    }}
                >
                    <Button size="sub" onClick={handleRequestVerificationCheck} type="button">
                        인증확인
                    </Button>
                </OptionInput>
            )}

            <DynamicModal open={isOpenDynamicModal} close={closeDynamicModal}>
                <ConfirmationModal
                    title="인증 요청"
                    message={`인증번호를 발송해 드렸어요!\n문자메시지를 확인해 주세요.`}
                    buttonText="확인"
                    close={confirmHandler}
                />
            </DynamicModal>
            <DynamicModal open={isOpenConfirmationModal} close={closeDynamicModal}>
                <ConfirmationModal
                    title="인증 완료"
                    message={`휴대본번호 인증이\n완료되었습니다.`}
                    buttonText="확인"
                    close={confirmHandler}
                />
            </DynamicModal>
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

export default PhoneAuthInput;
