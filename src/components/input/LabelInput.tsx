import React, { useState } from "react";
import styled from "styled-components";
import { Styles } from "@/style/Styles";
import CloseEye from "@/assets/images/icons/icon_pw_eye_k.svg";

interface LabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    option?: string;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    showPasswordToggle?: boolean;
    isInvalid?: boolean;
    errorMessage?: string;
}

const LabelInput = ({
    option,
    id,
    handleChange,
    showPasswordToggle,
    isInvalid,
    errorMessage,
    ...rest
}: LabelInputProps) => {
    const [inputType, setInputType] = useState<string>(rest.type || "password");
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setInputType((prevType) => (prevType === "password" ? "text" : "password"));
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <StyledLabelInputWrapper $isInvalid={isInvalid} $isFocused={isFocused}>
            <StyledInputInner $isInvalid={isInvalid} $isFocused={isFocused}>
                {option && <label htmlFor={id}>{option}</label>}
                <StyledInput
                    onChange={handleChange}
                    type={inputType}
                    id={id}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    $isInvalid={isInvalid}
                    $isFocused={isFocused}
                    {...rest}
                />
                {showPasswordToggle && (
                    <ToggleIcon
                        onClick={togglePasswordVisibility}
                        $isInvalid={isInvalid}
                        $isFocused={isFocused}
                    >
                        <img src={CloseEye} alt="toggle visibility" />
                    </ToggleIcon>
                )}
            </StyledInputInner>
            {isInvalid && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </StyledLabelInputWrapper>
    );
};

const StyledLabelInputWrapper = styled.div<{ $isInvalid?: boolean; $isFocused?: boolean }>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    margin-bottom: 1.2rem;
`;

const StyledInputInner = styled.div<{ $isInvalid?: boolean; $isFocused?: boolean }>`
    width: 100%;
    position: relative;
    align-items: center;
    label {
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
    }
`;

const StyledInput = styled.input<{ $isInvalid?: boolean; $isFocused?: boolean }>`
    width: 100%;
    height: 2.3rem;
    padding: 0.55rem 0.8rem;
    caret-color: ${({ $isInvalid }) =>
        $isInvalid
            ? `${Styles.colors.systemError} !important`
            : `${Styles.colors.primary100} !important`};
    background: ${Styles.colors.systemBackground};
    border: none;
    border-radius: 0.4rem;
    margin-top: 0.4rem;

    &::placeholder {
        color: ${Styles.colors.natural40};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
    }

    &:focus {
        border: ${({ $isInvalid, $isFocused }) =>
            $isInvalid && $isFocused
                ? `0.05rem solid ${Styles.colors.systemError} !important`
                : $isFocused
                  ? `0.05rem solid ${Styles.colors.primary100} !important`
                  : "none !important"};
        outline: none;
    }
`;

const ToggleIcon = styled.span<{ $isInvalid?: boolean; $isFocused?: boolean }>`
    position: absolute;
    top: 50%;
    right: 0.8rem;
    transform: translateY(-50%);
    cursor: pointer;
    display: flex;
    align-items: center;
    img {
        width: 1.2rem;
        height: 1.2rem;
        margin: 0;
        filter: ${({ $isInvalid, $isFocused }) =>
            $isInvalid && $isFocused
                ? `invert(56%) sepia(28%) saturate(6410%) hue-rotate(326deg) brightness(96%) contrast(103%)`
                : ``};
    }
`;

const ErrorMessage = styled.div`
    color: ${Styles.colors.systemError};
    font-size: ${Styles.font.size.fontsize12};
    font-weight: 400;
    line-height: 140%;
    margin: 0.1rem 0 0 0.8rem;
`;

export default LabelInput;
