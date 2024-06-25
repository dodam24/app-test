import styled from "styled-components";

import MeBasicInfo from "@/pages/setting/me/MeBasicInfo";
import MeBuisnessInfo from "@/pages/setting/me/MeBuisnessInfo";
import MeContractInfo from "@/pages/setting/me/MeContractInfo";
import MeOption from "@/pages/setting/me/MeOption";

const MeContainer = () => {
    return (
        <StyledMeContainer>
            <MeBasicInfo />
            <MeBuisnessInfo />
            <MeContractInfo />
            <MeOption />
        </StyledMeContainer>
    );
};

export default MeContainer;

const StyledMeContainer = styled.section`
    padding-bottom: 1.5rem;
`;
