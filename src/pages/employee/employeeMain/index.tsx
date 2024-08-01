import EmployeeFooterBar from "@/components/footer/EmployeeFooterBar";
import AppHeader, { MAIN_URL } from "@/components/header/AppHeader";
import AppLayout from "@/components/layout/AppLayout";
import EmployeeAttendanceRecord from "@/pages/employee/employeeMain/EmployeeAttendanceRecord";
import EmployeeInfo from "@/pages/employee/employeeMain/EmployeeInfo";
import EmployeeUser from "@/pages/employee/employeeMain/EmployeeUser";
import EmployeeWorkStatus from "@/pages/employee/employeeMain/EmployeeWorkStatus";
import MainBanner from "@/pages/main/MainBanner";
import { Styles } from "@/style/Styles";
import styled, { createGlobalStyle } from "styled-components";

// 임시 데이터
const checkInOutData = {
    id: "1",
    check_in_date_time: "20240901090000",
    check_out_date_time: "",
};

const EmployeeMain = () => {
    return (
        <AppLayout props={{ header: <AppHeader url={MAIN_URL} />, footer: <EmployeeFooterBar /> }}>
            <StyledBody />
            <StyledEmployeeMainContainer>
                <EmployeeUser />
                <MainBanner />
                <EmployeeWorkStatus checkInOutData={checkInOutData} />
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
    background: ${Styles.colors.systemBackground};
    padding: 1.4rem 1rem 1.3rem;
    overflow: auto;
`;
