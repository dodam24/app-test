import AppFooterBar from "@/components/footer/AppFooterBar";
import AppHeader, { MAIN_URL } from "@/components/header/AppHeader";
import AppLayout from "@/components/layout/AppLayout";
import PaymentContainer from "./PaymentContainer";

const Payment = () => {
    return (
        <AppLayout
            props={{
                header: <AppHeader url={MAIN_URL} title="결제정보" />,
                footer: <AppFooterBar />,
            }}
        >
            <PaymentContainer />
        </AppLayout>
    );
};

export default Payment;
