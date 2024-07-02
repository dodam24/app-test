import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import ShowMoreButton from "@/components/button/ShowMoreButton";
import EmployeeFooterBar from "@/components/footer/EmployeeFooterBar";
import styled, { createGlobalStyle } from "styled-components";
import { Styles } from "@/style/Styles";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import { useEffect, useState } from "react";
import { formatTime, getDayOfWeek, getWorkTime, calcOvertime } from "@/utils/formatDateTime";
import AccessTime from "@/assets/images/icons/icon_access_time_primary_c.png";
import AccessTimeError from "@/assets/images/icons/icon_access_time_error_c.png";
import { currentMonth } from "../../../utils/formatDateTime";

interface AttendanceContents {
    id: string;
    employee_id: string;
    checked_in_at: string;
    checked_out_at: string;
    work_time: number;
}

interface AttendanceList {
    page: number;
    size: number;
    sort: "ASC" | "DESC";
    total_pages: number;
    total_count: number;
    contents: AttendanceContents[];
    message: string;
}

const AttendanceList = () => {
    const [data, setData] = useState<AttendanceList>({
        page: 0,
        size: 0,
        sort: "ASC",
        total_pages: 0,
        total_count: 0,
        contents: [],
        message: "",
    });

    useEffect(() => {
        setData({
            ...data,
            ...{
                page: 0,
                size: 0,
                sort: "ASC",
                total_pages: 0,
                total_count: 0,
                contents: [
                    {
                        id: "1",
                        employee_id: "1",
                        checked_in_at: "20230724090000",
                        checked_out_at: "20230724180000",
                        work_time: 8,
                    },
                    {
                        id: "2",
                        employee_id: "2",
                        checked_in_at: "20230723090000",
                        checked_out_at: "20230723180000",
                        work_time: 8,
                    },
                    {
                        id: "3",
                        employee_id: "3",
                        checked_in_at: "20230722090000",
                        checked_out_at: "20230722260000",
                        work_time: 16,
                    },
                    {
                        id: "4",
                        employee_id: "4",
                        checked_in_at: "20230721090000",
                        checked_out_at: "20230721180000",
                        work_time: 8,
                    },
                    {
                        id: "5",
                        employee_id: "5",
                        checked_in_at: "20230720090000",
                        checked_out_at: "20230720180000",
                        work_time: 8,
                    },
                    {
                        id: "6",
                        employee_id: "6",
                        checked_in_at: "20230719090000",
                        checked_out_at: "20230719180000",
                        work_time: 8,
                    },
                    {
                        id: "7",
                        employee_id: "7",
                        checked_in_at: "20230818090000",
                        checked_out_at: "20230818180000",
                        work_time: 8,
                    },
                    {
                        id: "8",
                        employee_id: "8",
                        checked_in_at: "20230817090000",
                        checked_out_at: "20230817260000",
                        work_time: 16,
                    },
                    {
                        id: "9",
                        employee_id: "9",
                        checked_in_at: "20230816090000",
                        checked_out_at: "20230816260000",
                        work_time: 16,
                    },
                    {
                        id: "10",
                        employee_id: "10",
                        checked_in_at: "20230815090000",
                        checked_out_at: "20230815180000",
                        work_time: 16,
                    },
                ],
                message: "",
            },
        });
    }, []);

    const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
    // const [nextMonth, setNextMonth] = useState<Date>(new Date());
    // const [showMore, setShowMore] = useState(false);

    return (
        <AppLayout
            props={{ header: <AppBackHeader title="근무내역" />, footer: <EmployeeFooterBar /> }}
        >
            <StyledAttendanceBody />
            <AppBaseWrapper
                title={`${currentMonth.getFullYear()}.${(currentMonth.getMonth() + 1).toString().padStart(2, "0")}`}
            >
                <>
                    {data.contents.map((item, index) => {
                        const { isOvertime } = calcOvertime(item.checked_out_at);

                        return (
                            <StyledEmployeeAttendanceList key={index}>
                                <div className="date">
                                    <h6>{item.checked_in_at.substring(6, 8)}</h6>
                                    <span>{getDayOfWeek(item.checked_in_at)}</span>
                                </div>
                                <div className="time">
                                    <div className="check_in">
                                        <div className="check_time">
                                            <span>출근</span>
                                            <p>{formatTime(item.checked_in_at)}</p>
                                        </div>
                                        <div className="work_time">
                                            <img
                                                src={isOvertime ? AccessTimeError : AccessTime}
                                                alt={isOvertime ? "초과근무시간" : "근무시간"}
                                            />
                                            <span className={isOvertime ? "overtime" : ""}>
                                                총{" "}
                                                {getWorkTime(
                                                    item.checked_in_at,
                                                    item.checked_out_at,
                                                )}
                                                시간{isOvertime && "(초과)"}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="check_out">
                                        <span>퇴근</span>
                                        <p className={isOvertime ? "overtime" : ""}>
                                            {formatTime(item.checked_out_at)}
                                        </p>
                                    </div>
                                </div>
                            </StyledEmployeeAttendanceList>
                        );
                    })}
                </>
            </AppBaseWrapper>
            {/* 다음 달에 해당하는 데이터가 있으면 버튼 표시 */}
            <ShowMoreButton />
        </AppLayout>
    );
};

export default AttendanceList;

const StyledAttendanceBody = createGlobalStyle`
    body {
        background: ${Styles.colors.systemBackground};
    }
`;
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
                & > span.overtime {
                    color: ${Styles.colors.systemError};
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
            & > p.overtime {
                color: ${Styles.colors.systemError};
            }
        }
    }
`;
