import React from "react";
import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";

import { Styles } from "@/style/Styles";

import {
    ArrowIcon,
    EarthIcon,
    FireIcon,
    GasIcon,
    LockIcon,
} from "@/pages/insurance/_images/insurance";

const insuranceData = [
    {
        id: 1,
        mainIcon: FireIcon,
        title: "다중이용업소화재",
        head: "다중이용업소 화재 배상책임보험",
        description: "혹시라도 발생할 수 있는 사업장의\n 화재에 대비하세요.",
    },
    {
        id: 2,
        mainIcon: EarthIcon,
        title: "재난",
        head: "재난 배상책임보험",
        description: "내 가게에서 재난사고가 나면 어쩌죠?",
    },
    {
        id: 3,
        mainIcon: GasIcon,
        title: "가스사고",
        head: "가스사고 배상책임보험",
        description: "가스 사용할 때 항상 불안하시죠?",
    },
    {
        id: 4,
        mainIcon: LockIcon,
        title: "개인정보보호",
        head: "개인정보보호 배상책임보험",
        description: "개인정보 관련 사고 위험에 대비할 수\n 있어요.",
    },
];

const InsuranceItemList = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="대출상품" /> }}>
            <StyledItemListWrapper>
                <h2>선택하신 사업에 해당하는 필수가입보험</h2>
                {insuranceData.map((item) => (
                    <StyledItemListContainer key={item.id}>
                        <h3>{item.title}</h3>
                        <ul>
                            <li>
                                <StyledItemInner>
                                    <img className="main_icon" src={item.mainIcon} alt="" />
                                    <div>
                                        <h4>{item.head}</h4>
                                        <p>
                                            {item.description.split("\n").map((line, index) => (
                                                <React.Fragment key={index}>
                                                    {line}
                                                    {index !==
                                                        item.description.split("\n").length - 1 && (
                                                        <br />
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </p>
                                    </div>
                                </StyledItemInner>
                                <img src={ArrowIcon} alt="arrow icon" />
                            </li>
                        </ul>
                    </StyledItemListContainer>
                ))}
            </StyledItemListWrapper>
        </AppLayout>
    );
};

const StyledItemListWrapper = styled.div`
    width: 100%;

    h2 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
        line-height: 140%;
        padding: 1rem 1rem 0;
    }
`;

const StyledItemListContainer = styled.div`
    border-bottom: 0.6rem solid ${Styles.colors.systemBackground};
    padding: 1.5rem 1rem 1rem;
    h3 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize16};
        font-weight: ${Styles.font.weight.semibold};
    }
    ul {
        li {
            padding: 1rem 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            img {
                width: 1.2rem;
                height: 1.2rem;
            }
        }
    }
`;

const StyledItemInner = styled.div`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    .main_icon {
        width: 2.2rem;
        height: 2.2rem;
    }
    div {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        h4 {
            color: ${Styles.colors.natural80};
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.medium};
        }
        p {
            color: ${Styles.colors.natural80};
            font-size: ${Styles.font.size.fontsize14};
            font-weight: ${Styles.font.weight.regular};
        }
    }
`;

export default InsuranceItemList;
