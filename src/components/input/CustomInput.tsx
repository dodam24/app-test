import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

import { Styles } from "../../style/Styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    showPasswordToggle?: boolean;
    isInvalid?: boolean;
    errorMessage?: string;
}

const CustomInput = ({ handleChange, ...rest }: InputProps) => {
    return (
        <StyledInputWrapper>
            <StyledInput onChange={handleChange} {...rest} />
        </StyledInputWrapper>
    );
};

const StyledInputWrapper = styled.div`
    width: 100%;
`;
const StyledInput = styled.input<{ $isInvalid?: boolean }>`
    width: 100%;
    height: 2.8rem;
    padding: 0.55rem 0.8rem;
    align-items: center;
    caret-color: ${Styles.colors.primary100};
    background: ${Styles.colors.systemBackground};
    border: none;

    &::placeholder {
        color: ${Styles.colors.natural40};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
    }

    &:focus {
        border: 0.05rem solid ${Styles.colors.primary100};
        outline: none;
    }

    border-radius: 0.4rem;
`;

export default CustomInput;
