import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import InsuranceCheck from "@/pages/insurance/InsuranceCheck";

import { Styles } from "@/style/Styles";

const Insurance = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="보험 서비스" /> }}>
            <StyledCheckWrapper>
                <StyledCheckTop>
                    <h3>Q</h3>
                    <p>어떤 사업을 하고 계시나요?</p>
                </StyledCheckTop>
                <InsuranceCheck />
            </StyledCheckWrapper>
        </AppLayout>
    );
};

const StyledCheckWrapper = styled.div`
    width: 100%;
    padding: 0 1rem;
`;
const StyledCheckTop = styled.div`
    display: flex;
    gap: 0.6rem;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem 0;
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
