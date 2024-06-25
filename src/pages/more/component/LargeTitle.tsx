import { Styles } from "@/style/Styles";
import styled from "styled-components";

interface LargeTitleProps {
    title: string;
}
const LargeTitle: React.FC<LargeTitleProps> = ({ title }) => {
    return (
        <StyledLargeTitle>
            <h3>{title}</h3>
        </StyledLargeTitle>
    );
};

export default LargeTitle;

const StyledLargeTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    & > h3 {
        flex: 1;
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
        line-height: 1.4;
    }
`;
