import FixedButton from "@/components/button/FixedButton";
import BasicCompanyInfo from "@/pages/basic/BasicCompanyInfo";
import BasicConsent from "@/pages/basic/BasicConsent";
import BasicPaymentInfo from "@/pages/basic/BasicPaymentInfo";
import styled from "styled-components";

const BasicContainer = () => {
    return (
        <StyledBasicContainer>
            <BasicCompanyInfo />
            <BasicPaymentInfo />
            <BasicConsent />
            <FixedButton>Basic 회원 신청</FixedButton>
        </StyledBasicContainer>
    );
};

export default BasicContainer;

const StyledBasicContainer = styled.section`
    padding-bottom: 1.8rem;
`;
