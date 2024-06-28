import styled from "styled-components";
import { Styles } from "@/style/Styles";

interface AppBaseWrapperProps {
    title?: string;
    children?: React.ReactNode;
}

const AppBaseWrapper = ({ title, children }: AppBaseWrapperProps) => {
    return (
        <StyledAppBaseWrapper>
            <h2>{title}</h2>
            {children}
        </StyledAppBaseWrapper>
    );
};

export default AppBaseWrapper;

const StyledAppBaseWrapper = styled.div`
    width: 100%;
    padding: 1rem 1rem 0;
    h2 {
        text-align: left;
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
        line-height: 1.4;
        white-space: break-spaces;
    }
`;
