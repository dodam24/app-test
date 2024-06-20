import { Link } from "react-router-dom";
import styled from "styled-components";
import { Styles } from "@/style/Styles";

import Alarm from "@/assets/images/icons/icon_alarm.png";
import Setting from "@/assets/images/icons/icon_setting.png";
import Dummy from "@/assets/images/dummy/dummy_profile.png";
import RightArrow from "@/assets/images/icons/icon_right_arrow.png";
import Toggle from "@/components/toggle/Toggle";

interface SideBarProsp {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar = ({ isMenuOpen, setIsMenuOpen }: SideBarProsp) => {
    const handleIsMenuClose = () => {
        setIsMenuOpen(false);
    };
    return (
        <StyledSideBar $isMenuOpen={isMenuOpen}>
            <StyledSideBarOverlay onClick={handleIsMenuClose} />
            <StyledSideBarInner $isMenuOpen={isMenuOpen}>
                <StyledSideBarInnerHeader>
                    <div className="utility">
                        <Link to={"/alarm"}>
                            <img src={Alarm} alt="알림" />
                        </Link>
                        <Link to={"/setting"}>
                            <img src={Setting} alt="설정" />
                        </Link>
                    </div>
                    <Link to={"/mypage"} className="user">
                        <div className="user_info">
                            <img src={Dummy} alt="프로필 이미지" />
                            <div className="user_detail">
                                <span>basic 회원</span>
                                <strong>홍길동님(hong)</strong>
                            </div>
                        </div>
                        <img src={RightArrow} alt="마이페이지" />
                    </Link>
                </StyledSideBarInnerHeader>
                <StyledSideBarInnerBody>
                    <div className="settings">
                        <h6>설정</h6>
                        <ul>
                            <li>
                                <span>자동로그인</span>
                                <Toggle id="auto_login" />
                            </li>
                            <li>
                                <span>알림 설정</span>
                                <Toggle id="alarm_setting" />
                            </li>
                        </ul>
                    </div>
                    <span>© BUbaum Corp.</span>
                </StyledSideBarInnerBody>
            </StyledSideBarInner>
        </StyledSideBar>
    );
};

export default SideBar;

const StyledSideBar = styled.aside<{ $isMenuOpen: boolean }>`
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;

    opacity: 0;
    visibility: hidden;
    transition: 0.3s;

    ${({ $isMenuOpen }) =>
        $isMenuOpen &&
        `
        opacity: 1;
        visibility: visible;
    `};
`;
const StyledSideBarOverlay = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: 100;
`;
const StyledSideBarInner = styled.section<{ $isMenuOpen: boolean }>`
    position: absolute;
    right: -100%;
    top: 0;
    width: 85%;
    height: 100%;
    background: ${Styles.colors.systemBackground};
    z-index: 150;

    transition: 0.3s;

    ${({ $isMenuOpen }) =>
        $isMenuOpen &&
        `
        right: 0;
    `};
`;
const StyledSideBarInnerHeader = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
    background: ${Styles.colors.systemWhite};
    border-radius: 0 0 0.9rem 0.9rem;
    box-shadow: 0px 0.1rem 0.6rem 0px rgba(0, 0, 0, 0.06);
    .utility {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 0.7rem;
        & > a {
            padding: 0.9rem 0.35rem;

            img {
                display: block;
                width: 1.2rem;
                height: 1.2rem;
            }
        }
    }

    .user {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.6rem 1rem;
        & > img {
            display: block;
            width: 1.2rem;
            height: 1.2rem;
        }
        .user_info {
            display: flex;
            align-items: center;
            gap: 0.4rem;

            & > img {
                display: block;
                width: 2.1rem;
                height: 2.1rem;
                border-radius: 50%;
                overflow: hidden;
            }

            .user_detail {
                display: flex;
                flex-direction: column;
                gap: 0.15rem;
                span {
                    font-size: ${Styles.font.size.fontsize13};
                    font-weight: ${Styles.font.weight.medium};
                    color: ${Styles.colors.natural50};
                }
                strong {
                    font-size: ${Styles.font.size.fontsize18};
                    font-weight: ${Styles.font.weight.medium};
                    color: ${Styles.colors.natural80};
                }
            }
        }
    }
`;
const StyledSideBarInnerBody = styled.div`
    width: 100%;
    height: calc(100vh - 7.3rem);
    display: flex;
    flex-direction: column;
    padding: 1.8rem 1rem 2.6rem;
    & > span {
        font-size: ${Styles.font.size.fontsize11};
        font-weight: ${Styles.font.weight.regular};
        color: ${Styles.colors.natural40};
        text-align: center;
    }
    .settings {
        flex: 1;
        height: 100%;
        overflow: auto;
        margin-bottom: 1rem;
        & > h6 {
            font-size: ${Styles.font.size.fontsize18};
            font-weight: ${Styles.font.weight.medium};
            color: ${Styles.colors.natural80};
        }

        & > ul {
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
            margin-top: 0.7rem;

            li {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0.8rem;
                border-radius: 0.4rem;
                background: ${Styles.colors.systemWhite};
                span {
                    font-size: ${Styles.font.size.fontsize15};
                    font-weight: ${Styles.font.weight.regular};
                    color: ${Styles.colors.natural80};
                }
            }
        }
    }
`;
