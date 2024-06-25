import AccessTime from "@/assets/images/icons/icon_access_time_primary_c.png";
import { Styles } from "@/style/Styles";
import styled from "styled-components";

const AttendanceList = [
    {
        id: 1,
        employee_id: 1,
        // ex: "2023.03.23 (목) 18:00:00",
        checked_in_at: "20230323090000",
        checked_out_at: "20230323180000",
        work_time: 8,
    },
    {
        id: 2,
        employee_id: 2,
        checked_in_at: "20230322090000",
        checked_out_at: "20230322260000",
        work_time: 16,
    },
];

// 날짜 test
// const parseDate = (dateStr: string) => {
//     const year = parseInt(dateStr.substring(0, 4), 10);
//     const month = parseInt(dateStr.substring(4, 6), 10) - 1;
//     const day = parseInt(dateStr.substring(6, 8), 10);
//     const hour = parseInt(dateStr.substring(8, 10), 10);
//     const minute = parseInt(dateStr.substring(10, 12), 10);
//     const second = parseInt(dateStr.substring(12, 14), 10);

//     return new Date(year, month, day, hour, minute, second);
// };

// const hoursToDate = (date: Date, hours: number): Date => {
//     if (hours >= 24) {
//         date.setDate(date.getDate() + 1);
//         date.setHours(hours - 24);
//     }
//     return date;
// };

// const getWorkTime = (checkedInAt: string, checkedOutAt: string): number => {
//     const checkedInTime = parseDate(checkedInAt);
//     const checkedOutTime = parseDate(checkedOutAt);

//     checkedOutHour = parseInt(checkedOutAt.substring(8, 10), 10);
//     checkedOutTime = hoursToDate();

//     const diff = checkedOutTime.getTime() - checkedInTime.getTime();
//     const hours = Math.floor(diff / (1000 * 60 * 60));
//     return hours;
// };

// const formatTime = (dateStr: string): string => {
//     const date = parseDate(dateStr);
//     const hours = date.getHours().toString().padStart(2, "0");
//     const minutes = date.getMinutes().toString().padStart(2, "0");
//     const seconds = date.getSeconds().toString().padStart(2, "0");
//     return `${hours}:${minutes}:${seconds}`;
// };

// getDayOfWeek = (dateStr: string): string => {
//     const date = parseDate(dateStr);
//     const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
//     return daysOfWeek[date.getDay()];
// };

const EmployeeAttendanceList = () => {
    return (
        <>
            {AttendanceList.map((item, index) => (
                <StyledEmployeeAttendanceList key={index}>
                    <div className="date">
                        <h6>{item.checked_in_at.substring(6, 8)}</h6>
                        {/* <span>{getDayOfWeek(item.checked_in_at)}</span> */}
                    </div>
                    <div className="time">
                        <div className="check_in">
                            <div className="check_time">
                                <span>출근</span>
                                <p>09:00:00</p>
                            </div>
                            <div className="work_time">
                                <img src={AccessTime} alt="근무시간" />
                                <span>
                                    {/* 총 {getWorkTime(item.checked_in_at, item.checked_out_at)}시간 */}
                                </span>
                            </div>
                        </div>
                        <div className="check_out">
                            <span>퇴근</span>
                            <p>26:00:00</p>
                        </div>
                    </div>
                </StyledEmployeeAttendanceList>
            ))}
        </>
    );
};

export default EmployeeAttendanceList;

const StyledEmployeeAttendanceList = styled.li`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0.6rem 0 0.6rem 0;
    .date {
        display: flex;
        height: 4rem;
        padding: 0 1rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 0.4rem 0 0 0.4rem;
        border: 0.05rem solid ${Styles.colors.natural00};
        background: #fff;

        & > h6 {
            color: ${Styles.colors.natural80};
            font-size: ${Styles.font.size.fontsize20};
            font-weight: ${Styles.font.weight.medium};
        }
        & > span {
            color: ${Styles.colors.natural40};
            font-size: ${Styles.font.size.fontsize12};
            font-weight: ${Styles.font.weight.regular};
        }
    }

    .time {
        display: flex;
        flex-direction: column;
        width: 100%;

        .check_in {
            display: flex;
            height: 2rem;
            padding: 0 1rem;
            align-items: center;
            justify-content: space-between;
            border-radius: 0 0.4rem 0 0;
            border: 0.05rem solid ${Styles.colors.natural00};
            background: #fff;
            border-left: none;

            .check_time {
                display: flex;
                gap: 0.2rem;
                & > span {
                    color: ${Styles.colors.natural80};
                    font-size: ${Styles.font.size.fontsize14};
                    font-weight: ${Styles.font.weight.regular};
                }
                & > p {
                    color: ${Styles.colors.natural40};
                    font-size: ${Styles.font.size.fontsize14};
                    font-weight: ${Styles.font.weight.regular};
                }
            }

            .work_time {
                display: flex;
                text-align: right;
                & > img {
                    display: block;
                    width: 0.8rem;
                    height: 0.8rem;
                }
                & > span {
                    color: ${Styles.colors.primary100};
                    text-align: right;
                    font-variant-numeric: lining-nums tabular-nums;
                    font-size: ${Styles.font.size.fontsize13};
                    font-weight: ${Styles.font.weight.regular};
                }
            }
        }
        .check_out {
            display: flex;
            height: 2rem;
            padding: 0 1rem;
            border-radius: 0 0 0.4rem 0;
            background: #fff;
            border-right: 0.05rem solid ${Styles.colors.natural00};
            border-bottom: 0.05rem solid ${Styles.colors.natural00};
            align-items: center;
            gap: 0.2rem;

            & > span {
                color: ${Styles.colors.natural80};
                font-size: ${Styles.font.size.fontsize14};
                font-weight: ${Styles.font.weight.regular};
            }
            & > p {
                color: ${Styles.colors.natural40};
                font-size: ${Styles.font.size.fontsize14};
                font-weight: ${Styles.font.weight.regular};
            }
        }
    }
`;
