import { Route, Routes } from "react-router-dom";
import Main from "@/pages/main";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import NotFound from "@/pages/error";
import OwnerRegister from "@/pages/auth/register/option/register/OwnerRegister";
import StaffRegister from "@/pages/auth/register/option/register/StaffRegister";
import FindID from "@/pages/auth/find/id";
import FindPW from "@/pages/auth/find/pw";
import FindIdList from "@/pages/auth/find/id/FindIdList";
import FindPwList from "@/pages/auth/find/pw/FindPwList";
import PhoneAuth from "@/pages/auth/register/option/PhoneAuth";
import StaffCheck from "@/pages/auth/register/option/staffCheck/StaffCheck";

import More from "@/pages/more";
import Faq from "@/pages/more/faq";
import FaqDetails from "@/pages/more/faq/[id]";
import Notice from "@/pages/more/notice";
import NoticeDetails from "@/pages/more/notice/[id]";
import Inquiry from "@/pages/more/inquiry";
import Alarm from "@/pages/alarm";
import Setting from "@/pages/setting";
import Attendance from "@/pages/employee/attendance";
import AttendanceList from "@/pages/employee/attendanceList";

import Loan from "@/pages/loan";
import LoanItemInfo from "@/pages/loan/LoanItemInfo";
import LoanTerms from "@/pages/loan/LoanTerms";
import LoanComplete from "@/pages/loan/LoanComplete";
import Realty from "@/pages/realty";
import RealtyExamine from "@/pages/realty/RealtyExamine";
import RealtyPayment from "@/pages/realty/RealtyPayment";
import RealtyDepositList from "@/pages/realty/RealtyDepositList";
import Insurance from "@/pages/insurance";
import InsuranceItemList from "@/pages/insurance/InsuranceItemList";
import InsuranceItemInfo from "@/pages/insurance/InsuranceItemInfo";
import InsuranceServiceList from "@/pages/insurance/InsuranceServiceList";
import InsuranceComplete from "@/pages/insurance/InsuranceComplete";
import Shop from "@/pages/shop";
import ShopList from "@/pages/shop/shoplist/ShopList";
import ShopInfo from "@/pages/shop/shoplist/ShopInfo";
import ShopPayment from "@/pages/shop/shoplist/ShopPayment";
import LoginSelect from "@/pages/auth/login/LoginSelect";

import Me from "@/pages/setting/me";
import ChangePassword from "@/pages/setting/password";
import Terms from "@/pages/setting/terms";
import TermsDetail from "@/pages/setting/terms/[id]";
import EditPhone from "@/pages/setting/me/phone";
import EditEmail from "@/pages/setting/me/email";
import DeleteAccount from "@/pages/setting/me/deleteAccount";
import ManageStaffRegister from "@/pages/manage/staffRegister";
import StaffApproval from "@/pages/manage/staffRegister/StaffApproval";
import StaffManageInfo from "@/pages/manage/staffRegister/StaffManageInfo";
import ManagePaymentRegister from "@/pages/manage/paymentRegister";
import Payment from "@/pages/payment";
import PaymentDetail from "@/pages/payment/[id]";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main />} />

                <Route path="/alarm" element={<Alarm />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/setting/me" element={<Me />} />
                <Route path="/setting/me/phone" element={<EditPhone />} />
                <Route path="/setting/me/email" element={<EditEmail />} />
                <Route path="/setting/me/deleteAccount" element={<DeleteAccount />} />

                <Route path="/setting/change_password" element={<ChangePassword />} />
                <Route path="/setting/terms" element={<Terms />} />
                <Route path="/terms/:id" element={<TermsDetail />} />

                {/* 지민 작업사항 */}
                <Route path="/login" element={<Login />} />
                <Route path="/login/select" element={<LoginSelect />} />
                <Route path="/register" element={<Register />} />
                <Route path="/register/owner" element={<OwnerRegister />} />
                <Route path="/register/staff" element={<StaffRegister />} />
                <Route path="/register/staff/check" element={<StaffCheck />} />
                <Route path="/register/phone" element={<PhoneAuth />} />
                <Route path="/find/id" element={<FindID />} />
                <Route path="/find/pw" element={<FindPW />} />
                <Route path="/find/id/list" element={<FindIdList />} />
                <Route path="/find/pw/list" element={<FindPwList />} />

                <Route path="/loan" element={<Loan />} />
                <Route path="/loan/info" element={<LoanItemInfo />} />
                <Route path="/loan/terms" element={<LoanTerms />} />
                <Route path="/loan/complete" element={<LoanComplete />} />

                <Route path="/realty" element={<Realty />} />
                <Route path="/realty/examine" element={<RealtyExamine />} />
                <Route path="/realty/payment" element={<RealtyPayment />} />
                <Route path="/realty/deposit" element={<RealtyDepositList />} />

                <Route path="/insurance" element={<Insurance />} />
                <Route path="/insurance/item" element={<InsuranceItemList />} />
                <Route path="/insurance/info" element={<InsuranceItemInfo />} />
                <Route path="/insurance/complete" element={<InsuranceComplete />} />
                <Route path="/insurance/service" element={<InsuranceServiceList />} />

                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/list" element={<ShopList />} />
                <Route path="/shop/info" element={<ShopInfo />} />
                <Route path="/shop/payment" element={<ShopPayment />} />

                <Route path="/manage/staff/register" element={<ManageStaffRegister />} />
                <Route path="/manage/staff/approval" element={<StaffApproval />} />
                <Route path="/manage/staff/info" element={<StaffManageInfo />} />
                <Route path="/manage/payment/register" element={<ManagePaymentRegister />} />

                <Route path={"*"} element={<NotFound />} />
                <Route path="/more" element={<More />} />
                <Route path="/more/faq" element={<Faq />} />
                <Route path="/more/faq/:id" element={<FaqDetails />} />
                <Route path="/more/notice" element={<Notice />} />
                <Route path="/more/notice/:id" element={<NoticeDetails />} />
                <Route path="/more/inquiry" element={<Inquiry />} />
                <Route path="/employee/attendance" element={<Attendance />} />
                <Route path="/employee/attendanceList" element={<AttendanceList />} />

                <Route path="/payment" element={<Payment />} />
                <Route path="/payment/:id" element={<PaymentDetail />} />
            </Routes>
        </div>
    );
}

export default App;
