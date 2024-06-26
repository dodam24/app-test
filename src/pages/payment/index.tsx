import AppFooterBar from "@/components/footer/AppFooterBar";
import AppHeader from "@/components/header/AppHeader";
import AppLayout from "@/components/layout/AppLayout";
import React from "react";
import PaymentContainer from "./PaymentContainer";

const Payment = () => {
    return (
        <AppLayout props={{ header: <AppHeader title="결제정보" />, footer: <AppFooterBar /> }}>
            <PaymentContainer />
        </AppLayout>
    );
};

export default Payment;
