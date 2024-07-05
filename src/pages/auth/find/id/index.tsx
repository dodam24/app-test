import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";

import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";

import OptionInput from "@/components/input/OptionInput";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";

import FixedButton from "@/components/button/FixedButton";
import { StyledBaseInputWrapper } from "@/components/styles/InputStyle";
import PhoneAuthInput from "@/components/input/PhoneAuthInput";
import { useNavigate } from "react-router-dom";

const FindID = () => {
    const [value, setValue] = useState({
        name: "",
        cellphone_number: "",
        verificationCode: "",
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };

    const handlePhoneChange = (phone: string) => {
        setValue({
            ...value,
            cellphone_number: phone,
        });
    };

    const handleVerificationCodeChange = (code: string) => {
        setValue({
            ...value,
            verificationCode: code,
        });
    };

    const navigate = useNavigate();
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(value);
        navigate("/find/id/list");
    };

    return (
        <AppLayout
            props={{
                header: <AppBackHeader title="아이디 찾기" />,
            }}
        >
            <AppBaseWrapper title={`이름과 휴대폰 번호를 입력하여\n인증을 진행해 주세요.`}>
                <StyledInputWrapper onSubmit={handleSubmit}>
                    <OptionInput
                        type="text"
                        name="name"
                        value={value.name}
                        onChange={handleInputChange}
                        placeholder="예) 김소소"
                        label="이름"
                    />
                    <PhoneAuthInput
                        onPhoneChange={handlePhoneChange}
                        onVerificationCodeChange={handleVerificationCodeChange}
                    />
                    <FixedButton type="submit">다음</FixedButton>
                </StyledInputWrapper>
            </AppBaseWrapper>
        </AppLayout>
    );
};

const StyledInputWrapper = styled(StyledBaseInputWrapper)``;

export default FindID;
