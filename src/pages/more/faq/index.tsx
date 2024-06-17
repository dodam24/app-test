import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import { Styles } from "@/style/Styles";
import styled from "styled-components";
import Search from "@/assets/images/icons/icon_search.png";
import RightArrow from "@/assets/images/icons/icon_rightArrow.png";
import Email from "@/assets/images/icons/icon_email.png";
import Phone from "@/assets/images/icons/icon_phone.png";
import { useState } from "react";

const Faq = () => {
    // 탭 메뉴
    const tabData = [
        { title: "앱 이용", content: "앱 이용" },
        { title: "정산내역", content: "정산내역" },
        { title: "직원관리", content: "직원관리" },
        { title: "매입 · 매출", content: "매입 · 매출" },
        { title: "기타", content: "기타" },
    ];
    const [currentTab, setCurrentTab] = useState(0);
    const selectedMenuHandler = (index: number) => {
        setCurrentTab(index);
    };

    // FAQ 리스트
    const faqList = [
        { title: "소소상점 설치 및 사용이 가능한 스마트 폰이 따로 있나요?" },
        { title: "개인정보 필수 수집·이용 동의를 철회하고 싶어요." },
        { title: "앱 알림이 울리지 않아요." },
        { title: "비밀번호를 바꾸고 싶어요." },
        { title: "2대 이상의 스마트폰에서 동시에 이용할 수 있나요?" },
        { title: "휴대폰 번호를 바꿨는데 회원정보를 변경할 수 있나요?" },
    ];
    return (
        <AppLayout props={{ header: <AppBackHeader title="고객센터" /> }}>
            <StyledFaqWrap>
                {/* 검색바 */}
                <SearchTextField>
                    <input type="text" placeholder="궁금한 점을 검색해보세요." />
                    <button className="btn_search">
                        <img src={Search} alt="검색" />
                    </button>
                </SearchTextField>

                {/* 탭 메뉴 */}
                <TabButtonContainer>
                    {tabData.map((item, index) => {
                        return (
                            <TabButton
                                key={index}
                                onClick={() => selectedMenuHandler(index)}
                                className={currentTab === index ? "active" : ""}
                            >
                                {item.title}
                            </TabButton>
                        );
                    })}
                </TabButtonContainer>
                <TabButtonContent>
                    <h3>{tabData[currentTab].content}</h3>
                    <span>총 {faqList.length}건</span>
                </TabButtonContent>
                {/* FAQ 리스트를 tab content 안에 넣기 */}

                {/* FAQ 리스트 */}
                <StyledFaqListWrap>
                    {faqList.map((item, index) => {
                        return (
                            <StyledFaqListItem key={index}>
                                <StyledFaqListItemInner>
                                    <h5>Q</h5>
                                    <p>{item.title}</p>
                                    <button className="show_more_btn">
                                        <img src={RightArrow} alt="더보기" />
                                    </button>
                                </StyledFaqListItemInner>
                            </StyledFaqListItem>
                        );
                    })}
                </StyledFaqListWrap>
            </StyledFaqWrap>

            {/* 고객 서비스 container */}
            <StyledCustomerServiceContainer>
                <StyledCustomerServiceItem>
                    <div>
                        <h3>E-mail 상담</h3>
                        <p>영업일 기준 3일 이상 소요</p>
                    </div>
                    <span>
                        <img src={Email} alt="이메일" />
                    </span>
                </StyledCustomerServiceItem>
                <StyledCustomerServiceItem>
                    <div>
                        <div>
                            <h3>소소상점 고객센터</h3>
                            <span>1833-4854</span>
                        </div>
                        <p>오전 9시~ 오후 6시 (주말/공휴일 휴무)</p>
                    </div>
                    <span>
                        <img src={Phone} alt="전화번호" />
                    </span>
                </StyledCustomerServiceItem>
            </StyledCustomerServiceContainer>
        </AppLayout>
    );
};

const StyledFaqWrap = styled.main`
    position: relative;

    width: 100%;
    padding: 1rem;
`;
const SearchTextField = styled.div`
    width: 100%;
    display: flex;
    height: 2.3rem;
    padding: 0.55rem 0.8rem;
    align-items: center;
    gap: 0.4rem;
    border-radius: 0.4rem;
    background: ${Styles.colors.systemBackground};

    input {
        flex: 1 0 0;
        border: none;
        background: ${Styles.colors.systemBackground};

        & > ::placeholder {
            color: ${Styles.colors.natural40};
            font-size: 0.75rem;
            font-weight: ${Styles.font.weight.regular};
        }
    }
    .btn_search {
        & > img {
            display: flex;
            width: 1.2rem;
            height: 1.2rem;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
        }
    }
`;
const TabButtonContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 1.6rem 0 2rem 0;
    gap: 9px;
    flex-wrap: wrap;
`;
const TabButton = styled.button`
    padding: 0.5rem 1rem;
    border: 0.05rem solid ${Styles.colors.secondary100};
    border-radius: 4.95rem;
    background: ${Styles.colors.systemWhite};
    color: ${Styles.colors.secondary100};
    font-size: ${Styles.font.size.fontsize15};
    font-weight: ${Styles.font.weight.regular};
    cursor: pointer;

    &.active {
        color: ${Styles.colors.systemWhite};
        background: ${Styles.colors.secondary100};
    }
`;
const TabButtonContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > h3 {
        color: ${Styles.colors.natural90};
        font-size: 0.9rem;
        font-weight: ${Styles.font.weight.medium};
        line-height: 1.4;
    }
    & > span {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize12};
        font-weight: ${Styles.font.weight.regular};
        line-height: 1.4;
    }
`;

// FAQ 리스트
const StyledFaqListWrap = styled.div`
    margin-top: 0.5rem;
    width: 100%;
`;
const StyledFaqListItem = styled.li`
    list-style: none;
`;
const StyledFaqListItemInner = styled.div`
    display: flex;
    padding: 1rem 0;

    h5 {
        width: 1.2rem;
        height: 1.2rem;
        flex-shrink: 0;
        color: ${Styles.colors.primary100};
        text-align: center;
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
    }
    p {
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize16};
        font-weight: ${Styles.font.weight.regular};
        line-height: 1.4;
        padding: 0 1rem 0 0.6rem;
    }
    .show_more_btn {
        padding: 0;
        img {
            width: 1.2rem;
            height: 1.2rem;
            flex-shrink: 0;
        }
    }
`;

// 고객 서비스 container
const StyledCustomerServiceContainer = styled.div`
    padding: 1.8rem 1rem 2.4rem 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
`;
const StyledCustomerServiceItem = styled.div`
    display: flex;
    width: 100%;
    padding: 1.2rem 1rem;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.4rem;
    background: ${Styles.colors.systemBackground};

    & > div {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        h3 {
            color: ${Styles.colors.natural90};
            font-size: ${Styles.font.size.fontsize18};
            font-weight: ${Styles.font.weight.semibold};
        }
        span {
            color: ${Styles.colors.primary100};
            font-size: ${Styles.font.size.fontsize18};
            font-weight: ${Styles.font.weight.medium};
        }
        p {
            color: ${Styles.colors.natural50};
            font-size: ${Styles.font.size.fontsize13};
            font-weight: ${Styles.font.weight.regular};
        }
    }

    & > span {
        display: flex;
        align-items: center;
        width: 2.2rem;
        height: 2.2rem;
        img {
            width: 100%;
            padding: 0.25rem;
            flex-shrink: 0;
        }
    }
`;
export default Faq;
