import { useEffect, useState } from "react";
import styled from "styled-components";
import { Styles } from "@/style/Styles";
import WorkStatusOnDuty from "@/assets/images/icons/icon_employee_on_duty_c.png";
import WorkStatusOffDuty from "@/assets/images/icons/icon_employee_off_duty_c.png";

interface CheckInOutDataProps {
    id: string;
    check_in_date_time: string;
    check_out_date_time: string;
}

const EmployeeWorkStatus = ({ checkInOutData }: { checkInOutData: CheckInOutDataProps }) => {
    const [workStatus, setWorkStatus] = useState<string>("");
    const [workStatusIcon, setWorkStatusIcon] = useState<string>("");

    useEffect(() => {
        if (checkInOutData.check_in_date_time && !checkInOutData.check_out_date_time) {
            setWorkStatus("근무 중");
            setWorkStatusIcon(WorkStatusOnDuty);
        } else if (checkInOutData.check_in_date_time && checkInOutData.check_out_date_time) {
            setWorkStatus("근무 종료");
            setWorkStatusIcon(WorkStatusOffDuty);
        }
    }, [checkInOutData]);

    return (
        <StyledEmployeeWorkStatus>
            <div>
                <span>이몽룡님의 현재 상태는</span>
                {<strong>{workStatus}</strong>}
            </div>
            {<img src={workStatusIcon} alt="근무상태" />}
        </StyledEmployeeWorkStatus>
    );
};

export default EmployeeWorkStatus;

const StyledEmployeeWorkStatus = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.4rem;
    background: #fff;
    box-shadow: 0 0.1rem 0.6rem 0 rgba(0, 0, 0, 0.06);
    padding: 0.85rem 0.8rem;
    & > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.2rem;
        span {
            color: ${Styles.colors.natural50};
            font-size: ${Styles.font.size.fontsize13};
            font-weight: ${Styles.font.weight.regular};
        }
        strong {
            color: ${Styles.colors.brandBlue};
            font-size: ${Styles.font.size.fontsize18};
            font-weight: ${Styles.font.weight.medium};
        }
    }
    & > img {
        display: block;
        width: 3.1rem;
        height: 2.75rem;
    }
`;
