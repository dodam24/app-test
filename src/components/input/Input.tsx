import styled from "styled-components";
import { Styles } from "@/style/Styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: InputProps) => {
    return <StyledInput {...rest} />;
};

export default Input;

const StyledInput = styled.input`
    width: 100%;
    height: 2.3rem;
    padding: 0 0.8rem;
    border: 0.05rem solid transparent;
    border-radius: 0.4rem;
    background: ${Styles.colors.systemBackground};
    font-size: ${Styles.font.size.fontsize15};
    font-weight: ${Styles.font.weight.regular};
    color: ${Styles.colors.natural90};
    outline: none;
    &::placeholder {
        color: ${Styles.colors.natural40};
    }
    &:focus {
        border: 0.05rem solid ${Styles.colors.primary100};
    }
`;
