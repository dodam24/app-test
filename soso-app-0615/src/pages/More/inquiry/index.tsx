import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import styled from "styled-components";
import { Styles } from "@/style/Styles";
import { useState } from "react";

const Inquiry = () => {
    const [isActive] = useState(true);

    // 텍스트 제한
    const [inputCount, setInputCount] = useState(0);
    const onInputHandler = (e) => {
        setInputCount(e.target.value.length);
    };

    // content input box 임시
    // interface InputFieldProps {
    //     element: "input" | "textarea";
    //     label: string;
    //     // input에 type 어트리뷰트의 모든 문자열 값을 유니온 타입으로 사용
    //     type: React.HTMLInputTypeAttribute;
    //     placeholder: string;
    // }

    return (
        <AppLayout props={{ header: <AppBackHeader title="E-mail 상담" /> }}>
            <StyledInquiryWrap>
                {/* TabMenu 컴포넌트 빼기 */}
                <TabMenuContainer>
                    <TabMenuButton className={isActive ? "active" : ""}>상담 접수</TabMenuButton>
                    <TabMenuButton>상담 내역</TabMenuButton>
                </TabMenuContainer>

                <TabMenuContent>
                    {/* 이메일 정보 */}
                    <StyledEmailInformation>
                        <p className="title">답변 받을 이메일</p>
                        <p className="information">so**@gmail.com</p>
                    </StyledEmailInformation>

                    <div className="content_container">
                        {/* large title 컴포넌트로 빼기 */}
                        <StyledLargeTitle>문의 내용</StyledLargeTitle>
                        {/* text field 컴포넌트 하나로 빼기 */}
                        <TextFieldWrap>
                            <TextField>
                                <input type="text" placeholder="제목을 입력해 주세요." />
                                <TextConstraint onChange={onInputHandler} maxLength="50">
                                    <TextConstraintInner>
                                        <span className="text">{inputCount}</span>
                                        <span className="text"> / 50자</span>
                                    </TextConstraintInner>
                                </TextConstraint>
                            </TextField>
                        </TextFieldWrap>
                        {/* content field (text field랑 동일) */}
                        <InputBox>
                            <input type="textarea" placeholder="내용을 입력해 주세요." />
                            {/* <Label htmlFor={type}>{label}</Label> */}
                            {/* <UserInput
                            element={element}
                            id={type}
                            type={type}
                            placeholder={placeholder}
                        /> */}
                            <TextConstraint onChange={onInputHandler} maxLength="2000">
                                <TextConstraintInner>
                                    <span className="text">{inputCount}</span>
                                    <span className="text"> / 2,000자</span>
                                </TextConstraintInner>
                            </TextConstraint>
                        </InputBox>
                    </div>

                    {/* 안내 문구 */}
                    <StyledAnnouncement>
                        <p>
                            * 문의량이 많은 경우 답변이 늦어질 수 있는 점 참고 부탁드립니다. (영업일
                            기준 3일 소요)
                        </p>
                    </StyledAnnouncement>

                    {/* 버튼 컴포넌트 넣기 */}
                    <Button>등록</Button>
                </TabMenuContent>
            </StyledInquiryWrap>
        </AppLayout>
    );
};

export default Inquiry;

const StyledInquiryWrap = styled.main`
    width: 100%;
    padding: 1rem;
`;
// Tab Menu
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
    .content_container {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
    }
`;
const StyledEmailInformation = styled.div`
    display: flex;
    width: 100%;
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    border-radius: 0.4rem;
    background: ${Styles.colors.systemBackground};
    margin: 1.5rem 0 2rem 0;

    .title {
        align-self: stretch;
        color: ${Styles.colors.natural40};
        font-size: 0.7rem;
        font-weight: ${Styles.font.weight.regular};
    }

    .information {
        align-self: stretch;
        color: ${Styles.colors.natural90};
        font-size: 0.9rem;
        font-weight: ${Styles.font.weight.medium};
    }
`;

// large title 컴포넌트
const StyledLargeTitle = styled.div`
    display: flex;
    width: 100%;
    align-items: center;

    color: ${Styles.colors.natural90};
    font-size: ${Styles.font.size.fontsize18};
    font-weight: ${Styles.font.weight.medium};
    line-height: 1.4;
    flex: 1 0 0;
`;
// text field 컴포넌트
const TextFieldWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const TextField = styled.div`
    input {
        width: 100%;
        height: 2.3rem;
        padding: 0.55rem 0.8rem;
        align-items: center;
        gap: 0.4rem;
        border-radius: 0.4rem;
        border: none;
        background: ${Styles.colors.systemBackground};

        & > ::placeholder {
            color: ${Styles.colors.natural40};
            color: ${Styles.colors.natural40};
            font-size: 0.75rem;
            font-weight: ${Styles.font.weight.regular};
        }
    }
`;
const TextConstraint = styled.div`
    display: flex;
    padding: 0 0.8rem;
    align-items: center;
    align-self: stretch;
    justify-content: flex-end;
`;
const TextConstraintInner = styled.div`
    .text {
        color: ${Styles.colors.natural40};
        font-size: ${Styles.font.size.fontsize12};
        font-weight: ${Styles.font.weight.regular};
        line-height: 1.4;
    }
`;

// content input 박스(임시)
const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 9rem;
    padding: 0.8rem;
    align-items: flex-start;
    border-radius: 0.4rem;
    background: ${Styles.colors.systemBackground};

    input {
        border: none;
    }
`;
const UserInput = styled.div``;

// 안내 문구
const StyledAnnouncement = styled.div`
    padding: 1.1rem 0 1.8rem 0;
    p {
        color: ${Styles.colors.natural50};
        font-size: 0.65rem;
        font-weight: ${Styles.font.weight.regular};
    }
`;
const Button = styled.button`
    width: 100%;
    display: flex;
    padding: 0.95rem 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.4rem;
    background: ${Styles.colors.primary100};
    color: ${Styles.colors.systemWhite};
    font-size: 0.75rem;
    font-weight: ${Styles.font.weight.semibold};
`;
