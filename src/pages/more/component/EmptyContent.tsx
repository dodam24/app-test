import { Styles } from "@/style/Styles";
import styled from "styled-components";

interface EmptyContentProps {
    icon: JSX.Element;
    message: string;
}

const EmptyContent = ({ icon, message }: EmptyContentProps) => {
    return (
        <StyledEmptySection>
            {icon}
            {message === "" ? "없음" : <p>{message}</p>}
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

export default EmptyContent;
