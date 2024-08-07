import AppLayout from "@/components/layout/AppLayout";
import AppHeader, { MAIN_URL } from "@/components/header/AppHeader";
import AppFooterBar from "@/components/footer/AppFooterBar";
import MainContainer from "@/pages/main/MainContainer";

// todo: 추후 메인 타이틀부분 컴포넌트로 분리
const Main = () => {
    return (
        <AppLayout props={{ header: <AppHeader url={MAIN_URL} />, footer: <AppFooterBar /> }}>
            <MainContainer />
        </AppLayout>
    );
};

export default Main;
