import { Link } from "react-router-dom";
import { Styles } from "@/style/Styles";
import styled from "styled-components";
import { formatTime } from "@/utils/formatDateTime";
import useModal from "@/hooks/useModal";
import DynamicModal from "@/components/modal/DynamicModal";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";
import CheckIn from "@/assets/images/icons/icon_employee_checkin_c.png";
import CheckOut from "@/assets/images/icons/icon_employee_checkout_c.png";

interface AttendanceRecordProps {
    id: string;
    check_in_date_time: string;
    check_out_date_time: string;
}
// 임시 데이터
const attendanceRecord: AttendanceRecordProps = {
    id: "1",
    check_in_date_time: "20240901090000",
    check_out_date_time: "",
};

const AttendanceRecordList = [
    {
        icon: CheckIn,
        title: "출근",
        link: "/employee/checkin",
    },
    {
        icon: CheckOut,
        title: "퇴근",
        link: "/employee/checkout",
    },
];

const EmployeeAttendanceRecord = () => {
    const {
        isOpen: isCheckInModalOpen,
        openModal: openCheckInModal,
        closeModal: closeCheckInModal,
    } = useModal();
    const {
        isOpen: isCheckOutModalOpen,
        openModal: openCheckOutModal,
        closeModal: closeCheckOutModal,
    } = useModal();

    const handleClick = (e: React.MouseEvent, item: (typeof AttendanceRecordList)[number]) => {
        e.preventDefault();

        if (item.title === "출근") {
            openCheckInModal();
        } else if (item.title === "퇴근") {
            openCheckOutModal();
        }
    };

    return (
        <StyledEmployeeAttendanceRecord>
            {AttendanceRecordList.map((item, index) => (
                <Link to={item.link} key={index} onClick={(e) => handleClick(e, item)}>
                    <li>
                        <div>
                            <img src={item.icon} alt="근무기록" />
                            <h6>{item.title}</h6>
                        </div>
                        <span>
                            {item.title === "출근" && attendanceRecord.check_in_date_time
                                ? formatTime(attendanceRecord.check_in_date_time)
                                : item.title === "퇴근" && attendanceRecord.check_out_date_time
                                  ? formatTime(attendanceRecord.check_out_date_time)
                                  : "-"}
                        </span>
                    </li>
                </Link>
            ))}

            {/* modal */}
            <DynamicModal open={isCheckInModalOpen} close={closeCheckInModal}>
                <ConfirmationModal
                    title="출근 등록"
                    message={`퇴근등록을 하지 않으셨습니다.`}
                    close={closeCheckInModal}
                />
            </DynamicModal>
            <DynamicModal open={isCheckOutModalOpen} close={closeCheckOutModal}>
                <ConfirmationModal
                    title="퇴근 등록"
                    message={`출근등록을 하지 않으셨습니다.`}
                    close={closeCheckOutModal}
                />
            </DynamicModal>
        </StyledEmployeeAttendanceRecord>
    );
};

export default EmployeeAttendanceRecord;

const StyledEmployeeAttendanceRecord = styled.ul`
    background: ${Styles.colors.systemWhite};
    border-radius: 0.4rem;
    padding: 0 0.8rem;
    box-shadow: 0 0.1rem 0.6rem 0 rgba(0, 0, 0, 0.06);
    margin: 1rem 0;
    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.6rem;
        padding: 0.6rem 0;
        border-bottom: 0.05rem solid ${Styles.colors.natural00};
        div {
            display: flex;
            align-items: center;
            gap: 0.4rem;
            img {
                display: block;
                background: ${Styles.colors.systemBackground};
                border-radius: 0.4rem;
                width: 2.2rem;
                height: 2.2rem;
                padding: 7.5px 7px 6.5px 7px;
            }
            h6 {
                color: ${Styles.colors.natural60};
                font-size: ${Styles.font.size.fontsize15};
                font-weight: ${Styles.font.weight.regular};
            }
        }
        span {
            flex: 1;
            text-align: right;
            color: ${Styles.colors.natural80};
            font-size: ${Styles.font.size.fontsize16};
            font-weight: ${Styles.font.weight.medium};
        }
    }
`;
