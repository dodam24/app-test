import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import EmployeesAttendanceList from "../component/EmployeeAttendanceList";
import ShowMoreButton from "@/components/button/ShowMoreButton";
import EmployeeFooterBar from "@/components/footer/EmployeeFooterBar";
import styled, { createGlobalStyle } from "styled-components";
import { Styles } from "@/style/Styles";

const AttendanceList = () => {
    return (
        <AppLayout
            props={{ header: <AppBackHeader title="근무내역" />, footer: <EmployeeFooterBar /> }}
        >
            <StyledAttendanceBody />
            <StyledAttendanceListSection>
                <StyledLargeTitle>2023.03</StyledLargeTitle>
                <EmployeesAttendanceList />
                <ShowMoreButton />
            </StyledAttendanceListSection>
        </AppLayout>
    );
};

export default AttendanceList;

const StyledAttendanceBody = createGlobalStyle`
    body {
        background: ${Styles.colors.systemBackground};
    }
`;
const StyledAttendanceListSection = styled.section`
    padding: 1rem 1rem 0 1rem;
`;

const StyledLargeTitle = styled.h3`
    color: ${Styles.colors.natural90};
    font-size: ${Styles.font.size.fontsize18};
    font-weight: ${Styles.font.weight.medium};
    line-height: 1.4;
`;
