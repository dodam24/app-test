import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import { Styles } from "@/style/Styles";
import { useState } from "react";
import styled from "styled-components";
import ArrowDown from "@/assets/images/icons/icon_arrowDown.png";

const InquiryList = () => {
    // 탭 버튼
    const [currentTab, setCurrentTab] = useState<number>(0);
    const selectedMenuHandler = (index: number) => {
        setCurrentTab(index);
    };
    const tabMenuData = [
        { title: "상담 접수", content: "Tab menu one" },
        { title: "상담 내역", content: "Tab menu two" },
    ];

    // List 데이터
    const inquiryData = [
        {
            title: "앱 사용 문의 드립니다.",
            date: "2023. 03. 31",
            content: "안녕하세요. 지금 소소상점에서 매입 매출이랑 직원관리는 못쓰는 건가요?",
            state: "접수",
        },
    ];

    return (
        <AppLayout props={{ header: <AppBackHeader title="E-mail 상담" /> }}>
            <StyledInquiryListWrap>
                <TabMenuContainer>
                    {tabMenuData.map((el, index) => (
                        <TabMenuButton
                            key={index}
                            className={index === currentTab ? "active" : ""}
                            onClick={() => selectedMenuHandler(index)}
                        >
                            {el.title}
                        </TabMenuButton>
                    ))}
                </TabMenuContainer>
                {/* 탭 메뉴 내용 test */}
                {/* {tabMenuData[currentTab].content} */}
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
                                <button className="item_icon">
                                    <img src={ArrowDown} alt="화살표" />
                                </button>
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
    border-bottom: 2px solid ${Styles.colors.natural10};

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
        gap: 0.6rem;
        h5 {
            color: ${Styles.colors.natural90};
            font-size: ${Styles.font.size.fontsize16};
            font-weight: ${Styles.font.weight.medium};
        }
        .title_details {
            display: flex;
            span {
                margin-right: 0.2rem;
                color: ${Styles.colors.natural50};
                font-size: ${Styles.font.size.fontsize13};
                font-weight: ${Styles.font.weight.regular};
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
    margin-bottom: 1rem;

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
