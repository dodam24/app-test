import styled from "styled-components";
import { Styles } from "@/style/Styles";

import Alarm from "@/assets/images/icons/icon_alarm_l.png";

const AlarmPlaceholder = () => {
    return (
        <StyledAlarmPlaceholderContainer>
            <div>
                <img src={Alarm} alt="알림 없음" />
                <span>최근 1달 동안 받은 알림이 없어요.</span>
            </div>
        </StyledAlarmPlaceholderContainer>
    );
};

export default AlarmPlaceholder;

const StyledAlarmPlaceholderContainer = styled.div`
    width: 100%;
    height: calc(100vh - 2.4rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.6rem;
        margin-bottom: 10rem;
        & > img {
            display: block;
            width: 4.5rem;
            height: 4.5rem;
        }
        & > span {
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.regular};
            color: ${Styles.colors.natural40};
        }
    }
`;
