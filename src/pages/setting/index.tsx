import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import SettingsContainer from "@/pages/setting/SettingsContainer";

const Setting = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="설정" /> }}>
            <SettingsContainer />
        </AppLayout>
    );
};

export default Setting;
