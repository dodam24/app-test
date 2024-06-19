import React, { useState, InputHTMLAttributes } from "react";
import styled from "styled-components";
import CloseEye from "../../../public/login/LoginCloseEye.svg";
import { Styles } from "../../style/Styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    showPasswordToggle?: boolean;
    isInvalid?: boolean;
    errorMessage?: string;
}

const CustomInput = ({
    handleChange,
    showPasswordToggle,
    isInvalid,
    errorMessage,
    ...rest
}: InputProps) => {
    const [inputType, setInputType] = useState<string>(rest.type || "password");
    const [showError, setShowError] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setInputType((prevType) => (prevType === "password" ? "text" : "password"));
    };

    const handleFocus = () => {
        setShowError(true);
    };

    const handleBlur = () => {
        setShowError(false);
    };

    return (
        <StyledInputWrapper>
            <StyledInputInner>
                <StyledInput
                    type={inputType}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    $isInvalid={isInvalid && showError}
                    {...rest}
                />
                {showPasswordToggle && (
                    <ToggleIcon
                        onClick={togglePasswordVisibility}
                        $showError={showError}
                        $isInvalid={isInvalid}
                    >
                        <img src={CloseEye} alt="toggle visibility" />
                    </ToggleIcon>
                )}
            </StyledInputInner>
            {isInvalid && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </StyledInputWrapper>
    );
};

const StyledInputWrapper = styled.div`
    width: 100%;
`;

const StyledInputInner = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const StyledInput = styled.input<{ $isInvalid?: boolean }>`
    // 수정: $isInvalid 사용
    width: 100%;
    height: 2.8rem;
    padding: 0.8rem;
    align-items: center;
    caret-color: ${({ $isInvalid }) =>
        $isInvalid ? ` ${Styles.colors.systemError}` : ` ${Styles.colors.primary100}`};
    background: ${Styles.colors.systemBackground};
    border: ${({ $isInvalid }) =>
        $isInvalid ? `0.05rem solid ${Styles.colors.systemError}` : "none"};

    &::placeholder {
        color: ${Styles.colors.natural40};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
    }

    &:focus {
        border: ${({ $isInvalid }) =>
            $isInvalid
                ? `0.05rem solid ${Styles.colors.systemError}`
                : `0.05rem solid ${Styles.colors.primary100}`};
        outline: none;
    }

    border-radius: 0.2rem;
`;

const ToggleIcon = styled.span<{ $isInvalid?: boolean; $showError?: boolean }>`
    // 수정: $isInvalid와 $showError 사용
    position: absolute;
    top: 50%;
    right: 0.8rem;
    transform: translateY(-50%);
    cursor: pointer;
    display: flex;
    justify-content: end;
    align-items: center;

    img {
        width: 1.2rem;
        height: 1.2rem;
        margin: 0;
        filter: ${({ $isInvalid, $showError }) =>
            $isInvalid && $showError
                ? `invert(56%) sepia(28%) saturate(6410%) hue-rotate(326deg) brightness(96%)
            contrast(103%)`
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

export default CustomInput;
