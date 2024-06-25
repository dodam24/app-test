import { useState } from "react";
import styled from "styled-components";

import { Styles } from "@/style/Styles";
import Eye from "@/assets/images/icons/icon_pw_eye_k.svg";

interface OptionInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    options: {
        label?: string;
        errorStatus?: boolean;
        errorMessage?: string;
    };
}

const OptionInput = ({ options, ...rest }: OptionInputProps) => {
    const [passwordView, setPasswordView] = useState<"password" | "text">(
        () => (rest.type = "password"),
    );
    const handlePasswordView = () => {
        setPasswordView(passwordView === "password" ? "text" : "password");
    };

    return (
        <StyledOptionInputContainer>
            {options.label && <label htmlFor={rest.id}>{options.label}</label>}
            <StyledOptionInputInner>
                <StyledOptionInput>
                    <input type={passwordView} {...rest} />
                    <button type="button" onClick={handlePasswordView}>
                        <img src={Eye} alt="비밀번호 보기" />
                    </button>
                </StyledOptionInput>
                {options.errorStatus && <span>{options.errorMessage}</span>}
            </StyledOptionInputInner>
        </StyledOptionInputContainer>
    );
};

export default OptionInput;

const StyledOptionInputContainer = styled.div`
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
        display: block;
        font-size: ${Styles.font.size.fontsize12};
        font-weight: ${Styles.font.weight.regular};
        color: ${Styles.colors.systemError};
        padding: 0.15rem 0.8rem;
    }
    & > .button_input:not(:first-child) {
        margin-top: 0.6rem;
    }
`;
const StyledOptionInput = styled.div`
    display: flex;
    background: ${Styles.colors.systemBackground};
    border: 0.05rem solid ${Styles.colors.systemBackground};
    border-radius: 0.4rem;
    padding: 0 0.8rem;
    &:focus-within {
        border: 0.05rem solid ${Styles.colors.primary100};
    }
    & > input {
        width: 100%;
        height: 2.3rem;
        padding-right: 0.8rem;
        border: none;
        outline: none;
        background: ${Styles.colors.systemBackground};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
        color: ${Styles.colors.natural90};
        &::placeholder {
            color: ${Styles.colors.natural40};
        }
    }
    & > button {
        img {
            display: block;
            width: 1.2rem;
            height: 1.2rem;
        }
    }
`;
