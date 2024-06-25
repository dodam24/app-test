import { Link } from "react-router-dom";
import styled from "styled-components";
import Toggle from "@/components/toggle/Toggle";
import SettingsOption from "@/pages/setting/SettingsOption";

import { Styles } from "@/style/Styles";
import { RightArrow } from "@/pages/setting/_images/Icons";

const SettingsContainer = () => {
    return (
        <StyledSettingsContainer>
            <StyledSettings>
                <StyledSetting>
                    <Link to="/setting/me">
                        <span>내 정보 확인</span>
                        <img src={RightArrow} alt="더보기" />
                    </Link>
                </StyledSetting>
                <StyledSetting>
                    <Link to="/setting/change_password">
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
                    <Link to="/setting/terms">
                        <span>약관동의관리</span>
                        <img src={RightArrow} alt="더보기" />
                    </Link>
                </StyledSetting>
            </StyledSettings>
            <SettingsOption />
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
