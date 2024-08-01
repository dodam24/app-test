import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import { useState } from "react";
import InquiryRegistration from "./InquiryRegistration";
import styled from "styled-components";
import { Styles } from "@/style/Styles";
import EmptyContent from "../_component/EmptyContent";
import Chat from "@/assets/images/icons/icon_emptychat.png";
import InquiryListItem from "../_component/InquiryListItem";

export interface InquiryContents {
    id: string;
    title: string;
    content: string;
    reply_content: string;
    created_at: string;
    answered_at: string;
}

const Inquiry = () => {
    const [currentTab, setCurrentTab] = useState<number>(0);

    const inquiryData: InquiryContents[] = [
        {
            id: "1",
            title: "앱 사용 문의 드립니다.",
            content: "안녕하세요. 지금 소소상점에서 매입 매출이랑 직원관리는 못쓰는 건가요?",
            reply_content:
                "문의가 정상적으로 접수되었습니다.\n\n문의하신 내용을 확인 후 최대한 빠른 시일 내 답변드리겠습니다.\n\n감사합니다.",
            created_at: "2023. 03. 31",
            answered_at: "접수",
        },
        {
            id: "2",
            title: "test",
            content: "안녕하세요. 지금 소소상점에서 매입 매출이랑 직원관리는 못쓰는 건가요?",
            reply_content:
                "문의가 정상적으로 접수되었습니다.\n\n문의하신 내용을 확인 후 최대한 빠른 시일 내 답변드리겠습니다.\n\n감사합니다.",
            created_at: "2024. 06. 24",
            answered_at: "접수",
        },
    ];

    const selectedMenuHandler = (index: number) => {
        setCurrentTab(index);
    };
    const tabMenuData = [
        { title: "상담 접수", content: <InquiryRegistration /> },
        {
            title: "상담 내역",
            content:
                inquiryData.length > 0 ? (
                    inquiryData.map((inquiry) => (
                        <InquiryListItem key={inquiry.id} inquiry={inquiry} />
                    ))
                ) : (
                    <EmptyContent
                        icon={<img src={Chat} alt="이메일 상담" />}
                        message={`조회된 상담 내역이 없어요.`}
                    />
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
