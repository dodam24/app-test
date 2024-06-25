import { Styles } from "@/style/Styles";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ ...rest }: ButtonProps) => {
    return <StyledButton {...rest} disabled />;
};

export default Button;

const StyledButton = styled.button`
    min-width: fit-content;
    border-radius: 0.4rem;
    padding: 0.7rem 1rem;
    background: ${Styles.colors.primary100};
    font-size: ${Styles.font.size.fontsize15};
    font-weight: ${Styles.font.weight.semibold};
    color: ${Styles.colors.systemWhite};
    &:disabled {
        background: ${Styles.colors.primary50};
    }
`;
