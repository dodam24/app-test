import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import { useState } from "react";
import { Styles } from "@/style/Styles";
import styled from "styled-components";
import InquiryListItem from "../component/InquiryListItem";

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
                    <InquiryListItem />
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

export default InquiryList;
