import AppHeader, { MAIN_URL } from "@/components/header/AppHeader";
import AppLayout from "@/components/layout/AppLayout";

const TransactionSaleAdd = () => {
    return (
        <AppLayout props={{ header: <AppHeader url={MAIN_URL} title="매입매출관리" /> }}>
            <>매출등록</>
        </AppLayout>
    );
};

export default TransactionSaleAdd;
