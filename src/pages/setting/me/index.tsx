import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import MeContainer from "@/pages/setting/me/MeContainer";

const Me = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="내 정보 확인" /> }}>
            <MeContainer />
        </AppLayout>
    );
};

export default Me;
