import { Styles } from "@/style/Styles";
import styled, { css } from "styled-components";

interface ConfirmationModalProps {
    close?: () => void;
    title?: string;
    message?: string;
    buttonText?: string;
    handler?: () => void;
}

// Modal (UI)
export default function ConfirmationModal({
    close,
    handler,
    title,
    message,
    buttonText,
}: ConfirmationModalProps) {
    return (
        <div>
            <ConfirmationModalContainer>
                <ConfirmationContent>
                    <h5>{title}</h5>
                    <p>{message}</p>
                </ConfirmationContent>
                <ConfirmationButtonContainer>
                    <ModalActionButton onClick={close}>취소</ModalActionButton>
                    <ModalActionButton onClick={handler} $primary>
                        {buttonText}
                    </ModalActionButton>
                </ConfirmationButtonContainer>
            </ConfirmationModalContainer>
        </div>
    );
}

// ConfirmationModal (CSS)
const ConfirmationModalContainer = styled.div`
    width: 14rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.8rem;
    background: #fafafa;
    box-shadow: 0 1rem 1.25rem -0.25rem rgba(51, 65, 85, 0.1);
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
        /* font-weight: ${Styles.font.weight.regular}; */
        line-height: 1.4;
    }
`;
const ConfirmationButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    background: ${Styles.colors.systemWhite};
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
`;

// components > button > ModalButtons.tsx (CSS)
const ModalButton = styled.button`
    width: 100%;
    border: none;
    cursor: pointer;
`;
export const ModalActionButton = styled(ModalButton)<{ $primary?: boolean }>`
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
        `}
`;
