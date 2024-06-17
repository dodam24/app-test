import styled, { createGlobalStyle } from "styled-components";
import { Styles } from "@/style/Styles";
import MainUser from "@/pages/main/MainUser";

const MainContainer = () => {
    return (
        <>
            <BodyStyle />
            <StyledMainContainer>
                <MainUser />
            </StyledMainContainer>
        </>
    );
};

export default MainContainer;

const BodyStyle = createGlobalStyle`
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
