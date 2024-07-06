import styled from "styled-components";
import WorkStatus from "@/assets/images/icons/icon_employee_onduty_c.png";
import { Styles } from "@/style/Styles";

const EmployeeWorkStatus = () => {
    return (
        <StyledEmployeeWorkStatus>
            <div>
                <span>아름님의 현재 상태는</span>
                <strong>근무 중</strong>
            </div>
            <img src={WorkStatus} alt="근무상태" />
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
