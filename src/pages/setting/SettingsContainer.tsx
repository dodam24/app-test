import { Link } from "react-router-dom";
import styled from "styled-components";
import Toggle from "@/components/toggle/Toggle";

import { Styles } from "@/style/Styles";

import RightArrow from "@/assets/images/icons/icon_right_arrow.png";

const SettingsContainer = () => {
    return (
        <StyledSettingsContainer>
            <StyledSettings>
                <StyledSetting>
                    <Link to="/me">
                        <span>내 정보 확인</span>
                        <img src={RightArrow} alt="더보기" />
                    </Link>
                </StyledSetting>
                <StyledSetting>
                    <Link to="/password_chagne">
                        <span>비밀번호 변경</span>
                        <img src={RightArrow} alt="더보기" />
                    </Link>
                </StyledSetting>
                <StyledSetting>
                    <span>자동 로그인</span>
                    <Toggle id="auto_login" />
                </StyledSetting>
                <StyledSetting>
                    <span>알림 설정</span>
                    <Toggle id="alarm_setting" />
                </StyledSetting>
                <StyledSetting>
                    <Link to="/terms">
                        <span>약관동의관리</span>
                        <img src={RightArrow} alt="더보기" />
                    </Link>
                </StyledSetting>
            </StyledSettings>
            <StyledSettingApp>
                <div className="logout">
                    <button>로그아웃</button>
                </div>
                <div className="version">
                    <span>v 1.1.600</span>
                    <p>최신 버전 입니다.</p>
                    {/* <button>업데이트</button> */}
                </div>
            </StyledSettingApp>
        </StyledSettingsContainer>
    );
};

export default SettingsContainer;

const StyledSettingsContainer = styled.section`
    min-height: calc(100vh - 2.4rem);
    display: flex;
    flex-direction: column;
`;
const StyledSettings = styled.ul`
    padding: 0.5rem 1rem;
    border-bottom: 0.6rem solid ${Styles.colors.systemBackground};
`;
const StyledSetting = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.8rem 0;
    span {
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
        color: ${Styles.colors.natural80};
    }
    a {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
            display: block;
            width: 1.2rem;
            height: 1.2rem;
        }
    }
`;
const StyledSettingApp = styled.div`
    padding: 0 1rem 4.85rem;
    & > .logout {
        padding: 0.8rem 0;
        border-bottom: 0.05rem solid ${Styles.colors.natural10};
        button {
            width: fit-content;
            height: 2.1rem;
            font-size: ${Styles.font.size.fontsize13};
            font-weight: ${Styles.font.weight.regular};
            color: ${Styles.colors.natural60};
        }
    }

    & > .version {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
        margin-top: 3.9rem;

        span {
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.regular};
            color: ${Styles.colors.natural80};
        }
        p {
            font-size: ${Styles.font.size.fontsize13};
            font-weight: ${Styles.font.weight.regular};
            color: ${Styles.colors.natural40};
        }
        button {
            margin-top: 1rem;
            padding: 0.5rem 0.9rem;
            border-radius: 0.4rem;
            border: 0.05rem solid ${Styles.colors.primary100};
            font-size: ${Styles.font.size.fontsize14};
            font-weight: ${Styles.font.weight.regular};
            color: ${Styles.colors.primary100};
        }
    }
`;
