import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import TermsContainer from "@/pages/setting/terms/TermsContainer";

const Terms = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="약관동의관리" /> }}>
            <TermsContainer />
        </AppLayout>
    );
};

export default Terms;
