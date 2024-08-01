import AppFooterBar from "@/components/footer/AppFooterBar";
import AppHeader, { MAIN_URL } from "@/components/header/AppHeader";
import AppLayout from "@/components/layout/AppLayout";
import TransactionContainer from "@/pages/transaction/TransactionContainer";

const Transaction = () => {
    return (
        <AppLayout
            props={{
                header: <AppHeader url={MAIN_URL} title="매입매출관리" />,
                footer: <AppFooterBar />,
            }}
        >
            <TransactionContainer />
        </AppLayout>
    );
};

export default Transaction;
