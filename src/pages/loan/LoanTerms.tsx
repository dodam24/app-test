import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import FixedButton from "@/components/button/FixedButton";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import ConsentCheckBox from "@/components/checkbox/ConsentCheckBox";

const LoanTerms = () => {
    const [value, setValue] = useState({
        required_terms_accepted: false,
        selected_terms_accepted_list: [] as string[],
    });

    const handleConsentChange = (
        requiredTermsAccepted: boolean,
        selectedTermsAcceptedList: string[],
    ) => {
        setValue({
            ...value,
            required_terms_accepted: requiredTermsAccepted,
            selected_terms_accepted_list: selectedTermsAcceptedList,
        });
    };
    const navigate = useNavigate();

    const handleApplyButtonClick = () => {
        navigate("/loan/complete", { replace: true });
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="대출신청" /> }}>
            <AppBaseWrapper title={`대출 서비스 인증/동의`}>
                <ConsentCheckBox onChange={handleConsentChange} />
                <FixedButton onClick={handleApplyButtonClick}>확인</FixedButton>
            </AppBaseWrapper>
        </AppLayout>
    );
};

export default LoanTerms;
