import AppLayout from "@/components/layout/AppLayout";
import AppHeader from "@/components/header/AppHeader";
import styled from "styled-components";
import AppFooterBar from "@/components/footer/AppFooterBar";
import { Styles } from "@/style/Styles";
import Notice from "@/assets/images/icons/icon_notice_c.png";
import Customer from "@/assets/images/icons/icon_customer_c.png";
import ArrowIcon from "@/assets/images/icons/icon_right_arrow_c.png";

const More = () => {
    const ServiceMenus = [
        { title: "직원관리" },
        { title: "세무서비스" },
        { title: "보험서비스" },
        { title: "중고거래" },
        { title: "부동산" },
    ];
    return (
        <AppLayout props={{ header: <AppHeader title="더보기" /> }}>
            <StyledMoreWrap>
                {/* user info */}
                <StyledCustomerInfoContainer>
                    <div className="user_info">
                        <div className="user_name">
                            <span>basic 회원</span>
                            <strong>홍길동님</strong>
                        </div>
                        <button>로그아웃</button>
                    </div>
                    <StyledCustomerServiceContainer>
                        <div className="cs_item">
                            <img src={Notice} alt="공지사항"></img>
                            <h5>공지사항</h5>
                        </div>
                        <div className="cs_item">
                            <img src={Customer} alt="고객센터"></img>
                            <h5>고객센터</h5>
                        </div>
                    </StyledCustomerServiceContainer>
                </StyledCustomerInfoContainer>

                <div className="border" />

                {/* service menu */}
                <StyledServiceMenuContainer>
                    {ServiceMenus.map((menu, index) => (
                        <StyledServiceMenuItem key={index}>
                            <h5>{menu.title}</h5>
                            <button>
                                <img src={ArrowIcon} alt="오른쪽 화살표" />
                            </button>
                        </StyledServiceMenuItem>
                    ))}
                </StyledServiceMenuContainer>
            </StyledMoreWrap>
            <AppFooterBar />
        </AppLayout>
    );
};

const StyledMoreWrap = styled.main`
    width: 100%;

    .border {
        background: ${Styles.colors.systemBackground};
        width: 100%;
        height: 0.6rem;
    }
`;
const StyledCustomerInfoContainer = styled.div`
    padding: 2.2rem 1rem 1.6rem 1rem;
    .user_info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2.4rem;

        .user_name {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.2rem;

            & > span {
                color: ${Styles.colors.natural50};
                font-size: ${Styles.font.size.fontsize13};
                font-weight: ${Styles.font.weight.medium};
            }
            & > strong {
                color: ${Styles.colors.natural90};
                font-size: ${Styles.font.size.fontsize20};
                font-weight: ${Styles.font.weight.medium};
            }
        }
        button {
            display: flex;
            padding: 0.3rem 0.6rem;
            align-items: center;
            border-radius: 4.95rem;
            background: ${Styles.colors.natural20};
            color: ${Styles.colors.systemWhite};
            font-size: ${Styles.font.size.fontsize12};
            font-weight: ${Styles.font.weight.medium};
        }
    }
`;
const StyledCustomerServiceContainer = styled.div`
    display: flex;
    gap: 0.65rem;
    margin-top: 1.6rem;

    .cs_item {
        display: flex;
        flex: 1;
        padding: 0.6rem 2.5rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.2rem;
        border-radius: 0.4rem;
        background: ${Styles.colors.systemBackground};
        & > img {
            width: 2.2rem;
            height: 2.2rem;
        }
        & > h5 {
            color: ${Styles.colors.natural90};
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.regular};
        }
    }
`;
const StyledServiceMenuContainer = styled.div`
    padding: 0.5rem 1rem;
`;
const StyledServiceMenuItem = styled.li`
    list-style: none;
    display: flex;
    padding: 0.8rem 0;
    justify-content: space-between;
    align-items: center;

    & > h5 {
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
    }
    button {
        & > img {
            width: 1.2rem;
            height: 1.2rem;
            flex-shrink: 0;
        }
    }
`;
export default More;
