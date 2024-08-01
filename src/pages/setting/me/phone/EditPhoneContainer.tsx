import styled from "styled-components";
import OptionInput from "@/components/input/OptionInput";
import Button from "@/components/button/Button";
import FixedButton from "@/components/button/FixedButton";
import { Styles } from "@/style/Styles";
import { useInputHandler } from "@/pages/setting/me/phone/utils";
import useModal from "@/hooks/useModal";
import DynamicModal from "@/components/modal/DynamicModal";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";
import { ChangeEvent, useState } from "react";
import { useTimer } from "@/utils/timer";

// interface EditPhoneProps {
//     phone: string;
//     verificationCode: string;
//     // cellphone_number: string;
//     // verification_code: string;
// }

const EditPhoneContainer = () => {
    const {
        isOpen: isRequestModalOpen,
        openModal: openRequestModal,
        closeModal: closeRequestModal,
    } = useModal();

    const {
        isOpen: isCompleteModalOpen,
        openModal: openCompleteModal,
        closeModal: closeCompleteModal,
    } = useModal();

    const [value, setValue] = useState({
        verificationCode: "",
        verificationSent: false,
        isVerified: false,
        errorStatus: false,
        errorMessage: "",
    });

    const { values, format, handleInputChange } = useInputHandler({
        phone: "",
    });

    const { timer, startTimer, resetTimer, formatTime } = useTimer(180);

    // 인증 요청
    const sendVerification = () => {
        if (values.phone.length < 11) return;
        setValue({
            ...value,
            verificationSent: true,
        });
        startTimer();
    };

    // 인증 확인
    const verifyCode = async () => {
        // const success = await requestPhoneVerificationCheck(values.phone, value.verificationCode);

        if (value.verificationCode === "111111" && timer.seconds > 0) {
            setValue({
                ...value,
                isVerified: true,
                errorStatus: false,
                errorMessage: "",
            });
            resetTimer();
        } else {
            setValue({
                ...value,
                errorStatus: true,
                errorMessage: "인증번호가 일치하지 않습니다.",
            });
        }
    };

    // 인증번호 요청
    const handleVerificationRequest = () => {
        sendVerification();
        closeRequestModal();
    };

    // 인증번호 입력
    const handleVerificationCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const numbersOnly = e.target.value.replace(/[^0-9]/g, "");
        if (numbersOnly.length <= 6) {
            setValue({
                ...value,
                verificationCode: numbersOnly,
                errorStatus: false,
                errorMessage: "",
            });
            value.verificationCode = numbersOnly;
        }
    };

    // 재전송
    const resendVerification = () => {
        resetTimer();
        startTimer();
        setValue({
            ...value,
            isVerified: false,
            verificationCode: "",
            errorStatus: false,
            errorMessage: "",
        });
    };

    const noticeMessage = value.isVerified
        ? "인증이 완료되었어요."
        : "3분 이내로 인증번호를 입력해주세요.";

    return (
        <StyledEditPhoneContainer>
            <h2>
                변경하실 휴대폰번호를 <br />
                입력후 인증해주세요.
            </h2>
            <StyledOptionInputContainer>
                <OptionInput
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="예) 010-1234-5678"
                    label="휴대폰번호"
                    autoComplete="off"
                    value={format}
                    onChange={(e) => {
                        handleInputChange(e);
                    }}
                >
                    <Button
                        type="button"
                        size="sub"
                        disabled={values.phone.length < 11}
                        onClick={openRequestModal}
                    >
                        인증요청
                    </Button>
                </OptionInput>

                {value.verificationSent && (
                    <OptionInput
                        type="text"
                        id="verificationCode"
                        name="verificationCode"
                        placeholder="인증번호 6자리 숫자 입력"
                        value={value.verificationCode}
                        onChange={handleVerificationCodeChange}
                        options={{
                            buttonOption: {
                                checkedOption: value.isVerified,
                                timer:
                                    timer.seconds > 0 && !value.isVerified ? (
                                        <span className="timer">{formatTime(timer.seconds)}</span>
                                    ) : timer.seconds <= 0 && !value.isVerified ? (
                                        <button className="resend_btn" onClick={resendVerification}>
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
                        <Button
                            size="sub"
                            // 인증번호가 6자리가 아니거나 인증되지 않으면 비활성화
                            disabled={value.verificationCode.length !== 6 || value.isVerified}
                            onClick={verifyCode}
                        >
                            {value.isVerified ? "인증완료" : "인증확인"}
                        </Button>
                    </OptionInput>
                )}
            </StyledOptionInputContainer>
            <FixedButton disabled={!value.isVerified} onClick={openCompleteModal}>
                저장
            </FixedButton>

            {/* 인증 요청 확인 모달 */}
            <DynamicModal open={isRequestModalOpen} close={closeRequestModal}>
                <ConfirmationModal
                    title="인증 요청"
                    message={`인증번호를 발송해 드렸어요!\n인증번호를 입력해 주세요.`}
                    close={closeRequestModal}
                    handler={handleVerificationRequest}
                />
            </DynamicModal>

            {/* 인증 완료 모달 */}
            <DynamicModal open={isCompleteModalOpen} close={closeCompleteModal}>
                <ConfirmationModal
                    title="설정 완료"
                    message={`휴대폰 번호 변경이\n정상적으로 완료되었습니다.`}
                    close={closeCompleteModal}
                />
            </DynamicModal>
        </StyledEditPhoneContainer>
    );
};

export default EditPhoneContainer;

const StyledEditPhoneContainer = styled.section`
    padding: 1rem 1rem 3.4rem;
    & > h2 {
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
        line-height: 1.4;
        color: ${Styles.colors.natural90};
        margin-bottom: 1.5rem;
    }
`;
const StyledOptionInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    .timer {
        color: ${Styles.colors.systemError};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
    }
    .verificationMessage {
        color: ${Styles.colors.systemSuccess};
        font-size: ${Styles.font.size.fontsize12};
        font-weight: ${Styles.font.weight.regular};
        line-height: 1.4;
    }
    .resend_btn {
        color: ${Styles.colors.systemError};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
        text-decoration: underline;
        width: max-content;
    }
`;
