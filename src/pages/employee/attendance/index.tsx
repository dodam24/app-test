import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import { Styles } from "@/style/Styles";
import styled, { createGlobalStyle } from "styled-components";
import Timer from "@/assets/images/icons/icon_attendance_timer_c.png";
import FixedButton from "@/components/button/FixedButton";
import TimePicker from "@/pages/employee/component/TimePicker";
import { useEffect, useState } from "react";
import { formatDateWithDay, formatTime } from "@/utils/formatDateTime";

const Attendance = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <AppLayout props={{ header: <AppBackHeader title="출근등록" /> }}>
            <StyledAttendanceBody />
            <StyledAttendanceDisplay>
                <img src={Timer} alt="출퇴근등록" />
                <div className="display_content">
                    <span className="date">{formatDateWithDay(date)}</span>
                    <h3 className="time">{formatTime(date, true)}</h3>
                    <p className="message">오늘도 화이팅 하세요! :)</p>
                </div>
            </StyledAttendanceDisplay>
            <StyledTimePicker />
            <StyledAttendanceTimer>
                <p className="timer_option">※ 선택가능범위 : 현재시각 ± 10분</p>
            </StyledAttendanceTimer>
            <FixedButton>등록</FixedButton>
        </AppLayout>
    );
};

const StyledTimePicker = styled(TimePicker)``;

const StyledAttendanceBody = createGlobalStyle`
    body {
        background: ${Styles.colors.systemWhite};
    }
`;
const StyledAttendanceDisplay = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0 0 0.9rem 0.9rem;
    background: ${Styles.colors.primary100};
    padding: 1rem;

    img {
        width: 5.4rem;
        height: 5.9rem;
        flex-shrink: 0;
    }

    .display_content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        gap: 0.35rem;
        border-radius: 0.4rem;
        background: #fff;
        box-shadow: 0 0.1rem 0.6rem 0 rgba(0, 0, 0, 0.06);
        text-align: center;

        .date {
            color: ${Styles.colors.natural50};
            font-size: ${Styles.font.size.fontsize14};
            font-weight: ${Styles.font.weight.regular};
        }
        .time {
            color: ${Styles.colors.natural80};
            font-size: ${Styles.font.size.fontsize24};
            font-weight: ${Styles.font.weight.semibold};
        }
        .message {
            color: ${Styles.colors.brandBlue};
            font-size: ${Styles.font.size.fontsize12};
            font-weight: ${Styles.font.weight.regular};
            line-height: 1.4;
        }
    }
`;
const StyledAttendanceTimer = styled.section`
    display: flex;
    flex-direction: column;
    margin: 2.2rem 1rem 1.8rem 1rem;
    gap: 7rem;

    .timer_option {
        display: flex;
        position: fixed;
        bottom: 5.02rem;
        color: ${Styles.colors.natural50};
        font-size: ${Styles.font.size.fontsize13};
        font-weight: ${Styles.font.weight.regular};
    }
`;

export default Attendance;
