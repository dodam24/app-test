import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import { DeleteAccount, DeleteAccountReasonProps } from "@/interface/setting/DeleteAccount";
import InquiryTextField from "@/pages/more/_component/InquiryTextField";
import { Styles } from "@/style/Styles";
import { useState } from "react";
import styled from "styled-components";
import { ArrowDownIcon } from "@/pages/insurance/_images/insurance";
import SlideUpModal from "@/components/slide_modal/SlideUpModal";

const ReasonList: DeleteAccountReasonProps[] = [
    {
        id: 1,
        reason: "보안 불안",
    },
    {
        id: 2,
        reason: "앱 불편",
    },
    {
        id: 3,
        reason: "푸시알림과다",
    },
    {
        id: 4,
        reason: "앱미사용",
    },
    {
        id: 0,
        reason: "기타",
    },
];

export const DeleteAccountReason = ({ setTotal }: DeleteAccount) => {
    const [reason, setReason] = useState<DeleteAccountReasonProps>({
        id: null,
        reason: null,
        reason_detail: "",
    });

    const [isActive, setIsActive] = useState(false);

    const handleModalPopup = () => {
        setIsActive(true);
    };

    const handleReasonValue = (reason: DeleteAccountReasonProps) => {
        setReason({
            id: reason.id,
            reason: reason.reason,
        });
        setIsActive(false);
        setTotal((prev) => {
            return {
                ...prev,
                reason: reason.id,
            };
        });
    };

    const handleReasonDetailValue = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setReason({
            id: reason.id,
            reason: reason.reason,
            reason_detail: e.target.value,
        });
        setTotal((prev) => {
            if (!prev) return prev;
            return {
                ...prev,
                reason_detail: e.target.value,
            };
        });
    };

    return (
        <AppBaseWrapper title="탈퇴하는 이유를 선택해주세요.">
            <StyledDeleteAccountReasonSelect onClick={handleModalPopup}>
                <input
                    type="text"
                    id="reason"
                    name="reason "
                    value={reason.reason ?? "탈퇴 이유 선택"}
                    readOnly
                />
            </StyledDeleteAccountReasonSelect>
            {reason.id === 0 && (
                <InquiryTextField
                    maxLength={300}
                    placeholder="탈퇴 이유 직접 입력"
                    isTextArea
                    value={reason.reason_detail}
                    name="reason_detail"
                    onChange={(e) => handleReasonDetailValue(e)}
                />
            )}
            <SlideUpModal
                title="탈퇴 이유 선택"
                isActive={isActive}
                onClose={() => setIsActive(false)}
                children={ReasonList.map((item) => (
                    <li
                        key={item.id}
                        className={reason.id === item.id ? "active" : ""}
                        onClick={() => handleReasonValue(item)}
                    >
                        {item.reason}
                    </li>
                ))}
            ></SlideUpModal>
        </AppBaseWrapper>
    );
};

export default DeleteAccountReason;

const StyledDeleteAccountReasonSelect = styled.div`
    margin-top: 0.8rem;
    display: flex;
    align-items: center;
    width: 100%;
    height: 2.3rem;
    padding: 0.55rem 0.8rem;
    border: none;
    border-radius: 0.4rem;
    appearance: none;
    background: ${Styles.colors.systemBackground} url(${ArrowDownIcon}) no-repeat right 0.8rem
        center / 1.2rem 1.2rem;
    cursor: pointer;
    input {
        width: 80%;
        height: inherit;
        border: none;
        outline: none;
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
        color: ${Styles.colors.natural90};
        background: ${Styles.colors.systemBackground};
    }
`;
