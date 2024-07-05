import AppBackHeader from "@/components/header/AppBackHeader";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import AppLayout from "@/components/layout/AppLayout";
import LoanContainer from "@/pages/loan/LoanContainer";

const Loan = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="대출상품" /> }}>
            <AppBaseWrapper>
                <LoanContainer />
            </AppBaseWrapper>
        </AppLayout>
    );
};

export default Loan;
