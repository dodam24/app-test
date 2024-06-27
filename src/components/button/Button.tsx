import { Styles } from "@/style/Styles";
import styled from "styled-components";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: "sub" | "main";
}

const Button = ({ size = "main", ...rest }: ButtonProps) => {
    return <StyledButton {...rest} $size={size} />;
};

export default Button;

const StyledButton = styled.button<{ $size: "sub" | "main" }>`
    min-width: fit-content;
    width: ${(props) => props.$size === "main" && "100%"};
    height: ${(props) => (props.$size === "main" ? "2.8rem" : "2.3rem")};
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
