import styled, { createGlobalStyle } from "styled-components";
import { Styles } from "@/style/Styles";
import MainUser from "@/pages/main/MainUser";
import MainBanner from "@/pages/main/MainBanner";
import MainSales from "@/pages/main/MainSales";
import MainNotice from "@/pages/main/MainNotice";

const MainContainer = () => {
    return (
        <>
            <StyledBody />
            <StyledMainContainer>
                <MainUser />
                <MainBanner />
                <MainSales />
                <MainNotice />
            </StyledMainContainer>
        </>
    );
};

export default MainContainer;

const StyledBody = createGlobalStyle`
    body {
        background: ${Styles.colors.systemBackground};
    }

`;
const StyledMainContainer = styled.section`
    width: 100%;
    min-height: calc(100vh - 6.4rem);
    background: ${Styles.colors.systemBackground};
    padding: 1.4rem 1rem 1.3rem;
    overflow: auto;
`;
