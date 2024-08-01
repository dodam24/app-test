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

interface IPhoneAuthState {
    callphone_number: string;
    verificationCode: string;
    showVerificationInput: boolean;
    verificationSuccess: boolean;
    phoneSuccess: boolean;
    errorStatus: boolean;
    errorMessage: string;
}

const PhoneAuthInput = ({ onPhoneChange, onVerificationCodeChange }: PhoneAuthInputProps) => {
    const [value, setValue] = useState<IPhoneAuthState>({
        callphone_number: "",
        verificationCode: "",
        showVerificationInput: false,
        verificationSuccess: false,
        phoneSuccess: false,
        errorStatus: false,
        errorMessage: "",
    });

    const handleInputChangeVerification = (e: ChangeEvent<HTMLInputElement>) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
            errorStatus: false,
            errorMessage: "",
        });
        onVerificationCodeChange(e.target.value);
    };

    // 전화번호 유효성검사
    const { values, format, handleInputChange } = useInputHandler({
        phone: "",
    });

    // 타이머
    const { timer, startTimer, resetTimer, formatTime } = useTimer(180);

    const formattedTime = formatTime(timer.seconds);

    // 모달
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

    const confirmHandler = () => {
        closeConfirmationModal();
        closeDynamicModal();
    };

    //인증번호 요청 + 휴대폰 번호 인증 api 호출
    const handleRequestVerification = async () => {
        try {
            await requestPhoneVerification(values.phone);
            setValue({
                ...value,
                callphone_number: values.phone,
                showVerificationInput: true,
                phoneSuccess: true,
                errorStatus: false,
                errorMessage: "",
            });
            startTimer();
            onPhoneChange(values.phone);
        } catch (error) {
            console.error("인증 요청 실패", error);
        }
    };

    //인증번호 확인 api
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

    // 인증번호 재전송
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

    const noticeMessage: { message: string; status: "" | "success" | "" } =
        value.verificationSuccess
            ? { message: "인증 완료 메세지", status: "success" }
            : timer.seconds > 0
              ? { message: "3분 이내로 인증번호를 입력해주세요.", status: "" }
              : {
                    message: "인증시간이 초과되었습니다.\n재전송 버튼을 눌러 다시 진행해주세요.",
                    status: "",
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
                    onPhoneChange(values.phone);
                    handleInputChange(e);
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
                    disabled={values.phone.length < 11 || value.phoneSuccess}
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
                        notice: noticeMessage.message,
                        noticeStatus: noticeMessage.status,
                        error: {
                            errorStatus: value.errorStatus,
                            errorMessage: value.errorMessage,
                        },
                    }}
                >
                    <Button
                        size="sub"
                        onClick={handleRequestVerificationCheck}
                        type="button"
                        disabled={value.verificationSuccess}
                    >
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
