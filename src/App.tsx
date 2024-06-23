import { Route, Routes } from "react-router-dom";
import Main from "@/pages/main";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import NotFound from "@/pages/error";
import OwmerRegister from "@/pages/auth/register/option/ownerRegister";
import StaffRegister from "@/pages/auth/register/option/staffRegister";
import FindID from "./pages/auth/find/id";
import FindPW from "@/pages/auth/find/pw/";
import FindIdList from "./pages/auth/find/id/findIdList";
import FindPwList from "./pages/auth/find/pw/findPwList";
import PhoneAuth from "./pages/auth/register/option/phoneAuth";
import StaffCheck from "./pages/auth/register/option/staffCheck";

import More from "./pages/more";
import Faq from "@/pages/more/faq";
import FaqDetails from "@/pages/more/faq/[id]/index";
import Notice from "@/pages/more/notice";
import NoticeDetails from "@/pages/more/notice/[id]";
import Inquiry from "@/pages/more/inquiry";
import Alarm from "@/pages/alarm";
import Setting from "@/pages/setting";
// 직원용: 출퇴근 등록 및 근무 내역 (temp)
import Attendance from "@/pages/employees_c/attendance";
import AttendanceList from "@/pages/employees_c/attendanceList";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/alarm" element={<Alarm />} />
                <Route path="/setting" element={<Setting />} />

                {/* 지민 작업사항 */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/register/owner" element={<OwmerRegister />} />
                <Route path="/register/staff" element={<StaffRegister />} />
                <Route path="/register/staff/check" element={<StaffCheck />} />
                <Route path="/register/auth" element={<PhoneAuth />} />
                <Route path="/find/id" element={<FindID />} />
                <Route path="/find/pw" element={<FindPW />} />
                <Route path="/find/id/list" element={<FindIdList />} />
                <Route path="/find/pw/list" element={<FindPwList />} />

                <Route path={"*"} element={<NotFound />} />
                {/* 도담 작업사항 */}
                <Route path="/more" element={<More />} />
                <Route path="/more/faq" element={<Faq />} />
                <Route path="/more/faq/:id" element={<FaqDetails />} />
                <Route path="/more/notice" element={<Notice />} />
                <Route path="/more/notice/:id" element={<NoticeDetails />} />
                <Route path="/more/inquiry" element={<Inquiry />} />
                {/* 직원용: 출/퇴근 등록 및 근무내역 (temp) */}
                <Route path="/employees_c/attendance" element={<Attendance />} />
                <Route path="/employees_c/attendanceList" element={<AttendanceList />} />
            </Routes>
        </div>
    );
}

export default App;
