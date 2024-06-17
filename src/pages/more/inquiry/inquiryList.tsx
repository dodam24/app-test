import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import { Styles } from "@/style/Styles";
import { useState } from "react";
import styled from "styled-components";
import ArrowDown from "@/assets/images/icons/icon_arrowDown.png";

const InquiryList = () => {
    // 화살표 아이콘 누르면 회전하면서 내용 보여주기
    const inquiryData = [
        {
            title: "앱 사용 문의 드립니다.",
            date: "2023. 03. 31",
            content: "안녕하세요. 지금 소소상점에서 매입 매출이랑 직원관리는 못쓰는 건가요?",
            state: "접수",
        },
        // {
        //     title: "앱 사용 문의 드립니다.",
        //     date: "2023. 03. 31",
        //     content: "안녕하세요. 지금 소소상점에서 매입 매출이랑 직원관리는 못쓰는 건가요?",
        //     state: "접수",
        // },
    ];

    const [isActive] = useState<boolean>(true);
    return (
        <AppLayout props={{ header: <AppBackHeader title="E-mail 상담" /> }}>
            <StyledInquiryListWrap>
                <TabMenuContainer>
                    <TabMenuButton className={isActive ? "active" : ""}>상담 접수</TabMenuButton>
                    <TabMenuButton>상담 내역</TabMenuButton>
                </TabMenuContainer>
                <TabMenuContent>
                    {inquiryData.map((item, index) => (
                        <InquiryListItem key={index}>
                            <InquiryListItemTitle>
                                <div className="item_title">
                                    <h5>{item.title}</h5>
                                    <div className="title_details">
                                        <span>{item.date}</span>
                                        <span>|</span>
                                        <span className="inquiry_state">{item.state}</span>
                                    </div>
                                </div>
                                <span className="item_icon">
                                    <img src={ArrowDown} alt="화살표" />
                                </span>
                            </InquiryListItemTitle>
                            <InquiryListItemContent>
                                <p>
                                    안녕하세요. 지금 소소상점에서 매입 매출이랑 직원관리는 못쓰는
                                    건가요?
                                </p>
                                <StyledInquiryStateContainer>
                                    <h5>문의가 정상적으로 접수되었습니다.</h5>
                                    <p>
                                        문의하신 내용을 확인 후 최대한 빠른 시일 내
                                        답변드리겠습니다. <br />
                                        <br />
                                        감사합니다.
                                    </p>
                                </StyledInquiryStateContainer>
                            </InquiryListItemContent>
                        </InquiryListItem>
                    ))}
                </TabMenuContent>
            </StyledInquiryListWrap>
        </AppLayout>
    );
};

const StyledInquiryListWrap = styled.main`
    width: 100%;
    padding: 0.5rem 1rem 0 1rem;
`;
const TabMenuContainer = styled.div`
    width: 100%;
    display: flex;
`;
const TabMenuButton = styled.button`
    width: 50%;
    padding: 1rem 1.7rem 0.5rem 1.7rem;
    color: ${Styles.colors.natural40};
    font-size: ${Styles.font.size.fontsize15};
    font-weight: ${Styles.font.weight.medium};
    border-bottom: 1px solid ${Styles.colors.natural10};

    &.active {
        color: ${Styles.colors.primary100};
        border-bottom: 2px solid ${Styles.colors.primary100};
    }
`;
const TabMenuContent = styled.div`
    width: 100%;
    padding: 1rem 0;
`;
const InquiryListItem = styled.li`
    list-style: none;
    width: 100%;
    border-bottom: 0.05rem solid ${Styles.colors.natural10};
`;
const InquiryListItemTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .item_title {
        display: flex;
        flex-direction: column;
        padding: 1rem 0;
        width: 100%;
        h5 {
            color: ${Styles.colors.natural90};
            font-size: ${Styles.font.size.fontsize16};
            font-weight: ${Styles.font.weight.medium};
        }
        .title_details {
            & > span {
                margin: 0.1rem;
                font-size: ${Styles.font.size.fontsize13};
                font-weight: ${Styles.font.weight.regular};
                color: ${Styles.colors.natural50};
                &.inquiry_state {
                    color: ${Styles.colors.secondary100};
                }
            }
        }
    }
    .item_icon {
        width: 1.2rem;
        height: 1.2rem;
        img {
            width: 100%;
            transition: transform 0.3s ease-in-out;
            transform: rotate(0deg);
        }
    }
    &.active {
        .item_icon img {
            transform: rotate(180deg);
        }
    }
`;
const InquiryListItemContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & > p {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
        line-height: 1.4;
        padding: 0.65rem 0;
    }
`;
const StyledInquiryStateContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 0.6rem;
    border-radius: 0.4rem;
    background: ${Styles.colors.systemBackground};
    padding: 1.5rem 0.8rem;

    & > h5 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize16};
        font-weight: ${Styles.font.weight.medium};
    }
    & > p {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
        line-height: 1.4;
    }
`;

export default InquiryList;
