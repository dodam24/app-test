import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import FixedButton from "@/components/button/FixedButton";

import StatusBox from "@/pages/tax/_component/StatusBox";
import { StyledBottomText } from "@/style/FixedStyle";

const TaxNotApplied = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="세무서비스 가입" /> }}>
            <AppBaseWrapper title={`plus회원이 되시면\n매입/매출 서비스를 이용할 수 있어요!`}>
                <StatusBox title="현재 가입 상태" status="미신청" />
                <StyledBottomText>
                    <p>※ 가입 신청시 세무사로부터 세무대리 등록이 진행됩니다.</p>
                </StyledBottomText>
                <FixedButton>가입 신청하기</FixedButton>
            </AppBaseWrapper>
        </AppLayout>
    );
};

export default TaxNotApplied;
