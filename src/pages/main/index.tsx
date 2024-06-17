import AppLayout from "@/components/layout/AppLayout";
import AppHeader from "@/components/header/AppHeader";
import AppFooterBar from "@/components/footer/AppFooterBar";
import MainContainer from "@/pages/main/MainContainer";

const Main = () => {
    return (
        <AppLayout props={{ header: <AppHeader />, footer: <AppFooterBar /> }}>
            <MainContainer />
        </AppLayout>
    );
};

export default Main;
