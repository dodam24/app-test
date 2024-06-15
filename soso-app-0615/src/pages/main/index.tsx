import AppLayout from "@/components/layout/AppLayout";
import AppHeader from "@/components/header/AppHeader";
import AppFooterBar from "@/components/footer/AppFooterBar";

const Main = () => {
    return (
        <AppLayout props={{ header: <AppHeader />, footer: <AppFooterBar /> }}>
            <h1>Main</h1>
        </AppLayout>
    );
};

export default Main;
