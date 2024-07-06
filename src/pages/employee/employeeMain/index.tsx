import EmployeeFooterBar from "@/components/footer/EmployeeFooterBar";
import AppHeader from "@/components/header/AppHeader";
import AppLayout from "@/components/layout/AppLayout";
import EmployeeAttendanceRecord from "@/pages/employee/employeeMain/EmployeeAttendanceRecord";
import EmployeeInfo from "@/pages/employee/employeeMain/EmployeeInfo";
import EmployeeWorkStatus from "@/pages/employee/employeeMain/EmployeeWorkStatus";
import MainBanner from "@/pages/main/MainBanner";
import MainUser from "@/pages/main/MainUser";
import { Styles } from "@/style/Styles";
import styled, { createGlobalStyle } from "styled-components";

const EmployeeMain = () => {
    return (
        <AppLayout props={{ header: <AppHeader />, footer: <EmployeeFooterBar /> }}>
            <StyledBody />
            <StyledEmployeeMainContainer>
                <MainUser />
                <MainBanner />
                <EmployeeWorkStatus />
                <EmployeeAttendanceRecord />
                <EmployeeInfo />
            </StyledEmployeeMainContainer>
        </AppLayout>
    );
};

export default EmployeeMain;

const StyledBody = createGlobalStyle`
    body {
        background: ${Styles.colors.systemBackground};
    }
`;
const StyledEmployeeMainContainer = styled.section`
    width: 100%;
    /* min-height: calc(100vh - 6.4rem); */
    background: ${Styles.colors.systemBackground};
    padding: 1.4rem 1rem 1.3rem;
    overflow: auto;
`;
