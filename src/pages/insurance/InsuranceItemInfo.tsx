import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import FixedButton from "@/components/button/FixedButton";
import { IinsuranceInfo } from "@/interface/insurance/insurance";

import { Styles } from "@/style/Styles";
import { ArrowDownIcon, ArrowUpIcon, FireBuildingIcon } from "@/pages/insurance/_images/insurance";

const data: IinsuranceInfo[] = [
    { id: 1, title: "필수가입 대상", details: "이것은 필수가입 대상의 세부 사항입니다." },
    {
        id: 2,
        title: "가입하지 않으면 생기는 일",
        details: "이것은 가입하지 않으면 생기는 일의 세부 사항입니다.",
    },
    { id: 3, title: "가입시점", details: "이것은 가입시점의 세부 사항입니다." },
];

const InsuranceItemInfo = () => {
    const navigate = useNavigate();

    const handleItemClick = () => {
        navigate(`/insurance/complete`, { replace: true });
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="보험 서비스" /> }}>
            <AppBaseWrapper>
                <StyledInfoWrapper>
                    <h3>재난 배상책임보험</h3>
                    <img src={FireBuildingIcon} alt="" />
                    <div className="info_box">
                        <h4>내 가게에서 재난 사고가 나면 어쩌죠?</h4>
                        <p>
                            특히 1층 음식점, 숙박업 사장님들 주목하세요.
                            <br /> 필수가입 대상이 가입하지 않을 경우
                            <br /> 최대 300만원 과태료 부과!
                        </p>
                    </div>

                    {data.map((item) => (
                        <AccordionItem key={item.id} title={item.title} details={item.details} />
                    ))}
                </StyledInfoWrapper>
                <FixedButton onClick={handleItemClick}>가입하기</FixedButton>
            </AppBaseWrapper>
        </AppLayout>
    );
};

const AccordionItem = ({ title, details }: { title: string; details: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <StyledAccordionItem>
            <StyledSummary onClick={toggleOpen}>
                <span>{title}</span>
                <img src={isOpen ? ArrowUpIcon : ArrowDownIcon} alt="toggle icon" />
            </StyledSummary>
            <StyledDetails
                ref={contentRef}
                style={{ height: isOpen ? `${contentRef.current?.scrollHeight}px` : "0" }}
            >
                <p>{details}</p>
            </StyledDetails>
        </StyledAccordionItem>
    );
};

const StyledInfoWrapper = styled.div`
    text-align: center;
    margin-bottom: 4rem;

    h3 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize24};
        font-weight: ${Styles.font.weight.medium};
    }
    img {
        width: 6.5rem;
        margin: 2rem 0;
    }
    .info_box {
        padding: 1rem;
        text-align: left;
        box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.06);
        margin-bottom: 0.75rem;
        h4 {
            color: ${Styles.colors.natural90};
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.medium};
            margin: 0.2rem;
        }
        p {
            color: ${Styles.colors.natural60};
            font-size: ${Styles.font.size.fontsize14};
            font-weight: ${Styles.font.weight.regular};
            line-height: 0.9rem;
        }
    }
`;

const StyledAccordionItem = styled.div`
    /* padding: 0.5rem 0; */
    border-bottom: 1px solid ${Styles.colors.natural10};
`;

const StyledSummary = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 1rem 0;
    list-style: none;

    span {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.medium};
    }

    img {
        width: 1.2rem;
        height: 1.2rem;
        margin: 0;
    }
`;

const StyledDetails = styled.div`
    overflow: hidden;
    transition: height 0.3s ease;
    background-color: ${Styles.colors.systemBackground};
    border-radius: 0.4rem;

    p {
        padding: 1.5rem 1rem;
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
        text-align: left;
        margin: 0;
    }
`;

export default InsuranceItemInfo;
