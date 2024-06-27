import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import EmployeesAttendanceList from "../component/EmployeeAttendanceList";
import EmployeeFooterBar from "@/components/footer/EmployeeFooterBar";
import styled, { createGlobalStyle } from "styled-components";
import { Styles } from "@/style/Styles";
import ShowMoreButton from "@/components/button/ShowMoreButton";

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
                <ShowMoreButton />
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
