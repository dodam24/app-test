import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import styled from "styled-components";
import { Styles } from "@/style/Styles";
import EnabledButton from "@/components/button/EnabledButton";
import { CardIcon, ChartIcon, WalletIcon } from "@/pages/loan/_images/loanImg";

interface LoanData {
    title: string;
    description: string;
    img: string;
}

const dummyLoanData: LoanData[] = [
    {
        img: ChartIcon,
        title: "대출 설명",
        description:
            "소소상점을 이용하는 소상공인의 PG / VAN / 배달플랫폼 매출데이터를 바탕으로 매출을 분석하여 대출액 측정 후 한도와 기간을 설정하여 대출진행",
    },
    {
        img: CardIcon,
        title: "대출 상환 방식",
        description: "원리금 균등상환방식 (단기) 매출채권 담보를 통해 일납하는 방식",
    },
];

const LoanItemInfo = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="대출상품" /> }}>
            <StyledItemInfoWrapper>
                <StyledInfoInner>
                    <h3>
                        소소상점을 이용하는
                        <br /> 소상공인들을 위한 소상공인론
                    </h3>
                    <img src={WalletIcon} alt="" />

                    <ul>
                        <li>
                            <h3>금리</h3>
                            <span>14~15%</span>
                        </li>
                        <li>
                            <h3>한도</h3>
                            <span>300만원~1천만원</span>
                        </li>
                    </ul>
                </StyledInfoInner>
                <StyledInfoBox>
                    {dummyLoanData.map((item, index) => (
                        <StyledInfoSection key={index}>
                            <img src={item.img} alt={item.title} />
                            <div>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </StyledInfoSection>
                    ))}
                </StyledInfoBox>
                <EnabledButton title="대출 신청하기" />
            </StyledItemInfoWrapper>
        </AppLayout>
    );
};

const StyledItemInfoWrapper = styled.div`
    width: 100%;
    padding: 1rem 1rem 0;
`;

const StyledInfoInner = styled.section`
    text-align: center;
    h3 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize24};
        font-weight: ${Styles.font.weight.medium};
    }
    img {
        margin: 2rem 0;
        width: 6.5rem;
        height: 6.1rem;
    }

    ul {
        display: flex;
        gap: 0.5rem;
        width: 100%;
        li {
            position: relative;
            width: 100%;

            &:first-child::before {
                content: "";
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                border-right: 1px solid ${Styles.colors.natural20};
            }

            h3 {
                color: ${Styles.colors.natural50};
                font-size: ${Styles.font.size.fontsize14};
                font-weight: ${Styles.font.weight.medium};
                margin-bottom: 0.5rem;
            }
            span {
                color: ${Styles.colors.natural90};
                font-size: ${Styles.font.size.fontsize20};
                font-weight: ${Styles.font.weight.medium};
            }
        }
    }
`;
const StyledInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1.5rem;
    margin-top: 1.5rem;
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.06);
`;
const StyledInfoSection = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    img {
        width: 2rem;
        height: 2rem;
    }
    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.2rem;
        h4 {
            color: ${Styles.colors.natural90};
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.medium};
        }
        p {
            color: ${Styles.colors.natural60};
            font-size: ${Styles.font.size.fontsize14};
            font-weight: ${Styles.font.weight.regular};
        }
    }
`;
export default LoanItemInfo;
