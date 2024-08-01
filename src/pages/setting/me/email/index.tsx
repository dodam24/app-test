import FixedButton from "@/components/button/FixedButton";
import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import DynamicModal from "@/components/modal/DynamicModal";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";
import useModal from "@/hooks/useModal";
import EditEmailContainer from "@/pages/setting/me/email/EditEmailContainer";
import { useState } from "react";

const EditEmail = () => {
    const { isOpen, openModal, closeModal } = useModal();
    const initialEmail = "kim111@gmail.com";
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    const handleEmailValidChange = (isValid: boolean) => {
        setIsButtonEnabled(isValid);
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="이메일 수정" /> }}>
            <EditEmailContainer
                initialEmail={initialEmail}
                onEmailValidChange={handleEmailValidChange}
            />
            {
                <FixedButton disabled={!isButtonEnabled} onClick={openModal}>
                    저장
                </FixedButton>
            }

            <DynamicModal open={isOpen} close={closeModal}>
                <ConfirmationModal
                    title="설정 완료"
                    message={`이메일 주소 변경이\n정상적으로 완료되었습니다.`}
                    buttonText="확인"
                    close={closeModal}
                />
            </DynamicModal>
        </AppLayout>
    );
};

export default EditEmail;
