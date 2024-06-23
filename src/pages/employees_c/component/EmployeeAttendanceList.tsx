import AccessTime from "@/assets/images/icons/icon_access_time_primary_c.png";
import { Styles } from "@/style/Styles";
import styled from "styled-components";

const AttendanceList = [
    {
        id: 1,
        employee_id: 1,
        checked_in_at: "2023.03.23 (목) 09:00:00",
        checked_out_at: "2023.03.23 (목) 18:00:00",
        work_time: "총 8시간",
    },
    {
        id: 2,
        employee_id: 2,
        checked_in_at: "2023.03.22 (수) 09:00:00",
        checked_out_at: "2023.03.22 (수) 26:00:00",
        work_time: "총 16시간(초과)",
    },
];

const getWorkTime = (checkedInAt: string, checkedOutAt: string): number => {
    const checkedInTime = new Date(checkedInAt);
    const checkedOutTime = new Date(checkedOutAt);

    const diff = checkedOutTime.getTime() - checkedInTime.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    return hours;
};

const EmployeeAttendanceList = () => {
    return (
        <>
            {AttendanceList.map((item, index) => (
                <StyledEmployeeAttendanceList key={index}>
                    <div className="date">
                        <h6>24</h6>
                        <span>금</span>
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
                                    총 {getWorkTime(item.checked_in_at, item.checked_out_at)}시간
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
