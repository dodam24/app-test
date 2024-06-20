import AppLayout from "@/components/layout/AppLayout";
import AppHeader from "@/components/header/AppHeader";
import styled from "styled-components";
import AppFooterBar from "@/components/footer/AppFooterBar";
import { Styles } from "@/style/Styles";
import MoreServiceMenu from "./MoreServiceMenu";
import MoreUser from "./MoreUser";

const More = () => {
    return (
        <AppLayout props={{ header: <AppHeader title="더보기" /> }}>
            <StyledMoreWrap>
                <MoreUser />
                <div className="border" />
                <MoreServiceMenu />
            </StyledMoreWrap>
            <AppFooterBar />
        </AppLayout>
    );
};

const StyledMoreWrap = styled.section`
    width: 100%;

    .border {
        background: ${Styles.colors.systemBackground};
        width: 100%;
        height: 0.6rem;
    }
`;

export default More;
