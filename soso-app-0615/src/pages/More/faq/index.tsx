import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import { Styles } from "@/style/Styles";
import styled from "styled-components";
import Search from "@/assets/images/icons/icon_search.png";
import RightArrow from "@/assets/images/icons/icon_rightArrow.png";
import Email from "@/assets/images/icons/icon_email.png";

const Faq = () => {
    // footer 부분 customerService 컴포넌트로 빼기(조건에 따라 전화번호 표시 여부 설정)
    // interface FaqFooterProps {
    //     title: string;
    //     contact?: string;
    //     content: string;
    // }

    // SearchTextField(검색바) 임시 속성 지정
    // const [isInputClicked, setIsInputClicked] = useState(false);
    // const [isActive] = useState(false);

    return (
        <AppLayout props={{ header: <AppBackHeader title="고객센터" /> }}>
            <StyledFaqWrap>
                {/* SearchTextField 나중에 inputbox 컴포넌트로 뺄 것 */}
                <SearchTextField>
                    <SearchTextFieldInner>
                        <input
                            type="text"
                            // placeholder={isInputClicked === true ? "" : "궁금한 점을 검색해보세요."}
                            placeholder="궁금한 점을 검색해보세요."
                            // onFocus={() => {
                            //     setIsInputClicked(true);
                            // }}
                            // onBlur={() => {
                            //     setIsInputClicked(false);
                            // }}
                        />
                        <button className="btn_search">
                            <img src={Search} alt="검색버튼" />
                        </button>
                    </SearchTextFieldInner>
                </SearchTextField>

                {/* TabButton 컴포넌트로 빼기 */}
                <TabButtonContainer>
                    {/* <TabButton className={isActive ? "active" : ""}>앱 이용</TabButton> */}
                    <TabButton>앱 이용</TabButton>
                    <TabButton>정산내역</TabButton>
                    <TabButton>직원관리</TabButton>
                    <TabButton>매입 · 매출</TabButton>
                    <TabButton>기타</TabButton>
                </TabButtonContainer>

                <StyledFaqContentContainer>
                    {/* StyledFaqContentTitle은 largeTitle 컴포넌트로 빼기 */}
                    <StyledFaqContentTitle>
                        <h3 className="title">앱 이용</h3>
                        <button className="text_btn">총 6건</button>
                    </StyledFaqContentTitle>

                    {/* FaqContentItem 컴포넌트로 빼기? */}
                    <StyledFaqContentList>
                        <StyledFaqContentListItem>
                            <StyledFaqContentListItemContent>
                                <h5>Q</h5>
                                <p>소소상점 설치 및 사용이 가능한 스마트폰이 따로 있나요?</p>
                            </StyledFaqContentListItemContent>
                            <button className="right_arrow">
                                <img src={RightArrow} alt="오른쪽 화살표" />
                            </button>
                        </StyledFaqContentListItem>
                    </StyledFaqContentList>

                    <StyledFaqContentList>
                        <StyledFaqContentListItem>
                            <StyledFaqContentListItemContent>
                                <h5>Q</h5>
                                <p>앱 알림이 울리지 않아요.</p>
                            </StyledFaqContentListItemContent>
                            <button className="right_arrow">
                                <img src={RightArrow} alt="오른쪽 화살표" />
                            </button>
                        </StyledFaqContentListItem>
                    </StyledFaqContentList>
                </StyledFaqContentContainer>
            </StyledFaqWrap>

            {/* 고객 서비스 container*/}
            <StyledCustomerServiceContainer>
                <StyledCustomerServiceItem>
                    <div className="cs_item_title">
                        <div>
                            <h3>E-mail 상담</h3>
                            <span>1833-4854</span>
                        </div>
                        <p>영업일 기준 3일 이상 소요</p>
                    </div>
                    <img src={Email} alt="이메일" />
                </StyledCustomerServiceItem>
            </StyledCustomerServiceContainer>
        </AppLayout>
    );
};

const StyledFaqWrap = styled.main`
    width: 100%;
    padding: 1rem;
`;

// 검색창
// SearchTextField랑 SearchTextFieldInner 1개로
const SearchTextField = styled.div`
    display: inline-block;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
`;
const SearchTextFieldInner = styled.div`
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
// Tab Button (조건: 클릭하면 노랑 배경에 흰색 폰트, 클릭 안하면 흰 배경에 노랑 폰트)
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

    &.active {
        color: ${Styles.colors.systemWhite};
        background: ${Styles.colors.secondary100};
    }
`;

const StyledFaqContentContainer = styled.div`
    & > div {
    }
`;
const StyledFaqContentTitle = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    .title {
        color: ${Styles.colors.natural90};
        font-size: 0.9rem;
        font-weight: ${Styles.font.weight.medium};
        line-height: 1.4;
    }
    .text_btn {
        display: flex;
        align-items: center;
        color: ${Styles.colors.natural60};
        font-size: 0.6rem;
        font-weight: ${Styles.font.weight.regular};
    }
`;
// FAQ 앱 이용 List
const StyledFaqContentList = styled.div`
    /* padding: 0.5rem 1rem; */
`;
const StyledFaqContentListItem = styled.div`
    display: flex;
    width: 100%;
    padding: 1rem 0;
    align-items: center;
    gap: 1rem;
    background: ${Styles.colors.systemWhite};

    .right_arrow {
        padding: 0;
        & > img {
            display: flex;
            align-items: center;
            width: 1.2rem;
            height: 1.2rem;
            flex-shrink: 0;
        }
    }
`;
const StyledFaqContentListItemContent = styled.div`
    display: flex;
    width: 100%;
    gap: 0.6rem;

    h5 {
        display: flex;
        width: 1.2rem;
        height: 1.2rem;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
        color: ${Styles.colors.primary100};
        text-align: center;
        font-size: 0.9rem;
        font-weight: ${Styles.font.weight.medium};
    }
    p {
        color: ${Styles.colors.natural80};
        font-size: 0.8rem;
        font-weight: ${Styles.font.weight.regular};
        line-height: 1.4;
    }
`;

// FAQ Footer Container
const StyledCustomerServiceContainer = styled.div`
    padding: 1.8rem 1rem 2.4rem 1rem;
    width: 100%;
`;
const StyledCustomerServiceItem = styled.div`
    display: flex;
    width: 100%;
    padding: 1.2rem 1rem;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.4rem;
    background: ${Styles.colors.systemBackground};

    .cs_item_title {
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
    img {
        display: flex;
        width: 2.2rem;
        height: 2.2rem;
        padding: 0.4rem 0.1rem;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
    }
`;

export default Faq;
