import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import { Styles } from "@/style/Styles";
import { useState } from "react";
import styled from "styled-components";
import Chat from "@/assets/images/icons/icon_emptychat.png";
// import Email from "@/assets/images/icons/icon_email_c.png";
import EmptyPageComponent from "../component/EmptyComponent";

const InquiryEmptyList = () => {
    // 탭 버튼
    const [currentTab, setCurrentTab] = useState<number>(0);
    const selectedMenuHandler = (index: number) => {
        setCurrentTab(index);
    };
    const tabMenuData = [
        { title: "상담 접수", content: "Tab menu one" },
        { title: "상담 내역", content: "Tab menu two" },
    ];

    return (
        <AppLayout props={{ header: <AppBackHeader title="E-mail 상담" /> }}>
            <StyledInquiryEmptyListWrap>
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
                <TabMenuContent>
                    {/* Empty Component */}
                    {/* 조건: 상담 내역을 클릭했을 때, 상담 내역이 없으면 Empty Component 표시 */}
                    {currentTab === 0 ? (
                        <div>상담 접수 content</div>
                    ) : (
                        <EmptyPageComponent
                            icon={<img src={Chat} alt="이메일 상담" />}
                            message={`조회된 상담 내역이 없어요.`}
                        />
                    )}
                </TabMenuContent>
            </StyledInquiryEmptyListWrap>
        </AppLayout>
    );
};

const StyledInquiryEmptyListWrap = styled.main`
    width: 100%;
    padding: 0.5rem 1rem;
`;
const TabMenuContainer = styled.div`
    display: flex;
    width: 100%;
`;
const TabMenuButton = styled.button`
    width: 50%;
    padding: 1rem 1.7rem 0.5rem 1.7rem;
    border-bottom: 0.1rem solid ${Styles.colors.primary100};
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
    height: calc(100vh - 14rem);
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    & > .empty_component {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.6rem;

        img {
            width: 4.5rem;
            height: 4.5rem;
        }
        p {
            color: ${Styles.colors.natural40};
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.regular};
        }
    }
`;
// 이미지 모달 CSS (임시)

export default InquiryEmptyList;
