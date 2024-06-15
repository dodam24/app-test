import { Route, Routes } from "react-router-dom";
import Main from "@/pages/main";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import NotFound from "@/pages/error";

import Faq from "@/pages/More/faq";
import Inquiry from "@/pages/More/inquiry";
import Notice from "@/pages/More/notice";
import NoticeDetails from "./pages/More/notice/[id]";
import InquiryList from "./pages/More/inquiry/inquiryList";
import InquiryEmptyList from "./pages/More/inquiry/inquiryEmptyList";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path={"*"} element={<NotFound />} />

                <Route path="/faq" element={<Faq />} />
                <Route path="/inquiry" element={<Inquiry />} />
                <Route path="/inquiryList" element={<InquiryList />} />
                <Route path="/inquiryEmptyList" element={<InquiryEmptyList />} />
                <Route path="/notice" element={<Notice />} />
                <Route path="/notice/:id" element={<NoticeDetails />} />
            </Routes>
        </div>
    );
}

export default App;
