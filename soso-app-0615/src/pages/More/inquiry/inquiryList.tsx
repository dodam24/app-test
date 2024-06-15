import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import { Styles } from "@/style/Styles";
import styled from "styled-components";

import arrowDown from "@/assets/images/icons/icon_arrowDown.png";
import { useState } from "react";

// TabMenu 컴포넌트로 빼기
const InquiryList = () => {
    const [isActive] = useState(true);

    return (
        <AppLayout props={{ header: <AppBackHeader title="E-mail 상담" /> }}>
            <StyledInquiryListWrap>
                <TabMenuContainer>
                    <TabMenuButton>상담 접수</TabMenuButton>
                    <TabMenuButton className={isActive ? "active" : ""}>상담 내역</TabMenuButton>
                </TabMenuContainer>
                <TabMenuContent>
                    <div>
                        <InquiryListItem>
                            <div className="list_item_title">
                                <div>
                                    <h5>앱 사용 문의 드립니다.</h5>
                                    <span>2023. 03. 31 |</span>
                                    <span className="state">&nbsp;접수</span>
                                </div>
                                <span>
                                    <img src={arrowDown} alt="아래 화살표" />
                                </span>
                            </div>

                            {/* title 클릭하면 Inner(content) 보이도록 설정 */}
                            <InquiryListItemInner>
                                <div>
                                    <p>
                                        안녕하세요. 지금 소소상점에서 매입 매출이랑 직원관리는
                                        못쓰는 건가요?
                                    </p>
                                    <InquiryStatusContainer>
                                        <h5>문의가 정상적으로 접수되었습니다.</h5>
                                        <p>
                                            문의하신 내용을 확인 후 최대한 빠른 시일 내
                                            답변드리겠습니다.
                                            <br />
                                            감사합니다.
                                        </p>
                                    </InquiryStatusContainer>
                                </div>
                            </InquiryListItemInner>
                        </InquiryListItem>
                    </div>
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
    display: flex;
    width: 100%;
`;
const TabMenuButton = styled.button`
    border-bottom: 0.1rem solid ${Styles.colors.primary100};
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
    margin-top: 1rem;
`;
const InquiryListItem = styled.div`
    display: flex;
    width: 100%;
    gap: 0.6rem;
    padding: 1rem 0;
    border-bottom: 1px solid ${Styles.colors.natural10};
    flex-direction: column;

    /* list item의 title */
    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h5 {
            color: ${Styles.colors.natural90};
            font-size: ${Styles.font.size.fontsize16};
            font-weight: ${Styles.font.weight.medium};
        }
        span {
            font-size: ${Styles.font.size.fontsize13};
            font-weight: ${Styles.font.weight.regular};
            color: ${Styles.colors.natural50};
            &.state {
                color: ${Styles.colors.secondary100};
            }
        }
        img {
            width: 1.2rem;
            height: 1.2rem;
        }
    }
`;
// list item의 content
const InquiryListItemInner = styled.div`
    display: flex;
    gap: 1rem;

    p {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
        line-height: 1.4;
        padding: 0.65rem 0;
        margin-bottom: 1rem;
    }
`;
const InquiryStatusContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 1.5rem 0.8rem;
    flex-direction: column;
    gap: 0.6rem;
    border-radius: 0.4rem;
    background: ${Styles.colors.systemBackground};

    h5 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize16};
        font-weight: ${Styles.font.weight.medium};
    }
    & > p {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
        line-height: 1.4;
        padding: 0;
        margin-bottom: 0;
    }
`;
export default InquiryList;
