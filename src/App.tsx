import { Route, Routes } from "react-router-dom";
import Main from "@/pages/main";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import NotFound from "@/pages/error";

import More from "./pages/more";
import Faq from "@/pages/more/faq";
import FaqDetails from "@/pages/more/faq/[id]/index";
import Notice from "@/pages/more/notice";
import NoticeDetails from "@/pages/more/notice/[id]";
import Inquiry from "@/pages/more/inquiry";
import InquiryList from "@/pages/more/inquiry/inquiryList";
import InquiryEmptyList from "@/pages/more/inquiry/inquiryEmptyList";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path={"*"} element={<NotFound />} />

                <Route path="/more" element={<More />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/faq/:id" element={<FaqDetails />} />
                <Route path="/notice" element={<Notice />} />
                <Route path="/notice/:id" element={<NoticeDetails />} />
                <Route path="/inquiry" element={<Inquiry />} />
                <Route path="/inquiryList" element={<InquiryList />} />
                <Route path="/inquiryEmptyList" element={<InquiryEmptyList />} />
            </Routes>
        </div>
    );
}

export default App;
