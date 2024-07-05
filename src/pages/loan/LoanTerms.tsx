import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";

import { useNavigate } from "react-router-dom";
import FixedButton from "@/components/button/FixedButton";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import ConsentCheckBox from "@/components/checkbox/ConsentCheckBox";

const LoanTerms = () => {
    const navigate = useNavigate();

    const handleApplyButtonClick = () => {
        navigate("/loan/complete");
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="대출신청" /> }}>
            <AppBaseWrapper title={`대출 서비스 인증/동의`}>
                <ConsentCheckBox Loan />
                <FixedButton onClick={handleApplyButtonClick}>확인</FixedButton>
            </AppBaseWrapper>
        </AppLayout>
    );
};

export default LoanTerms;
