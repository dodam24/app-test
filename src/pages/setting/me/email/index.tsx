import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import EditEmailContainer from "@/pages/setting/me/email/EditEmailContainer";

const EditEmail = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="이메일 수정" /> }}>
            <EditEmailContainer />
        </AppLayout>
    );
};

export default EditEmail;
