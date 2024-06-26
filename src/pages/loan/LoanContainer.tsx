import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Styles } from "@/style/Styles";

import { WalletIcon, MoneyIcon, GiftIcon, HouseIcon } from "@/pages/loan/_images/loanImg";

interface LoanData {
    id: number;
    title: string;
    description: string;
    spanText?: string;
    img: string;
}

// 임시 데이터 예시
const dummyLoanData: LoanData[] = [
    {
        id: 1,
        title: "소상공인론",
        description: "매출채권양도를 통한\n 원리금 균등 상환방식으로 상환 진행",
        spanText: "매출 데이터 바탕으로 대출액 측정",
        img: WalletIcon,
    },
    {
        id: 2,
        title: "마케팅론",
        description: "마케팅이 필요한 기업 대상\n 진행 규모에 따른 마케팅 금액 대출",
        img: MoneyIcon,
    },
    {
        id: 3,
        title: "딜리버리론",
        description: "배달대행사의 승인을 통해\n 매출을 분석하여 대출액 측정",
        img: GiftIcon,
    },
    {
        id: 4,
        title: "프랜차이즈론",
        description: "신규 가맹점 오픈시 창업비용을\n 가맹점에게 대출해주는 상품",
        img: HouseIcon,
    },
];

const LoanContainer = () => {
    const navigate = useNavigate();

    const handleItemClick = (id: number) => {
        navigate(`/loan/${id}`);
    };

    return (
        <StyledLoanWrapper>
            <StyledLoanList>
                {dummyLoanData.map((loan, index) => (
                    <StyledLoanItem
                        key={loan.id}
                        className={`loan-item-${index}`}
                        onClick={() => handleItemClick(loan.id)}
                    >
                        <StyledLoanItemInner>
                            <h3>{loan.title}</h3>
                            <p>
                                {loan.description.split("\n").map((line, idx) => (
                                    <React.Fragment key={idx}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </p>
                            {loan.spanText && <span>{loan.spanText}</span>}
                        </StyledLoanItemInner>
                        <img src={loan.img} alt="Loan Icon" />
                    </StyledLoanItem>
                ))}
            </StyledLoanList>
        </StyledLoanWrapper>
    );
};

const StyledLoanWrapper = styled.div`
    width: 100%;
    padding: 1rem 1rem 0;
`;

const StyledLoanList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;

const StyledLoanItem = styled.li`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    background-color: #eee; /* 임시 지정 */
    border-radius: 1rem;
    padding: 1.2rem 1.1rem;
    align-items: center;
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.06);
    gap: 1.05rem;

    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }

    &.loan-item-0 {
        background-color: ${Styles.colors.primary30};
        padding: 1.5rem 1.1rem;
        align-items: start;
        white-space: nowrap;
        gap: 0;
    }
    &.loan-item-1 {
        background-color: ${Styles.colors.secondary10};
    }
    &.loan-item-2 {
        background-color: ${Styles.colors.secondary70};
    }
    &.loan-item-3 {
        background-color: ${Styles.colors.natural00};
    }

    img {
        width: 4.5rem;
        height: 4.25rem;
    }
    &.loan-item-0 img {
        width: 5.3rem;
        height: 5rem;
        margin-top: 2.7rem;
    }

    &.loan-item-1 img {
        width: 4.5rem;
        height: 4.25rem;
    }

    &.loan-item-2 img {
        width: 4.5rem; /* 임시로 넣어둠 */
        height: 4.25rem; /* 임시로 넣어둠 */
    }

    &.loan-item-3 img {
        width: 4.5rem;
        height: 4.25rem;
    }
`;

const StyledLoanItemInner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    align-items: start;
    h3 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
    }
    p {
        color: ${Styles.colors.natural70};
        font-size: ${Styles.font.size.fontsize13};
        font-weight: ${Styles.font.weight.regular};
        line-height: 0.9rem;
    }
    span {
        color: ${Styles.colors.systemWhite};
        font-size: ${Styles.font.size.fontsize10};
        font-weight: ${Styles.font.weight.regular};
        background-color: ${Styles.colors.primary100};
        padding: 0.2rem 0.4rem;
        border-radius: 1.5rem;
    }
`;

export default LoanContainer;
