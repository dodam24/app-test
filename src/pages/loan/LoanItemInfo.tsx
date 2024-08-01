import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import dummyLoanData from "@/pages/loan/_data/loanData";
import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import FixedButton from "@/components/button/FixedButton";

import { Styles } from "@/style/Styles";

const LoanItemInfo = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const loanData = dummyLoanData.find((loan) => loan.id === Number(id));

    if (!loanData) {
        return <div>존재하지 않는 대출 상품입니다.</div>;
    }

    const handleApplyButtonClick = () => {
        navigate("/loan/terms", { replace: true });
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="대출상품" /> }}>
            <AppBaseWrapper>
                <StyledInfoInner>
                    <h3>{loanData.title}</h3>
                    <img src={loanData.img} alt="" />

                    <ul>
                        <li>
                            <h3>금리</h3>
                            <span>{loanData.interestRate} </span>
                        </li>
                        <li>
                            <h3>한도</h3>
                            <span>{loanData.limit} </span>
                        </li>
                    </ul>
                </StyledInfoInner>
                <StyledInfoBox>
                    {loanData.details.map((detail, index) => (
                        <div className="info_boxItem" key={index}>
                            <img src={detail.img} alt={detail.title} />
                            <div>
                                <h4>{detail.title}</h4>
                                <p>{detail.description}</p>
                            </div>
                        </div>
                    ))}
                </StyledInfoBox>
                <FixedButton onClick={handleApplyButtonClick}>대출 신청하기</FixedButton>
            </AppBaseWrapper>
        </AppLayout>
    );
};

const StyledInfoInner = styled.div`
    text-align: center;
    h3 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize24};
        font-weight: ${Styles.font.weight.medium};
        white-space: pre-wrap;
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
    margin-bottom: 4rem;
    .info_boxItem {
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
                line-height: 0.9rem;
            }
        }
    }
`;

export default LoanItemInfo;
