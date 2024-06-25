import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import TermsDetailContainer from "@/pages/setting/terms/[id]/TermsDetailContainer";

const TermsDetail = () => {
    return (
        <AppLayout
            props={{
                header: <AppBackHeader title="약관 상세페이지" />,
            }}
        >
            <TermsDetailContainer />
        </AppLayout>
    );
};

export default TermsDetail;
