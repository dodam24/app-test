import useScroll from "@/hooks/useScroll";
import { Styles } from "@/style/Styles";
import { formatDateWithYoil } from "@/utils/formatDateTime";
import { useRef } from "react";
import styled from "styled-components";

const SettlementListItemHeader = ({
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
            <StyledSettlementListItemHeaderContainer
                ref={containerRef}
                className={`${scrollY >= 130 ? "fixed" : ""}`}
            >
                <p>{formatDateWithYoil(transaction_at)}</p>
                <div>
                    <ul>
                        <li>유형</li>
                        <li>승인금액</li>
                        <li>수수료</li>
                    </ul>
                    <ul>
                        <li>정산금액</li>
                    </ul>
                </div>
            </StyledSettlementListItemHeaderContainer>
        );
    }

    if (containerRef?.current && containerRef?.current?.offsetTop - scrollY <= 75) {
        return (
            <>
                <StyledSettlementListItemHeaderContainer className="fixed">
                    <p>{formatDateWithYoil(transaction_at)}</p>
                    <div>
                        <ul>
                            <li>유형</li>
                            <li>승인금액</li>
                            <li>수수료</li>
                        </ul>
                        <ul>
                            <li>정산금액</li>
                        </ul>
                    </div>
                </StyledSettlementListItemHeaderContainer>
                <StyledSettlementListItemHeaderContainer ref={containerRef}>
                    <p>{formatDateWithYoil(transaction_at)}</p>
                    <div>
                        <ul>
                            <li>유형</li>
                            <li>승인금액</li>
                            <li>수수료</li>
                        </ul>
                        <ul>
                            <li>정산금액</li>
                        </ul>
                    </div>
                </StyledSettlementListItemHeaderContainer>
            </>
        );
    }

    return (
        <StyledSettlementListItemHeaderContainer
            ref={containerRef}
            className={`${containerRef?.current && containerRef?.current?.getBoundingClientRect().top <= 130 && scrollY >= 130 ? "fixed" : ""}`}
        >
            <p>{formatDateWithYoil(transaction_at)}</p>
            <div>
                <ul>
                    <li>유형</li>
                    <li>승인금액</li>
                    <li>수수료</li>
                </ul>
                <ul>
                    <li>정산금액</li>
                </ul>
            </div>
        </StyledSettlementListItemHeaderContainer>
    );
};

export default SettlementListItemHeader;

const StyledSettlementListItemHeaderContainer = styled.div`
    position: relative;
    padding: 0 1rem;

    &.fixed {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        height: 10.75rem;
        background-color: ${Styles.colors.systemWhite};
        z-index: 10;
        flex-direction: column;
        justify-content: flex-end;
    }

    p {
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
        padding: 1.2rem 0 0.3rem 0;
        border-bottom: 1px solid ${Styles.colors.natural10};
        width: 100%;
    }

    div {
        display: flex;
        justify-content: space-between;
        padding: 0.6rem 0.2rem;
        color: ${Styles.colors.natural40};
        font-size: ${Styles.font.size.fontsize12};
        font-weight: ${Styles.font.weight.regular};

        ul:nth-child(1) {
            flex: 0.6;
            display: flex;
            align-items: center;
            justify-content: space-between;

            li:nth-child(1) {
                padding-left: 0.4rem;
            }
        }
        ul:nth-child(2) {
            flex: 0.2;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
    }
`;
