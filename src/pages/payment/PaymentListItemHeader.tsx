import useScroll from "@/hooks/useScroll";
import { Styles } from "@/style/Styles";
import { formatDateWithYoil } from "@/utils/formatDateTime";
import { useRef } from "react";
import styled from "styled-components";

const PaymentListItemHeader = ({
    transaction_at,
    index,
}: {
    transaction_at: string;
    index: number;
}) => {
    const { scrollY } = useScroll();

    const containerRef = useRef<HTMLDivElement>(null);

    if (index === 0) {
        return (
            <StyledPaymentListItemHeaderContainer
                ref={containerRef}
                className={`${scrollY >= 130 ? "fixed" : ""}`}
            >
                <p>{formatDateWithYoil(transaction_at)}</p>
            </StyledPaymentListItemHeaderContainer>
        );
    }

    if (
        containerRef?.current &&
        containerRef?.current?.getBoundingClientRect().top <= 130 &&
        scrollY >= 130
    ) {
        return (
            <>
                <StyledPaymentListItemHeaderContainer className="fixed">
                    <p>{formatDateWithYoil(transaction_at)}</p>
                </StyledPaymentListItemHeaderContainer>
                <StyledPaymentListItemHeaderContainer ref={containerRef}>
                    <p>{formatDateWithYoil(transaction_at)}</p>
                </StyledPaymentListItemHeaderContainer>
            </>
        );
    }

    return (
        <StyledPaymentListItemHeaderContainer
            ref={containerRef}
            className={`${containerRef?.current && containerRef?.current?.getBoundingClientRect().top <= 130 && scrollY >= 130 ? "fixed" : ""}`}
        >
            <p>{formatDateWithYoil(transaction_at)}</p>
        </StyledPaymentListItemHeaderContainer>
    );
};

export default PaymentListItemHeader;

const StyledPaymentListItemHeaderContainer = styled.div`
    padding: 0 1rem;

    &.fixed {
        position: fixed;
        left: 0;
        width: 100%;
        display: flex;
        align-items: flex-end;
        height: auto;
        background-color: ${Styles.colors.systemWhite};
        z-index: 9999;
        top: 6.5rem;
    }

    p {
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
        padding: 1.2rem 0 0.3rem 0;
        border-bottom: 1px solid ${Styles.colors.natural10};
        width: 100%;
    }
`;
