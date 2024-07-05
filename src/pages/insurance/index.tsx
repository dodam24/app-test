import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import InsuranceCheck from "@/pages/insurance/InsuranceCheck";

import { Styles } from "@/style/Styles";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";

const Insurance = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="보험 서비스" /> }}>
            <AppBaseWrapper>
                <StyledCheckTop>
                    <h3>Q</h3>
                    <p>어떤 사업을 하고 계시나요?</p>
                </StyledCheckTop>
                <InsuranceCheck />
            </AppBaseWrapper>
        </AppLayout>
    );
};

const StyledCheckTop = styled.div`
    display: flex;
    gap: 0.6rem;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 1rem;
    h3 {
        color: ${Styles.colors.primary100};
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
    }
    p {
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize16};
        font-weight: ${Styles.font.weight.regular};
    }
`;
export default Insurance;
