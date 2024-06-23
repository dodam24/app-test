import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import EmployeesAttendanceList from "../component/EmployeeAttendanceList";
import EmployeeFooterBar from "@/components/footer/EmployeeFooterBar";
import styled, { createGlobalStyle } from "styled-components";
import { Styles } from "@/style/Styles";
import ArrowDown from "@/assets/images/icons/icon_arrow_down_white_c.png";

const AttendanceList = () => {
    return (
        <AppLayout
            props={{ header: <AppBackHeader title="근무내역" />, footer: <EmployeeFooterBar /> }}
        >
            <StyledAttendanceListSection>
                <StyledAttendanceBody />
                <StyledLargeTitle>
                    <h3>2023.03</h3>
                </StyledLargeTitle>
                <EmployeesAttendanceList />
                <StyledShowMoreButton>
                    <h5>한달 더보기</h5>
                    <img src={ArrowDown} alt="아래 화살표" />
                </StyledShowMoreButton>
            </StyledAttendanceListSection>
        </AppLayout>
    );
};

export default AttendanceList;

const StyledAttendanceListSection = styled.section`
    padding: 1rem 1rem 0 1rem;
`;

const StyledAttendanceBody = createGlobalStyle`
    body {
        background: ${Styles.colors.systemBackground};
        /* padding: 1rem 1rem 0 1rem; */
    }

`;

const StyledLargeTitle = styled.div`
    display: flex;
    align-items: center;
    & > h3 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
        line-height: 1.4;
    }
`;
const StyledShowMoreButton = styled.button`
    position: fixed;
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    bottom: calc(3.2rem + 0.9rem);
    padding: 0.5rem 1rem;
    align-items: center;
    border-radius: 4.95rem;
    background: ${Styles.colors.brandNormal};
    box-shadow:
        0 1rem 1.25rem -0.25rem rgba(51, 65, 85, 0.1),
        0px 10px 10px -5px rgba(51, 65, 85, 0.04);

    & h5 {
        color: ${Styles.colors.systemWhite};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.medium};
    }

    img {
        display: block;
        width: 1.2rem;
        height: 1.2rem;
        color: ${Styles.colors.systemWhite};
    }
`;
