import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import FaqCustomerService from "@/pages/more/faq/FaqCustomerService";
import styled from "styled-components";
import FaqSearch from "@/pages/more/faq/FaqSearch";
import FaqTabButton from "@/pages/more/faq/FaqTabButton";

const Faq = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="고객센터" /> }}>
            <StyledFaqWrap>
                <FaqSearch />
                <StyledFaqContent>
                    <FaqTabButton />
                </StyledFaqContent>
                <FaqCustomerService />
            </StyledFaqWrap>
        </AppLayout>
    );
};

export default Faq;

const StyledFaqWrap = styled.main`
    position: relative;
    width: 100%;
    margin-top: 1.5rem;
`;
const StyledFaqContent = styled.div`
    flex: 1;
    overflow-y: auto;
`;
