import AppFooterBar from "@/components/footer/AppFooterBar";
import AppHeader, { MAIN_URL } from "@/components/header/AppHeader";
import AppLayout from "@/components/layout/AppLayout";
import SettlementContainer from "@/pages/settlement/SettlementContainer";

const Settlement = () => {
    return (
        <AppLayout
            props={{
                header: <AppHeader url={MAIN_URL} title="정산정보" />,
                footer: <AppFooterBar />,
            }}
        >
            <SettlementContainer />
        </AppLayout>
    );
};

export default Settlement;
