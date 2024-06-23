import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import EmployeesAttendance from "../component/EmployeeAttendance";

const Attendance = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="출근등록" /> }}>
            <EmployeesAttendance />
        </AppLayout>
    );
};

export default Attendance;
