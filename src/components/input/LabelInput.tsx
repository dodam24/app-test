import React from "react";
import CustomInput from "./CustomInput";
import styled from "styled-components";
import { Styles } from "@/style/Styles";

interface LabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    option: string;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    showPasswordToggle?: boolean;
    isInvalid?: boolean;
    errorMessage?: string;
}

const LabelInput = ({
    option,
    handleChange,
    showPasswordToggle,
    isInvalid,
    ...rest
}: LabelInputProps) => {
    return (
        <StyledLabelInputWrapper>
            <label>{option}</label>
            <CustomInput
                className="custom_input"
                handleChange={handleChange}
                showPasswordToggle={showPasswordToggle}
                isInvalid={isInvalid}
                {...rest}
            />
        </StyledLabelInputWrapper>
    );
};

const StyledLabelInputWrapper = styled.fieldset`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    margin-bottom: 1.2rem;
    label {
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
        margin-bottom: 0.4rem;
    }
    .custom_input {
        height: 2.3rem;
    }
`;

export default LabelInput;
