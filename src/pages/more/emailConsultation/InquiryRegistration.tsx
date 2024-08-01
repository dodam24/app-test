import { Styles } from "@/style/Styles";
import styled from "styled-components";
import DynamicModal from "@/components/modal/DynamicModal";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";
import InquiryTextField from "../_component/InquiryTextField";
import useModal from "@/hooks/useModal";
import FixedButton from "@/components/button/FixedButton";
import { useState } from "react";

// 임시 데이터
const userInfo = { email: "so**@gmail.com" };

const InquiryRegistration = () => {
    const { isOpen, openModal, closeModal } = useModal();
    const [formData, setFormData] = useState({ title: "", content: "" });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        openModal();
    };

    const isButtonDisabled = !(formData.title && formData.content);

    return (
        <>
            <form onSubmit={handleRegister}>
                <StyledEmailInformation>
                    <span>답변 받을 이메일</span>
                    <p>{userInfo.email}</p>
                </StyledEmailInformation>
                <StyledInquiryContent>
                    <h3>문의 내용</h3>
                    <InquiryTextField
                        maxLength={50}
                        placeholder="제목을 입력해 주세요."
                        value={formData.title}
                        name="title"
                        onChange={handleInputChange}
                    />
                    <InquiryTextField
                        maxLength={2000}
                        placeholder="내용을 입력해 주세요."
                        isTextArea
                        value={formData.content}
                        name="content"
                        onChange={handleInputChange}
                    />
                    <p className="message">
                        * 문의량이 많은 경우 답변이 늦어질 수 있는 점 참고 부탁드립니다. (영업일
                        기준 3일 소요)
                    </p>
                    <FixedButton disabled={isButtonDisabled} type="submit">
                        등록
                    </FixedButton>
                </StyledInquiryContent>
            </form>

            {/* modal */}
            <DynamicModal open={isOpen} close={closeModal}>
                <ConfirmationModal
                    title="등록 완료"
                    message={`답변은 입력하신 이메일로\n 발송될 예정입니다.`}
                    buttonText="확인"
                    close={closeModal}
                />
            </DynamicModal>
        </>
    );
};

export default InquiryRegistration;

const StyledEmailInformation = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: start;
    padding: 1rem;
    gap: 0.5rem;
    border-radius: 0.4rem;
    background: ${Styles.colors.systemBackground};

    span {
        color: ${Styles.colors.natural40};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
    }

    p {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
    }
`;
const StyledInquiryContent = styled.div`
    width: 100%;
    margin: 2rem 0 1.8rem 0;

    h3 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
        line-height: 1.4;
    }

    .message {
        width: 100%;
        color: ${Styles.colors.natural50};
        font-size: ${Styles.font.size.fontsize13};
        font-weight: ${Styles.font.weight.regular};
        position: absolute;
        bottom: 56px;
        left: 0;
        padding: 0.5rem 1rem 1.8rem 1rem;
    }
`;
