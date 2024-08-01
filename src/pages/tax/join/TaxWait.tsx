import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import FixedButton from "@/components/button/FixedButton";

import { Styles } from "@/style/Styles";
import StatusBox from "@/pages/tax/_component/StatusBox";

const TaxWait = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="세무서비스 가입" /> }}>
            <AppBaseWrapper title={`아직 세무 대리 등록이\n대기중이에요!`}>
                <StyledWaitWraaper>
                    <StatusBox title="현재 가입 상태" status="신청" />
                    <StatusBox title="세무대리 등록" status="대기중" />
                </StyledWaitWraaper>
                <StyledBottomText>
                    <p>
                        {`※ 담당 세무사가 지정되고 세무대리를 등록하면\n   수임동의를 할 수 있습니다.세무대리 등록이 완료되면\n   push 알림으로 알려드리니 알림 설정을 허용해주세요.`}
                    </p>
                </StyledBottomText>
                <FixedButton>세무대리 수임동의</FixedButton>
            </AppBaseWrapper>
        </AppLayout>
    );
};

const StyledBottomText = styled.div`
    position: fixed;
    bottom: 4.7rem;
    p {
        margin-top: 3.1rem;
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize13};
        font-weight: ${Styles.font.weight.regular};
        white-space: pre-wrap;
    }
`;

const StyledWaitWraaper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 0.75rem;
`;
export default TaxWait;
