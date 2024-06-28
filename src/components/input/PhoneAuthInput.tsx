import Button from "@/components/button/Button";
import OptionInput from "@/components/input/OptionInput";
import { Styles } from "@/style/Styles";
import usePhoneAuth from "@/utils/phoneAuth";

import styled from "styled-components";

interface PhoneAuthInputProps {
    addValue?: React.Dispatch<
        React.SetStateAction<{
            phone: string;
            paymentDate: string;
        }>
    >;
    showVerificationButton?: boolean;
}

const PhoneAuthInput = ({ showVerificationButton = true }: PhoneAuthInputProps) => {
    const {
        value,
        handleInputChange,
        handleRequestVerification,
        handleResendVerification,
        formatTime,
        getNoticeMessage,
    } = usePhoneAuth();

    const formattedTime = formatTime(value.timer.seconds);
    const noticeMessage = getNoticeMessage();

    return (
        <StyledPhoneAuthWrapper>
            <OptionInput
                label="휴대폰 번호"
                type="text"
                id="phone"
                name="phone"
                value={value.phone}
                onChange={handleInputChange}
                placeholder="휴대폰 번호를 입력해주세요."
            >
                <Button size="sub" onClick={handleRequestVerification}>
                    인증요청
                </Button>
            </OptionInput>
            {value.showVerificationInput && (
                <OptionInput
                    type="text"
                    id="verificationCode"
                    name="verificationCode"
                    value={value.verificationCode}
                    onChange={handleInputChange}
                    placeholder="인증번호를 입력해주세요."
                    options={{
                        buttonOption: {
                            checkedOption: false,
                            timer: (
                                <span className="timer">
                                    {value.timer.seconds > 0 ? (
                                        formattedTime
                                    ) : (
                                        <button
                                            className="replay_btn"
                                            onClick={handleResendVerification}
                                        >
                                            재전송
                                        </button>
                                    )}
                                </span>
                            ),
                        },
                        notice: noticeMessage,
                    }}
                >
                    {showVerificationButton && <Button size="sub">인증확인</Button>}
                </OptionInput>
            )}
        </StyledPhoneAuthWrapper>
    );
};

export default PhoneAuthInput;

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
