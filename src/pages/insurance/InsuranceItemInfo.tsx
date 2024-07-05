import { useState } from "react";
import styled from "styled-components";
import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";

import { Styles } from "@/style/Styles";

import { ArrowDownIcon, ArrowUpIcon, FireBuildingIcon } from "@/pages/insurance/_images/insurance";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import { useNavigate } from "react-router-dom";
import FixedButton from "@/components/button/FixedButton";

const data = [
    { id: 1, title: "필수가입 대상", details: "이것은 필수가입 대상의 세부 사항입니다." },
    {
        id: 2,
        title: "가입하지 않으면 생기는 일",
        details: "이것은 가입하지 않으면 생기는 일의 세부 사항입니다.",
    },
    { id: 3, title: "가입시점", details: "이것은 가입시점의 세부 사항입니다." },
];

const InsuranceItemInfo = () => {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const toggleOpen = (id: number) => {
        setOpenItems((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
        );
    };
    const navigate = useNavigate();

    const handleItemClick = () => {
        navigate(`/insurance/complete`);
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
                        <ul key={item.id}>
                            <StyledSummary onClick={() => toggleOpen(item.id)}>
                                <span>{item.title}</span>
                                <img
                                    src={openItems.includes(item.id) ? ArrowUpIcon : ArrowDownIcon}
                                    alt="toggle icon"
                                />
                            </StyledSummary>
                            {openItems.includes(item.id) && (
                                <StyledDetails>
                                    <p>{item.details}</p>
                                </StyledDetails>
                            )}
                        </ul>
                    ))}
                </StyledInfoWrapper>
                <FixedButton onClick={handleItemClick}>가입하기</FixedButton>
            </AppBaseWrapper>
        </AppLayout>
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

const StyledSummary = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 1rem 0;
    border-bottom: 1px solid ${Styles.colors.natural10};

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
    padding: 1.5rem 1rem;
    background-color: ${Styles.colors.systemBackground};

    p {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
        text-align: left;
    }
`;

export default InsuranceItemInfo;
