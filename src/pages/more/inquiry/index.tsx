import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import styled from "styled-components";
import { Styles } from "@/style/Styles";
import { useState } from "react";
import useModal from "@/hooks/useModal";
import DynamicModal from "@/components/modal/DynamicModal";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";
import Cancel from "@/assets/images/icons/icon_cancel_c.png";

const Inquiry = () => {
    // 이메일 정보 가져오기 (test)
    const emailInfo: { email: string }[] = [{ email: "sosfsd**@gmail.com" }];

    const { isOpen, openModal, closeModal } = useModal();

    // 탭 버튼
    const [currentTab, setCurrentTab] = useState<number>(0);
    const selectedMenuHandler = (index: number) => {
        setCurrentTab(index);
    };
    const tabMenuData = [
        { title: "상담 접수", content: "Tab menu one" },
        { title: "상담 내역", content: "Tab menu two" },
    ];

    // 글자 수 카운트
    const [titleCount, setTitleCount] = useState<number>(0);
    const onTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleCount(e.target.value.length);
    };
    const [contentCount, setContentCount] = useState<number>(0);
    const onContentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContentCount(e.target.value.length);
    };

    // textarea 초기화
    const [inputValue, setInputValue] = useState("");
    const handleClear = () => {
        setInputValue("");
        setContentCount(0);
    };

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
                <TabMenuContent>
                    <StyledEmailInformation>
                        <span>답변 받을 이메일</span>
                        <p>{emailInfo[0].email}</p>
                    </StyledEmailInformation>
                    <StyledInquiryContent>
                        <StyledLargeTitle>문의 내용</StyledLargeTitle>
                        <StyledTextFieldWrap>
                            <input
                                type="text"
                                id="inquiry_title"
                                name="inquiry_title"
                                placeholder="제목을 입력해 주세요."
                                onChange={onTitleHandler}
                                maxLength={50}
                            />
                            <StyledTextLimit>
                                <span>{titleCount}</span>
                                <span>/ 50자</span>
                            </StyledTextLimit>
                        </StyledTextFieldWrap>
                        <StyledTextFieldWrap>
                            <div className="text_wrap">
                                <textarea
                                    id="inquiry_content"
                                    name="inquiry_content"
                                    placeholder="내용을 입력해 주세요."
                                    value={inputValue}
                                    onChange={(e) => {
                                        setInputValue(e.target.value);
                                        onContentHandler(e);
                                    }}
                                    maxLength={2000}
                                />
                                <button
                                    className="close_btn"
                                    type="reset"
                                    onClick={handleClear}
                                ></button>
                            </div>

                            <StyledTextLimit>
                                <span>{contentCount}</span>
                                <span>/ 2,000자</span>
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
                        <ConfirmationModal
                            title="등록 완료"
                            message={`답변은 입력하신 이메일로\n 발송될 예정입니다.`}
                            buttonText="확인"
                            close={closeModal}
                        />
                    </DynamicModal>
                </TabMenuContent>
            </StyledInquiryWrap>
        </AppLayout>
    );
};

const StyledInquiryWrap = styled.main`
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
    padding: 1.5rem 0 0 0;
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
        height: 2.3rem;
        padding: 0.55rem 0.8rem;
        outline: none;
        &::placeholder {
            color: ${Styles.colors.natural40};
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.regular};
            line-height: 1.4;
        }
    }

    .text_wrap {
        position: relative;
        width: 100%;

        & > textarea {
            width: 100%;
            height: 9rem;
            outline: none;
            border: none;
            background: ${Styles.colors.systemBackground};
            border-radius: 0.4rem;
            resize: none;
            padding: 0.8rem;

            &::placeholder {
                color: ${Styles.colors.natural40};
                font-size: ${Styles.font.size.fontsize15};
                font-weight: ${Styles.font.weight.regular};
                line-height: 1.4;
            }
            &:focus {
                border: 0.05rem solid ${Styles.colors.primary100};
            }
            &:focus + .close_btn {
                display: block;
            }
        }
        & > .close_btn {
            display: none;
            background: url(${Cancel}) no-repeat;
            width: 1rem;
            height: 1rem;
            background-size: 1rem 1rem;
            position: absolute;
            right: 5%;
            top: 45%;
        }
    }
`;
const StyledTextLimit = styled.div`
    display: flex;
    padding: 0 0.8rem;
    align-items: center;
    align-self: stretch;
    justify-content: end;
    gap: 0.1rem;

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
