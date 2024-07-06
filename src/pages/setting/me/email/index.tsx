import FixedButton from "@/components/button/FixedButton";
import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import EditEmailContainer from "@/pages/setting/me/email/EditEmailContainer";

const EditEmail = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="이메일 수정" /> }}>
            <EditEmailContainer />
            <FixedButton>저장</FixedButton>
        </AppLayout>
    );
};

export default EditEmail;
