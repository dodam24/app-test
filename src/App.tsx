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
import EmailConsultation from "@/pages/more/emailConsultation";
import Alarm from "@/pages/alarm";
import Setting from "@/pages/setting";
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
import LoginSelect from "@/pages/auth/login/select/LoginSelect";

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
import CheckIn from "@/pages/employee/checkin";
import CheckOut from "@/pages/employee/checkout";
import Configuration from "@/pages/employee/configuration";
import StaffManageInput from "@/pages/manage/staffRegister/StaffManageInput";
import StaffApprovalInput from "@/pages/manage/staffRegister/StaffApprovalInput";
import StaffInfoChangeInput from "@/pages/manage/staffRegister/StaffInfoChangeInput";
import RealtyDepositInfo from "@/pages/realty/RealtyDepositInfo";
import InsuranceServiceInfo from "@/pages/insurance/InsuranceServiceInfo";
import Settlement from "@/pages/settlement";
import SettlementDetail from "@/pages/settlement/[id]";
import Transaction from "@/pages/transaction";
import EmployeeMain from "./pages/employee/employeeMain/index";
import TransactionDetail from "@/pages/transaction/[id]";
import TransactionDetailEdit from "@/pages/transaction/[id]/TransactionDetailEdit";
import TransactionPurchaseAdd from "@/pages/transaction/purchase";
import TransactionSaleAdd from "@/pages/transaction/sale";
import BasicSignUp from "@/pages/basic";
import ConsentCheckBoxInfo from "@/components/checkbox/ConsentCheckBoxInfo";
import ManagePaymentInfo from "@/pages/manage/paymentRegister/ManagePaymentInfo";
import Splash from "@/pages/auth/Splash";
import Tax from "@/pages/tax";
import TaxNotApplied from "@/pages/tax/join/TaxNotApplied";
import TaxWait from "@/pages/tax/join/TaxWait";
import TaxJoinFin from "@/pages/tax/join/TaxJoinFin";
import TaxSimpleAuth from "@/pages/tax/join/TaxSimpleAuth";
import TaxJoinFinStaff from "@/pages/tax/join/TaxJoinFinStaff";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/basic" element={<BasicSignUp />} />s
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
                <Route path="/splash" element={<Splash />} />
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
                <Route path="/loan/info/:id" element={<LoanItemInfo />} />
                <Route path="/loan/terms" element={<LoanTerms />} />
                <Route path="/loan/complete" element={<LoanComplete />} />
                <Route path="/realty" element={<Realty />} />
                <Route path="/realty/examine" element={<RealtyExamine />} />
                <Route path="/realty/payment" element={<RealtyPayment />} />
                <Route path="/realty/deposit" element={<RealtyDepositList />} />
                <Route path="/realty/deposit/info/:id" element={<RealtyDepositInfo />} />
                <Route path="/insurance" element={<Insurance />} />
                <Route path="/insurance/item" element={<InsuranceItemList />} />
                <Route path="/insurance/info/:id" element={<InsuranceItemInfo />} />
                <Route path="/insurance/complete" element={<InsuranceComplete />} />
                <Route path="/insurance/service" element={<InsuranceServiceList />} />
                <Route path="/insurance/service/info/:id" element={<InsuranceServiceInfo />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/list/:id" element={<ShopList />} />
                <Route path="/shop/info/:id" element={<ShopInfo />} />
                <Route path="/shop/payment" element={<ShopPayment />} />
                <Route path="/manage/staff/register" element={<ManageStaffRegister />} />
                <Route path="/manage/staff/approval" element={<StaffApproval />} />
                <Route path="/manage/staff/approval/input" element={<StaffApprovalInput />} />
                <Route path="/manage/staff/change" element={<StaffInfoChangeInput />} />
                <Route path="/manage/staff/info/:id" element={<StaffManageInfo />} />
                <Route path="/manage/staff/input" element={<StaffManageInput />} />
                <Route path="/manage/payment/register" element={<ManagePaymentRegister />} />
                <Route path="/manage/payment/info/:id" element={<ManagePaymentInfo />} />
                <Route path={"*"} element={<NotFound />} />
                <Route path="/more" element={<More />} />
                <Route path="/more/faq" element={<Faq />} />
                <Route path="/more/faq/:id" element={<FaqDetails />} />
                <Route path="/more/notice" element={<Notice />} />
                <Route path="/more/notice/:id" element={<NoticeDetails />} />
                <Route path="/more/emailConsultation" element={<EmailConsultation />} />
                <Route path="/employee/checkin" element={<CheckIn />} />
                <Route path="/employee/checkout" element={<CheckOut />} />
                <Route path="/employee/attendanceList" element={<AttendanceList />} />
                <Route path="/employee/configuration" element={<Configuration />} />
                <Route path="/employee/employeeMain" element={<EmployeeMain />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/payment/:id" element={<PaymentDetail />} />
                <Route path="/settlement" element={<Settlement />} />
                <Route path="/settlement/:id" element={<SettlementDetail />} />
                <Route path="/transaction" element={<Transaction />} />
                <Route path="/transaction/:id" element={<TransactionDetail />} />
                <Route path="/transaction/:id/edit" element={<TransactionDetailEdit />} />
                <Route path="/transaction/purchase/add" element={<TransactionPurchaseAdd />} />
                <Route path="/transaction/sale/add" element={<TransactionSaleAdd />} />
                <Route path="/checkbox/info/:id" element={<ConsentCheckBoxInfo />} />
                <Route path="/tax" element={<Tax />} />
                <Route path="/tax/notApplied" element={<TaxNotApplied />} />
                <Route path="/tax/wait" element={<TaxWait />} />
                <Route path="/tax/fin" element={<TaxJoinFin />} />
                <Route path="/tax/auth" element={<TaxSimpleAuth />} />
                <Route path="/tax/fin/staff" element={<TaxJoinFinStaff />} />
            </Routes>
        </div>
    );
}

export default App;
