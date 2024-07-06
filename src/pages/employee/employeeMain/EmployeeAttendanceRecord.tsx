import { Styles } from "@/style/Styles";
import styled from "styled-components";
import CheckIn from "@/assets/images/icons/icon_employee_checkin_c.png";
import CheckOut from "@/assets/images/icons/icon_employee_checkout_c.png";

const AttendanceRecordList = [
    { icon: CheckIn, title: "출근", time: "09:00:00" },
    { icon: CheckOut, title: "퇴근", time: "-" },
];

const EmployeeAttendanceRecord = () => {
    return (
        <StyledEmployeeAttendanceRecord>
            {AttendanceRecordList.map((item, index) => (
                <li key={index}>
                    <div>
                        <div>
                            <img src={item.icon} alt="근무기록" />
                        </div>
                        <h6>{item.title}</h6>
                    </div>
                    <span>{item.time}</span>
                </li>
            ))}
        </StyledEmployeeAttendanceRecord>
    );
};

export default EmployeeAttendanceRecord;

const StyledEmployeeAttendanceRecord = styled.ul`
    background: ${Styles.colors.systemWhite};
    border-radius: 0.4rem;
    padding: 0 0.8rem;
    box-shadow: 0 0.1rem 0.6rem 0 rgba(0, 0, 0, 0.06);
    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.6rem;
        padding: 0.6rem 0;
        border-bottom: 0.05rem solid ${Styles.colors.natural00};
        & > div {
            display: flex;
            align-items: center;
            gap: 0.4rem;

            & > div {
                display: flex;
                background: ${Styles.colors.systemBackground};
                border-radius: 0.4rem;
                width: 2.2rem;
                height: 2.2rem;
                padding: 7.5px 7px 6.5px 7px;
                align-items: center;
                justify-content: center;
                img {
                    display: block;
                    width: 1.5rem;
                    height: 1.5rem;
                }
            }
            h6 {
                color: ${Styles.colors.natural60};
                font-size: ${Styles.font.size.fontsize15};
                font-weight: ${Styles.font.weight.regular};
            }
        }
        & > span {
            flex: 1;
            text-align: right;
            color: ${Styles.colors.natural80};
            font-size: ${Styles.font.size.fontsize16};
            font-weight: ${Styles.font.weight.medium};
        }
    }
`;
