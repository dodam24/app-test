import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import PaymentDetailContainer from "@/pages/payment/[id]/PaymentDetailContainer";

const PaymentDetail = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="결제 상세내역" /> }}>
            <PaymentDetailContainer />
        </AppLayout>
    );
};

export default PaymentDetail;
