import styled from "styled-components";
import OptionInput from "@/components/input/OptionInput";
import Button from "@/components/button/Button";
import FixedButton from "@/components/button/FixedButton";
import { Styles } from "@/style/Styles";
import { useInputHandler } from "@/pages/setting/me/phone/utils";
import useModal from "@/hooks/useModal";
import DynamicModal from "@/components/modal/DynamicModal";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";
import { useEffect, useState } from "react";

// interface EditPhoneProps {
//     cellphone_number: string;
//     verification_code: string;
// }

const EditPhoneContainer = () => {
    const { isOpen, openModal, closeModal } = useModal();

    const { values, format, handleInputChange } = useInputHandler({
        phone: "",
    });

    // 인증번호
    const [verificationSent, setVerificationSent] = useState(false);
    const [verificationCode, setVerificationCode] = useState("");
    const [isVerified, setIsVerified] = useState(false);
    // const [verificationMessage, setVerificationMessage] = useState("");

    const sendVerification = () => {
        if (values.phone.length < 11) return;
        setVerificationSent(true);
    };
    // 인증번호 확인
    const verifyCode = () => {
        // if (verification_code === verificationCode && timer > 0) {
        if (verificationCode === "111111" && timer > 0) {
            setIsVerified(true);
            setVerificationMessage("인증이 완료되었어요.");
            // 체크 옵션 추가
        } else {
            setIsVerified(false);
        }
    };

    const handleVerificationRequest = () => {
        sendVerification();
        closeModal();
    };

    const handleVerificationCodeChange = (e: { target: { value: string } }) => {
        const numbersOnly = e.target.value.replace(/[^0-9]/g, "");
        if (numbersOnly.length <= 6) {
            setVerificationCode(numbersOnly);
        }
    };

    // 타이머
    const [timer, setTimer] = useState(180);

    const formatTime = (timer: number) => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };

    useEffect(() => {
        let interval: number;
        if (verificationSent) {
            interval = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer <= 1) {
                        clearInterval(interval);
                        setVerificationSent(false);
                        return 0;
                    }
                    return prevTimer - 1;
                });
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [verificationSent]);

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
                    onChange={(e) => handleInputChange(e)}
                >
                    <Button size="sub" disabled={values.phone.length < 11} onClick={openModal}>
                        인증요청
                    </Button>
                </OptionInput>

                {verificationSent && (
                    <>
                        <OptionInput
                            type="text"
                            id="verification"
                            name="verification"
                            placeholder="인증번호 6자리 숫자 입력"
                            value={verificationCode}
                            onChange={handleVerificationCodeChange}
                            options={{
                                buttonOption: {
                                    checkedOption: isVerified,
                                    timer: "",
                                },
                                notice: isVerified
                                    ? "인증이 완료되었어요."
                                    : "3분 이내로 인증번호를 입력해주세요.",
                            }}
                        >
                            <span className="timer">{formatTime(timer)}</span>
                            <Button size="sub" disabled={isVerified} onClick={verifyCode}>
                                {isVerified ? "인증완료" : "인증확인"}
                            </Button>
                        </OptionInput>
                        {/* <p className="verificationMessage">{verificationMessage}</p> */}
                    </>
                )}
            </StyledOptionInputContainer>
            <FixedButton disabled>저장</FixedButton>

            <DynamicModal open={isOpen} close={closeModal}>
                <ConfirmationModal
                    title="인증 요청"
                    message={`인증번호를 발송해 드렸어요!\n인증번호를 입력해 주세요.`}
                    buttonText="확인"
                    close={closeModal}
                    handler={handleVerificationRequest}
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
        position: absolute;
        right: 120px;
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
`;
