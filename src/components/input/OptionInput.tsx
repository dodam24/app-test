import styled, { css } from "styled-components";
import useInput from "@/hooks/useInput";
import Input from "@/components/input/Input";

import { Styles } from "@/style/Styles";
import { Check, Delete, Eye } from "@/components/input/_images/OptionImages";

interface OptionInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    children?: React.ReactNode;
    options?: {
        buttonOption?: {
            checkedOption?: boolean;
            passwordOption?: boolean;
            deleteOption?: boolean;
            timer?: React.ReactNode;
        };
        notice?: string;
        error?: {
            errorStatus?: boolean;
            errorMessage?: string;
        };
    };
    disabled?: boolean;
}

const OptionInput = ({ label, children, options, disabled, ...rest }: OptionInputProps) => {
    const { type, handleTypeChange, handleDeleteValue } = useInput({
        ...rest,
    });

    return (
        <StyledOptionInputContainer>
            {label && <label htmlFor={rest.id}>{label}</label>}
            <StyledOptionInputInner>
                <StyledOptionInputBox
                    $errorStatus={options && options.error && options.error.errorStatus}
                    $disabled={disabled}
                >
                    <div>
                        <StyledOptionInput
                            {...rest}
                            onChange={rest.onChange}
                            type={type}
                            disabled={disabled}
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
                                    <button type="button" onClick={handleTypeChange}>
                                        <img src={Eye} alt="비밀번호 보기" />
                                    </button>
                                )}
                            {options &&
                                options.buttonOption &&
                                options.buttonOption.deleteOption && (
                                    <button type="button" onClick={handleDeleteValue}>
                                        <img src={Delete} alt="삭제" />
                                    </button>
                                )}
                            {options && options.buttonOption && options.buttonOption.timer}
                        </div>
                    </div>
                    {children && children}
                </StyledOptionInputBox>
                {options && options.notice && <span>{options.notice}</span>}
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
const StyledOptionInputBox = styled.div<{ $errorStatus: boolean | undefined; $disabled?: boolean }>`
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
            props.$disabled &&
            css`
                background: ${Styles.colors.natural10};
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
        props.disabled &&
        css`
            background: ${Styles.colors.natural10};
            color: ${Styles.colors.natural40};
            pointer-events: none;
        `}
`;
