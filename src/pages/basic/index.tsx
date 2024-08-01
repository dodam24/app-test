import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import BasicContainer from "@/pages/basic/BasicContainer";

const BasicSignUp = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="Basic 회원 신청" /> }}>
            <BasicContainer />
        </AppLayout>
    );
};

export default BasicSignUp;
