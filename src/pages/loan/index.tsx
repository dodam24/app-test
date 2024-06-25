import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import LoanContainer from "@/pages/loan/LoanContainer";

const Loan = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="대출상품" /> }}>
            <LoanContainer />
        </AppLayout>
    );
};

export default Loan;
