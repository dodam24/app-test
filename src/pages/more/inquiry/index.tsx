import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import styled from "styled-components";
import { Styles } from "@/style/Styles";
import { useState } from "react";
import useModal from "@/hooks/useModal";
import DynamicModal from "@/components/modal/DynamicModal";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";

const Inquiry = () => {
    const [isActive] = useState<boolean>(true);

    const { isOpen, openModal, closeModal } = useModal();

    return (
        <AppLayout props={{ header: <AppBackHeader title="E-mail 상담" /> }}>
            <StyledInquiryWrap>
                <TabMenuContainer>
                    <TabMenuButton className={isActive ? "active" : ""}>상담 접수</TabMenuButton>
                    <TabMenuButton>상담 내역</TabMenuButton>
                </TabMenuContainer>
                <TabMenuContent>
                    <StyledEmailInformation>
                        <span>답변 받을 이메일</span>
                        <p>so**@gmail.com</p>
                    </StyledEmailInformation>
                    <StyledInquiryContent>
                        <StyledLargeTitle>문의 내용</StyledLargeTitle>
                        <StyledTextFieldWrap>
                            <input
                                type="text"
                                id="inquiry_title"
                                name="inquiry_title"
                                placeholder="제목을 입력해 주세요."
                            />
                            <StyledTextLimit>
                                <span>(글자수)</span>
                                <span>/ 50자</span>
                            </StyledTextLimit>
                        </StyledTextFieldWrap>
                        <StyledTextFieldWrap>
                            <textarea
                                id="inquiry_content"
                                name="inquiry_content"
                                placeholder="내용을 입력해 주세요."
                            />
                            <StyledTextLimit>
                                <span>(글자수)</span>
                                <span> / 2,000자</span>
                            </StyledTextLimit>
                        </StyledTextFieldWrap>
                        <p className="announcement_text">
                            * 문의량이 많은 경우 답변이 늦어질 수 있는 점 참고 부탁드립니다. (영업일
                            기준 3일 소요)
                        </p>
                    </StyledInquiryContent>
                    {/* 버튼 컴포넌트(공통 컴포넌트) 적용 */}
                    <StyledInquiryButton onClick={openModal}>등록</StyledInquiryButton>

                    <DynamicModal open={isOpen} close={closeModal}>
                        <ConfirmationModal title="" />
                    </DynamicModal>
                </TabMenuContent>
            </StyledInquiryWrap>
        </AppLayout>
    );
};

const StyledInquiryWrap = styled.main`
    width: 100%;
    padding: 1rem;
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
    padding: 1.5rem 0 1rem 0;
`;
const StyledEmailInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 1rem;
    gap: 0.5rem;
    border-radius: 0.4rem;
    background: ${Styles.colors.systemBackground};

    span {
        color: ${Styles.colors.natural40};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
    }
    p {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
    }
`;
const StyledInquiryContent = styled.div`
    width: 100%;
    margin: 2rem 0 1.8rem 0;
    .announcement_text {
        padding: 0.5rem 0 0 0;
        color: ${Styles.colors.natural50};
        font-size: ${Styles.font.size.fontsize13};
        font-weight: ${Styles.font.weight.regular};
    }
`;
const StyledLargeTitle = styled.p`
    display: flex;
    align-items: center;
    color: ${Styles.colors.natural90};
    font-size: ${Styles.font.size.fontsize18};
    font-weight: ${Styles.font.weight.medium};
    line-height: 1.4;
`;
const StyledTextFieldWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin: 0.6rem 0;
    gap: 0.1rem;

    input {
        width: 100%;
        border-radius: 0.4rem;
        border: none;
        background: ${Styles.colors.systemBackground};
    }
    #inquiry_title {
        height: 2.3rem;
        padding: 0.55rem 0.8rem;
    }
    /* input content의 placeholder 맨 위로 */
    #inquiry_content {
        height: 9rem;
        padding: 0.8rem;
    }
`;
const StyledTextLimit = styled.div`
    display: flex;
    padding: 0 0.8rem;
    align-items: center;
    align-self: stretch;
    justify-content: end;

    span {
        text-align: right;
        color: ${Styles.colors.natural40};
        font-size: ${Styles.font.size.fontsize12};
        font-weight: ${Styles.font.weight.regular};
        line-height: 1.4;
    }
`;
const StyledInquiryButton = styled.button`
    width: 100%;
    display: flex;
    padding: 0.95rem 0;
    justify-content: center;
    align-items: center;
    border-radius: 0.4rem;
    background: ${Styles.colors.primary100};
    color: ${Styles.colors.systemWhite};
    font-size: ${Styles.font.size.fontsize15};
    font-weight: ${Styles.font.weight.semibold};
`;

export default Inquiry;
