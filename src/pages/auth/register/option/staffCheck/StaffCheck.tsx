import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";

import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import StaffOfficeSearch from "@/pages/auth/register/option/staffCheck/StaffOfficeSearch";
import StaffOfficeList from "@/pages/auth/register/option/staffCheck/StaffOfficeList";

const StaffCheck = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="가맹점 조회" /> }}>
            <AppBaseWrapper title={` 검색된 가맹점 항목을 선택 후\n입력해 주세요.`}>
                <StaffOfficeSearch />
                <StaffOfficeList />
            </AppBaseWrapper>
        </AppLayout>
    );
};

export default StaffCheck;
