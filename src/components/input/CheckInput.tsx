import { Styles } from "@/style/Styles";

import { CheckIcon, CheckedIcon } from "@/pages/auth/login/_images/loginImg";
import styled from "styled-components";

interface ICheckInputProps {
    title?: string;
}

const CheckInput = ({ title, ...rest }: ICheckInputProps) => {
    return (
        <SaveIdWrapper>
            <input type="checkbox" {...rest} />
            <label>{title}</label>
        </SaveIdWrapper>
    );
};

export default CheckInput;
const SaveIdWrapper = styled.div`
    display: flex;
    gap: 0.3rem;
    align-items: center;

    input {
        width: 1rem;
        height: 1rem;
        border-radius: 0.2rem;
        background: url(${CheckIcon}) no-repeat center;
        background-size: 1rem 1rem;
        appearance: none;
        margin: 0;

        &:checked {
            background: url(${CheckedIcon}) no-repeat center;
            background-size: 1rem 1rem;
        }
    }

    label {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
    }
`;
