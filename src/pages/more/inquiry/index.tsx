import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import { useState } from "react";
import InquiryRegistration from "./InquiryRegistration";
import styled from "styled-components";
import { Styles } from "@/style/Styles";
// import EmptyContent from "../component/EmptyContent";
// import Chat from "@/assets/images/icons/icon_emptychat.png";
import InquiryListItem from "../component/InquiryListItem";

const Inquiry = () => {
    // tab button
    const [currentTab, setCurrentTab] = useState<number>(0);
    const selectedMenuHandler = (index: number) => {
        setCurrentTab(index);
    };
    const tabMenuData = [
        { title: "상담 접수", content: <InquiryRegistration /> },
        {
            title: "상담 내역",
            content: (
                // 상담 내역이 있으면 InquiryListItem 컴포넌트, 없으면 EmptyContent 컴포넌트 표시
                <InquiryListItem />
                // <EmptyContent
                //     icon={<img src={Chat} alt="이메일 상담" />}
                //     message={`조회된 상담 내역이 없어요.`}
                // />
            ),
        },
    ];

    return (
        <AppLayout props={{ header: <AppBackHeader title="E-mail 상담" /> }}>
            <StyledInquiryWrap>
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
                <TabMenuContent>{tabMenuData[currentTab].content}</TabMenuContent>
            </StyledInquiryWrap>
        </AppLayout>
    );
};

const StyledInquiryWrap = styled.section`
    width: 100%;
    padding: 0.5rem 1rem 1rem 1rem;
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
    /* 상담 내역(InquiryListItem)이 있으면 padding: 1rem 0 0 0; */
    padding: 1.5rem 0 0 0;
`;

export default Inquiry;
