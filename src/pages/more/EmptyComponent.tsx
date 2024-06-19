import { Styles } from "@/style/Styles";
import styled from "styled-components";

interface EmptyComponentProps {
    icon: JSX.Element;
    message: string;
}

const EmptyComponent = ({ icon, message }: EmptyComponentProps) => {
    return (
        <StyledEmptySection>
            {icon}
            <p>{message}</p>
        </StyledEmptySection>
    );
};

const StyledEmptySection = styled.section`
    width: 100%;
    height: calc(100vh - 14rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
        width: 4.5rem;
        height: 4.5rem;
    }
    p {
        color: ${Styles.colors.natural40};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
    }
`;

export default EmptyComponent;
