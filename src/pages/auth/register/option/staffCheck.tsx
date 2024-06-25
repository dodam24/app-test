import styled from "styled-components";
import { Styles } from "@/style/Styles";

import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import StaffOfficeSearch from "@/pages/auth/register/option/StaffOfficeSearch";
import StaffOfficeList from "@/pages/auth/register/option/StaffOfficeList";

const StaffCheck = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="가맹점 조회" /> }}>
            <StyledOfficeWrapper>
                <h3>
                    검색된 가맹점 항목을 선택 후<br />
                    입력해 주세요.
                </h3>
                <StaffOfficeSearch />
                <StaffOfficeList />
            </StyledOfficeWrapper>
        </AppLayout>
    );
};

const StyledOfficeWrapper = styled.div`
    width: 100%;
    padding: 0 1rem 0.6rem;
    h3 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
        line-height: 140%;
        width: 100%;
        text-align: left;
        margin: 1rem 0 1.5rem;
    }
`;
export default StaffCheck;
