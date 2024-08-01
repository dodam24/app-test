import styled, { css } from "styled-components";
import useInput from "@/hooks/useInput";
import Input from "@/components/input/Input";
import { Styles } from "@/style/Styles";
import {
    Check,
    Delete,
    Eye,
    EyeClose,
    EyeError,
    EyeCloseError,
} from "@/components/input/_images/OptionImages";
import { ReactNode, useState, useRef } from "react";

interface OptionInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "readOnly"> {
    label?: string;
    children?: React.ReactNode;
    options?: {
        buttonOption?: {
            checkedOption?: boolean;
            passwordOption?: boolean;
            deleteOption?: boolean;
            timer?: ReactNode;
        };
        notice?: string;
        noticeStatus?: "success" | "";
        error?: {
            errorStatus?: boolean;
            errorMessage?: string;
        };
        isRequired?: boolean;
        isFloatingLabel?: ReactNode;
    };
    disabled?: boolean;
    readOnly?: boolean | "basic";
}

const OptionInput = ({
    label,
    children,
    options,
    disabled,
    readOnly,
    ...rest
}: OptionInputProps) => {
    const { type, handleTypeChange, handleDeleteValue } = useInput({
        ...rest,
    });
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const deleteButtonRef = useRef<HTMLButtonElement | null>(null);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
        handleTypeChange();
    };

    const handleCustomDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        handleDeleteValue();
        setTimeout(() => setIsFocused(false), 0);
    };

    const handleBlur = () => {
        setTimeout(() => {
            if (document.activeElement !== deleteButtonRef.current) {
                setIsFocused(false);
            }
        }, 0);
    };

    return (
        <StyledOptionInputContainer>
            {label && (
                <label htmlFor={rest.id}>
                    {label}
                    {options?.isRequired && <span>*</span>}
                </label>
            )}
            <StyledOptionInputInner>
                <StyledOptionInputBox
                    $errorStatus={options && options.error && options.error.errorStatus}
                    $disabled={disabled}
                    $readOnly={readOnly}
                >
                    <div>
                        <StyledOptionInput
                            {...rest}
                            onChange={rest.onChange}
                            onFocus={() => setIsFocused(true)}
                            onBlur={handleBlur}
                            type={type}
                            disabled={disabled}
                            readOnly={readOnly}
                        />
                        <div>
                            {options &&
                                options.buttonOption &&
                                options.buttonOption.checkedOption && (
                                    <img src={Check} alt="사용가능" />
                                )}
                            {options &&
                                type &&
                                options.buttonOption &&
                                options.buttonOption.passwordOption && (
                                    <button type="button" onClick={togglePasswordVisibility}>
                                        <img
                                            src={
                                                options.error && options.error.errorStatus
                                                    ? isPasswordVisible
                                                        ? EyeError
                                                        : EyeCloseError
                                                    : isPasswordVisible
                                                      ? Eye
                                                      : EyeClose
                                            }
                                            alt="비밀번호 보기"
                                        />
                                    </button>
                                )}
                            {options &&
                                options.buttonOption &&
                                options.buttonOption.deleteOption &&
                                isFocused && (
                                    <button
                                        type="button"
                                        onMouseDown={(e) => e.preventDefault()}
                                        onClick={handleCustomDelete}
                                        ref={deleteButtonRef}
                                    >
                                        <img src={Delete} alt="삭제" />
                                    </button>
                                )}
                            {options && options.buttonOption && options.buttonOption.timer}
                            {options && options.isFloatingLabel && options.isFloatingLabel}
                        </div>
                    </div>
                    {children && children}
                </StyledOptionInputBox>
                {options?.notice && (
                    <StyledNotice $status={options.noticeStatus}>{options.notice}</StyledNotice>
                )}
                {options && options.error && options.error.errorStatus && (
                    <span>{options.error.errorMessage}</span>
                )}
            </StyledOptionInputInner>
        </StyledOptionInputContainer>
    );
};

export default OptionInput;

const StyledOptionInputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    & > label {
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
        color: ${Styles.colors.natural80};
        > span {
            color: ${Styles.colors.systemError};
        }
    }
`;
const StyledOptionInputInner = styled.div`
    & > span {
        width: fit-content;
        display: block;
        font-size: ${Styles.font.size.fontsize12};
        font-weight: ${Styles.font.weight.regular};
        color: ${Styles.colors.systemError};
        padding: 0.15rem 0.8rem;
        white-space: break-spaces;
    }
    & > .button_input:not(:first-child) {
        margin-top: 0.6rem;
    }
`;
const StyledOptionInputBox = styled.div<{
    $errorStatus: boolean | undefined;
    $disabled?: boolean;
    $readOnly?: boolean | "basic";
}>`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    & > div {
        width: 100%;
        display: flex;
        background: ${Styles.colors.systemBackground};
        border: 0.05rem solid ${Styles.colors.systemBackground};
        border-radius: 0.4rem;
        padding: 0 0.8rem;
        &:focus-within {
            ${(props) =>
                !props.$errorStatus && `border: 0.05rem solid ${Styles.colors.primary100};`}
        }
        ${(props) => props.$errorStatus && `border: 0.05rem solid ${Styles.colors.systemError};`}
        ${(props) =>
            (props.$disabled || (props.$readOnly && props.$readOnly !== "basic")) &&
            css`
                background: ${Styles.colors.natural10};
                color: ${Styles.colors.natural60};
            `}
        & > div {
            display: flex;
            align-items: center;
            gap: 0.4rem;
            & img {
                display: block;
                width: 1.2rem;
                height: 1.2rem;
            }
        }
    }
`;

const StyledOptionInput = styled(Input)<OptionInputProps>`
    border: none;
    padding: 0;
    &:focus {
        border: none;
    }
    ${(props) =>
        (props.disabled || (props.readOnly && props.readOnly !== "basic")) &&
        css`
            background: ${Styles.colors.natural10};
            color: ${Styles.colors.natural40};
            pointer-events: none;
        `}
`;
const StyledNotice = styled.span<{ $status?: "success" | "" }>`
    color: ${(props) =>
        props.$status === "success" ? Styles.colors.primary100 : Styles.colors.natural80};
    width: fit-content;
    display: block;
    font-size: ${Styles.font.size.fontsize12};
    font-weight: ${Styles.font.weight.regular};
    padding: 0.15rem 0.8rem;
    white-space: break-spaces;
    // width 부터는 확인해보고 안써도 똑같으면 삭제 예정
`;
