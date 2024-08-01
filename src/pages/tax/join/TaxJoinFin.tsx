import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import FixedButton from "@/components/button/FixedButton";

import StatusBox from "@/pages/tax/_component/StatusBox";
import { StyledBottomText } from "@/style/FixedStyle";

const TaxJoinFin = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="세무서비스 가입" /> }}>
            <AppBaseWrapper title={`세무대리 등록이 확인되었어요.\n수임동의를 진행해주세요!`}>
                <StyledWaitWraaper>
                    <StatusBox title="현재 가입 상태" status="신청" />
                    <StatusBox title="세무대리 등록" status="완료" />
                </StyledWaitWraaper>
                <StyledBottomText>
                    <p>
                        {`※ 세무대리 수임동의를 하시면 세무서비스 가입이 완료됩니다.\n   세무대리 수임동의를 진행해주세요.`}
                    </p>
                </StyledBottomText>
                <FixedButton>세무대리 수임동의</FixedButton>
            </AppBaseWrapper>
        </AppLayout>
    );
};

const StyledWaitWraaper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 0.75rem;
`;
export default TaxJoinFin;
