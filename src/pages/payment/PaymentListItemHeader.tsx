import useScroll from "@/hooks/useScroll";
import { Styles } from "@/style/Styles";
import { useRef } from "react";
import styled from "styled-components";

const yoilList = [
    { day: 0, yoli: "일" },
    { day: 1, yoli: "월" },
    { day: 2, yoli: "화" },
    { day: 3, yoli: "수" },
    { day: 4, yoli: "목" },
    { day: 5, yoli: "금" },
    { day: 6, yoli: "토" },
];

const PaymentListItemHeader = ({
    transaction_at,
    index,
}: {
    transaction_at: string;
    index: number;
}) => {
    const { scrollY } = useScroll();

    const containerRef = useRef<HTMLDivElement>(null);

    const transFormDate = (date: string): string => {
        const getDate = new Date(date);
        const fullDate = getDate.toLocaleDateString();
        const yoli = yoilList.find((yoli) => yoli.day === getDate.getDay())?.yoli;
        return `${fullDate}(${yoli})`;
    };

    if (index === 0) {
        return (
            <StyledPaymentListItemHeaderContainer
                ref={containerRef}
                className={`${containerRef?.current && containerRef?.current?.getBoundingClientRect().top <= 130 && scrollY >= 130 ? "fixed" : ""}`}
            >
                <p>{transFormDate(transaction_at)}</p>
            </StyledPaymentListItemHeaderContainer>
        );
    }

    if (containerRef?.current && containerRef?.current?.offsetTop - scrollY <= 130) {
        return (
            <>
                <StyledPaymentListItemHeaderContainer className="fixed">
                    <p>{transFormDate(transaction_at)}</p>
                </StyledPaymentListItemHeaderContainer>
                <StyledPaymentListItemHeaderContainer ref={containerRef}>
                    <p>{transFormDate(transaction_at)}</p>
                </StyledPaymentListItemHeaderContainer>
            </>
        );
    }

    return (
        <StyledPaymentListItemHeaderContainer
            ref={containerRef}
            className={`${containerRef?.current && containerRef?.current?.getBoundingClientRect().top <= 130 && scrollY >= 130 ? "fixed" : ""}`}
        >
            <p>{transFormDate(transaction_at)}</p>
        </StyledPaymentListItemHeaderContainer>
    );
};

export default PaymentListItemHeader;

const StyledPaymentListItemHeaderContainer = styled.div`
    position: relative;
    padding: 0 1rem;

    &.fixed {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        align-items: flex-end;
        height: 8.8rem;
        background-color: ${Styles.colors.systemWhite};
        z-index: 1;
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
