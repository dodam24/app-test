import { useState } from "react";
import styled from "styled-components";

import { Styles } from "@/style/Styles";
import Pig from "@/assets/images/icons/icon_pig_l.png";
import Clock from "@/assets/images/icons/icon_clock_l.png";

const AlarmsList = [
    {
        id: 1,
        icon: Pig,
        type: "급여 지급",
        date: "2023.02.09",
        content:
            "내일(2023. 02. 10) 급여일인 직원이 있습니다. 알림을 눌러 일괄지급등록을 확인해보세요.",
    },
    {
        id: 2,
        icon: Pig,
        type: "급여 지급",
        date: "2023.02.09",
        content:
            "내일(2023. 02. 10) 급여일인 직원이 있습니다. 알림을 눌러 일괄지급등록을 확인해보세요.",
    },
    {
        id: 3,
        icon: Clock,
        type: "직원 가입 대기",
        date: "2023.01.09",
        content: "‘활빈당‘에 회원가입 신청한 직원이 있습니다. 직원목록에서 확인해보세요.",
    },
];

// todo: 리스트 분리
const Alarms = () => {
    const [isIndex, setIsIndex] = useState(0);

    const handleIndex = (index: number) => {
        setIsIndex(index);
    };

    return (
        <StyledAlarmsContainer>
            {AlarmsList.map((item) => (
                <StyledAlarmsList
                    key={item.id}
                    onClick={() => {
                        handleIndex(item.id);
                    }}
                    className={isIndex === item.id ? "active" : ""}
                >
                    <div className="icons">
                        <img src={item.icon} alt="icon" />
                    </div>
                    <div className="info">
                        <div>
                            <h6>{item.type}</h6>
                            <span>{item.date}</span>
                        </div>
                        <p>{item.content}</p>
                    </div>
                </StyledAlarmsList>
            ))}
        </StyledAlarmsContainer>
    );
};

export default Alarms;

const StyledAlarmsContainer = styled.ul``;
const StyledAlarmsList = styled.li`
    display: flex;
    align-items: flex-start;
    gap: 0.7rem;
    padding: 1rem;
    background: ${Styles.colors.systemWhite};
    &.active {
        background: ${Styles.colors.primary10};
    }
    & > .icons {
        padding: 0.3rem;
        border-radius: 0.6rem;
        background: #f3f8ff;
        img {
            display: block;
            width: 1.6rem;
            height: 1.6rem;
        }
    }
    &.active > .icons {
        background: ${Styles.colors.systemWhite};
        box-shadow:
            0px 1rem 1.25rem -0.25rem rgba(51, 65, 85, 0.1),
            0px 0.5rem 0.5rem -0.25rem rgba(51, 65, 85, 0.04);
    }
    & > .info {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        margin-top: 0.3rem;
        & > div {
            display: flex;
            align-items: center;
            justify-content: space-between;

            h6 {
                font-size: ${Styles.font.size.fontsize16};
                font-weight: ${Styles.font.weight.medium};
                color: ${Styles.colors.natural80};
            }
            span {
                font-size: ${Styles.font.size.fontsize12};
                font-weight: ${Styles.font.weight.regular};
                color: ${Styles.colors.natural30};
            }
        }
        & > p {
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.regular};
            line-height: 1.5;
            word-break: keep-all;
            color: ${Styles.colors.natural70};
        }
    }
`;
