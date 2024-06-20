import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import AlarmHeaderButton from "@/pages/alarm/AlarmHeaderButton";
import AlarmPlaceholder from "@/pages/alarm/AlarmPlaceholder";
import Alarms from "@/pages/alarm/Alarms";

const Alarm = () => {
    const alarm = false;
    return (
        <AppLayout
            props={{ header: <AppBackHeader title="알림" option={<AlarmHeaderButton />} /> }}
        >
            {alarm ? <Alarms /> : <AlarmPlaceholder />}
        </AppLayout>
    );
};

export default Alarm;
