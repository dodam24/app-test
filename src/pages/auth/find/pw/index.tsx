import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import OptionInput from "@/components/input/OptionInput";
import FixedButton from "@/components/button/FixedButton";
import PhoneAuthInput from "@/components/input/PhoneAuthInput";

import { IFindPW } from "@/interface/auth/find/find";

import { StyledBaseInputWrapper } from "@/style/InputStyle";
import { useInputHandler } from "@/utils/baseVerify";

const FindPW = () => {
    const { values, handleInputChange, setValues } = useInputHandler<IFindPW>({
        username: "",
        name: "",
        cellphone_number: "",
        verificationCode: "",
    });

    const handlePhoneChange = (phone: string) => {
        setValues((prevValues) => ({
            ...prevValues,
            cellphone_number: phone,
        }));
    };

    const handleVerificationCodeChange = (code: string) => {
        setValues((prevValues) => ({
            ...prevValues,
            verificationCode: code,
        }));
    };

    const navigate = useNavigate();
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate("/find/pw/list", { replace: true });
    };
    return (
        <AppLayout props={{ header: <AppBackHeader title="비밀번호 찾기" /> }}>
            <AppBaseWrapper title={`아이디, 이름, 휴대폰 번호를 입력하여\n인증을 진행해 주세요.`}>
                <StyledBaseInputWrapper onSubmit={handleSubmit}>
                    <OptionInput
                        type="text"
                        name="username"
                        id="username"
                        value={values.username}
                        onChange={handleInputChange}
                        placeholder="예) soso1234"
                        label="아이디"
                        options={{
                            buttonOption: {
                                deleteOption: true,
                            },
                        }}
                    />
                    <OptionInput
                        type="text"
                        name="name"
                        id="name"
                        value={values.name}
                        onChange={handleInputChange}
                        placeholder="예) 김소소"
                        label="이름"
                        options={{
                            buttonOption: {
                                deleteOption: true,
                            },
                        }}
                    />
                    <PhoneAuthInput
                        onPhoneChange={handlePhoneChange}
                        onVerificationCodeChange={handleVerificationCodeChange}
                    />
                    <FixedButton type="submit">다음</FixedButton>
                </StyledBaseInputWrapper>
            </AppBaseWrapper>
        </AppLayout>
    );
};

export default FindPW;
