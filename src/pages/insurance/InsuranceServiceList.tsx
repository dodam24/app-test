import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";

import { Styles } from "@/style/Styles";

import { ArrowIcon } from "@/pages/insurance/_images/insurance";
import FixedButton from "@/components/button/FixedButton";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import { useNavigate } from "react-router-dom";

const insuranceData = [
    {
        id: 1,
        title: "재난배상책임보험",
        company: "삼성생명",
        expiryDate: "2025-01-02",
    },
    {
        id: 2,
        title: "화재보험",
        company: "현대해상",
        expiryDate: "2024-07-15",
    },
    {
        id: 3,
        title: "건강보험",
        company: "동부화재",
        expiryDate: "2024-08-30",
    },
    {
        id: 3,
        title: "건강보험",
        company: "동부화재",
        expiryDate: "2024-08-30",
    },
];

const calculateDday = (expiryDate: string) => {
    const today = new Date();
    const expire = new Date(expiryDate);
    const diffTime = expire.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `D-${diffDays}`;
};

const InsuranceServiceList = () => {
    const navigate = useNavigate();

    const handleItemClick = () => {
        navigate(`/insurance`);
    };

    const handleListClick = (id: number) => {
        navigate(`/insurance/service/info/${id}`);
    };
    return (
        <AppLayout props={{ header: <AppBackHeader title="서류등록" /> }}>
            <AppBaseWrapper title={`보험 가입 서비스 확인하기`}>
                <StyledServiceInner>
                    {insuranceData.map((insurance) => (
                        <StyledServiceItem
                            key={insurance.id}
                            onClick={() => handleListClick(insurance.id)}
                        >
                            <h3>{insurance.title}</h3>
                            <StyledServiceItemInner>
                                <div>
                                    <h4>{insurance.company}</h4>
                                    <p>
                                        보험만료일 : {insurance.expiryDate}
                                        <span>({calculateDday(insurance.expiryDate)})</span>
                                    </p>
                                </div>
                                <img src={ArrowIcon} alt="" />
                            </StyledServiceItemInner>
                        </StyledServiceItem>
                    ))}
                </StyledServiceInner>

                <FixedButton onClick={handleItemClick}>추가보험 가입하기</FixedButton>
            </AppBaseWrapper>
        </AppLayout>
    );
};

const StyledServiceInner = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin: 1rem 0 4rem;
`;

const StyledServiceItem = styled.li`
    display: flex;
    flex-direction: column;
    border-radius: 0.4rem;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid ${Styles.colors.natural00};
    h3 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize16};
        font-weight: ${Styles.font.weight.semibold};
        padding: 0.85rem 0.8rem;
        border-bottom: 1px solid ${Styles.colors.natural10};
        width: 100%;
    }
`;

const StyledServiceItemInner = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 0.8rem;
    div {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        h4 {
            color: ${Styles.colors.natural90};
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.medium};
        }
        p {
            color: ${Styles.colors.natural50};
            font-size: ${Styles.font.size.fontsize13};
            font-weight: ${Styles.font.weight.regular};
            span {
                color: ${Styles.colors.brandOrange};
            }
        }
    }
    img {
        width: 1.2rem;
        height: 1.2rem;
    }
`;

export default InsuranceServiceList;
