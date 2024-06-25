import TermsPrivacyPolicy from "@/pages/setting/terms/TermsPrivacyPolicy";
import TermsRequired from "@/pages/setting/terms/TermsRequired";
import TermsSelect from "@/pages/setting/terms/TermsSelect";
import styled from "styled-components";

const TermsContainer = () => {
    return (
        <StyledTermsContainer>
            <TermsRequired />
            <TermsSelect />
            <TermsPrivacyPolicy />
        </StyledTermsContainer>
    );
};

export default TermsContainer;

const StyledTermsContainer = styled.section`
    padding-bottom: 1.5rem;
`;
