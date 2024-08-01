import UpdateModal from "@/components/modal/UpdateModal";
import { Styles } from "@/style/Styles";
import styled, { css } from "styled-components";

interface ConfirmationModalProps {
    close: () => void;
    title?: string;
    message?: string;
    buttonText?: string;
    cancelButtonText?: string;
    handler?: () => void;
    optionCancel?: boolean;
    updateContent?: React.ReactNode;
    modalSize?: "normal" | "large";
}

// Modal (UI)
export default function ConfirmationModal({
    close,
    handler,
    title,
    message,
    buttonText = "확인",
    cancelButtonText = "취소",
    optionCancel,
    updateContent,
    modalSize = "normal",
}: ConfirmationModalProps) {
    return (
        <ConfirmationModalContainer $modalSize={modalSize}>
            <ConfirmationContent>
                {updateContent ? (
                    <UpdateModal />
                ) : (
                    <>
                        <h5>{title}</h5>
                        <p>{message}</p>
                    </>
                )}
            </ConfirmationContent>
            <ConfirmationButtonContainer>
                {optionCancel && (
                    <ModalActionButton onClick={close}>{cancelButtonText}</ModalActionButton>
                )}
                <ModalActionButton onClick={handler ? handler : close} $primary>
                    {buttonText}
                </ModalActionButton>
            </ConfirmationButtonContainer>
        </ConfirmationModalContainer>
    );
}

// ConfirmationModal (CSS)
const ConfirmationModalContainer = styled.div<{ $modalSize: "normal" | "large" }>`
    width: ${(props) => (props.$modalSize === "large" ? "90%" : "80%")};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.8rem;
    background: #fafafa;
    box-shadow: 0 1rem 1.25rem -0.25rem rgba(51, 65, 85, 0.1);
    margin: 0 auto;
`;
const ConfirmationContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.8rem;
    padding: 1.7rem 1rem 1.4rem 1rem;
    h5 {
        color: ${Styles.colors.natural80};
        text-align: center;
        font-size: 0.9rem;
        font-weight: ${Styles.font.weight.medium};
    }
    p {
        color: ${Styles.colors.natural50};
        text-align: center;
        font-size: 0.7rem;
        line-height: 1.4;
        white-space: break-spaces;
    }
`;
const ConfirmationButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    background: ${Styles.colors.systemWhite};
    border-radius: 0 0 0.8rem 0.8rem;
`;
const ModalButton = styled.button`
    width: 100%;
    border: none;
    cursor: pointer;
    position: relative;
`;
export const ModalActionButton = styled(ModalButton)<{
    $primary?: boolean;
}>`
    padding: 0.8rem;
    font-size: 0.7rem;
    border-radius: 0.8rem;
    color: ${Styles.colors.natural60};
    background: ${Styles.colors.systemWhite};
    font-weight: ${Styles.font.weight.medium};

    ${(props) =>
        props.$primary &&
        css`
            color: ${Styles.colors.primary100};
        `};

    &:not(:last-child)::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 0.05rem;
        background-color: ${Styles.colors.systemBackground};
    }
`;
