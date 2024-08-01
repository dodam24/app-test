import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import useModal from "@/hooks/useModal";

import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import OptionInput from "@/components/input/OptionInput";
import FixedButton from "@/components/button/FixedButton";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import PhoneAuthInput from "@/components/input/PhoneAuthInput";
import ConsentCheckBox from "@/components/checkbox/ConsentCheckBox";
import DynamicModal from "@/components/modal/DynamicModal";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";

import { StyledBaseInputWrapper } from "@/style/InputStyle";
import { IRegisterPhone } from "@/interface/auth/register/register";

const PhoneAuth = () => {
    const [value, setValue] = useState<IRegisterPhone>({
        company_id: "활빈당",
        name: "이몽룡",
        cellphone_number: "",
        verificationCode: "",
    });

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

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        openModal();
    };

    // 모달 함수
    const { isOpen, openModal, closeModal } = useModal();
    const navigate = useNavigate();
    const confirmHandler = () => {
        closeModal();
        navigate("/register/staff", { replace: true });
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="휴대폰 인증" /> }}>
            <AppBaseWrapper title={`최초 접속 인증을 진행해 주세요.`}>
                <StyledBaseInputWrapper onSubmit={handleSubmit}>
                    <OptionInput
                        type="text"
                        name="company_id"
                        value={value.company_id}
                        label="상호명"
                        readOnly
                    />
                    <OptionInput type="text" name="name" value={value.name} label="이름" readOnly />
                    <PhoneAuthInput
                        onPhoneChange={handlePhoneChange}
                        onVerificationCodeChange={handleVerificationCodeChange}
                    />
                    <ConsentCheckBox />
                    <FixedButton type="submit" disabled={!value.verificationCode}>
                        확인
                    </FixedButton>
                    <DynamicModal open={isOpen} close={closeModal}>
                        <ConfirmationModal
                            title="인증 완료"
                            message={`본인인증 성공했습니다.`}
                            buttonText="확인"
                            close={confirmHandler}
                        />
                    </DynamicModal>
                </StyledBaseInputWrapper>
            </AppBaseWrapper>
        </AppLayout>
    );
};

export default PhoneAuth;
