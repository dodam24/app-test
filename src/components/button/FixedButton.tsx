import styled from "styled-components";
import Button, { type ButtonProps } from "@/components/button/Button";
import { Styles } from "@/style/Styles";

const FixedButton = ({ ...rest }: ButtonProps) => {
    return (
        <StyledFixedButton>
            <Button {...rest} />
        </StyledFixedButton>
    );
};

export default FixedButton;

const StyledFixedButton = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 0 1rem 0.6rem;
    background: ${Styles.colors.systemWhite};

    button {
        width: 100%;
    }
`;
