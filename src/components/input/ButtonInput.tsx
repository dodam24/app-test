import React from "react";
import CustomInput from "./CustomInput";
import styled from "styled-components";
import { Styles } from "@/style/Styles";
import EnabledButton from "../button/EnabledButton";

interface ButtonInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    option: string;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    buttonTitle: string;
    onButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonInput = ({
    option,
    id,
    handleChange,
    buttonTitle,
    onButtonClick,
    disabled,
    ...rest
}: ButtonInputProps) => {
    return (
        <StyledButtonInputWrapper>
            <label htmlFor={id}>{option}</label>
            <div>
                <CustomInput id={id} className="custom_input" onChange={handleChange} {...rest} />
                <EnabledButton
                    className="custom_button"
                    onClick={onButtonClick}
                    title={buttonTitle}
                    disabled={disabled}
                />
            </div>
        </StyledButtonInputWrapper>
    );
};

const StyledButtonInputWrapper = styled.fieldset`
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

    div {
        display: flex;
        width: 100%;
        gap: 0.6rem;

        .custom_input {
            width: 100%;
            height: 2.3rem;
        }

        .custom_button {
            position: static;
            left: 0;
            transform: translate(0);
            width: 35%;
            height: 2.3rem;
            padding: 0.7rem 1rem;
            font-size: ${Styles.font.size.fontsize14};
            font-weight: ${Styles.font.weight.medium};
        }
    }
`;

export default ButtonInput;
