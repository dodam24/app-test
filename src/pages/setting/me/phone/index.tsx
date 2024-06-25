import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import EditPhoneContainer from "@/pages/setting/me/phone/EditPhoneContainer";

const EditPhone = () => {
    return (
        <AppLayout
            props={{
                header: <AppBackHeader title="휴대폰번호 수정" />,
            }}
        >
            <EditPhoneContainer />
        </AppLayout>
    );
};

export default EditPhone;
