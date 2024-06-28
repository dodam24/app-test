import { useState, useEffect } from "react";

export interface PhoneAuthState {
    phone: string;
    verificationCode: string;
    showVerificationInput: boolean;
    timer: {
        seconds: number;
        running: boolean;
    };
}

export const usePhoneAuth = () => {
    const [value, setValue] = useState<PhoneAuthState>({
        phone: "",
        verificationCode: "",
        showVerificationInput: false,
        timer: {
            seconds: 180,
            running: false,
        },
    });

    // 휴대폰 유효성 검사
    const formatPhoneNumber = (phone: string) => {
        const cleaned = phone.replace(/\D/g, "");
        let formatted = cleaned;

        if (cleaned.length > 3) {
            formatted = `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
        }
        if (cleaned.length > 7) {
            formatted = `${cleaned.slice(0, 3)}-${cleaned.slice(3, 7)}-${cleaned.slice(7)}`;
        }
        return formatted;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const fieldName = name as keyof PhoneAuthState;

        if (fieldName === "phone") {
            const cleaned = value.replace(/\D/g, "");
            if (cleaned.length <= 11) {
                setValue((prevState) => {
                    const newState = {
                        ...prevState,
                        [fieldName]: cleaned,
                    };
                    console.log(newState.phone);
                    return newState;
                });
            }
        } else {
            setValue((prevState) => {
                const newState = {
                    ...prevState,
                    [fieldName]: value,
                };
                console.log(newState[fieldName]);
                return newState;
            });
        }
    };

    // 버튼 클릭 시 인증번호 요청 및 input 표시
    const handleRequestVerification = () => {
        setValue({
            ...value,
            showVerificationInput: true,
            timer: {
                ...value.timer,
                running: true,
            },
        });
    };

    // 재전송 버튼 클릭 시 타이머 재시작
    const handleResendVerification = () => {
        setValue({
            ...value,
            showVerificationInput: true,
            timer: {
                seconds: 180,
                running: true,
            },
        });
    };

    // 타이머 포맷
    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `0${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
    };

    const getNoticeMessage = () => {
        return value.timer.seconds > 0
            ? "3분 이내로 인증번호를 입력해주세요."
            : "인증시간이 초과되었습니다.\n재전송 버튼을 눌러 다시 진행해주세요.";
    };
    useEffect(() => {
        let interval: number;

        if (value.timer.running) {
            interval = setInterval(() => {
                setValue((prevState) => ({
                    ...prevState,
                    timer: {
                        ...prevState.timer,
                        seconds: prevState.timer.seconds > 0 ? prevState.timer.seconds - 1 : 0,
                    },
                }));
            }, 1000);
        }

        // 타이머 종료 시 running 상태 변경 (재전송 버튼 활성화)
        if (value.timer.seconds === 0) {
            setValue((prevState) => ({
                ...prevState,
                timer: {
                    ...prevState.timer,
                    running: false,
                },
            }));
        }

        return () => clearInterval(interval);
    }, [value.timer.running, value.timer.seconds]);

    return {
        value: {
            ...value,
            phone: formatPhoneNumber(value.phone),
        },
        handleInputChange,
        handleRequestVerification,
        handleResendVerification,
        formatTime,
        getNoticeMessage,
    };
};

export default usePhoneAuth;
