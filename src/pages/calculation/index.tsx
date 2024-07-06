import AppFooterBar from "@/components/footer/AppFooterBar";
import AppHeader from "@/components/header/AppHeader";
import AppLayout from "@/components/layout/AppLayout";
import CalculationContainer from "@/pages/calculation/CalculationContainer";

const Calculation = () => {
    return (
        <AppLayout props={{ header: <AppHeader title="정산정보" />, footer: <AppFooterBar /> }}>
            <CalculationContainer />
        </AppLayout>
    );
};

export default Calculation;
