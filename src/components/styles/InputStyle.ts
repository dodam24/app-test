import { Styles } from "@/style/Styles";
import styled from "styled-components";

export const StyledBaseInputWrapper = styled.form`
    margin: 1.5rem 0 4rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;

export const StyledInputRadioWrapper = styled.div`
    input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 1rem;
        min-width: 1rem;
        height: 1rem;
        margin: 0;
        border: 0.1rem solid ${Styles.colors.natural30};
        border-radius: 50%;
        outline: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;

        &:checked {
            background-color: ${Styles.colors.systemWhite};
            border-color: ${Styles.colors.primary100};
        }

        &:checked::before {
            content: "";
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            background-color: ${Styles.colors.primary100};
        }
    }
`;

export const StyledEmailWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 24px 1fr;
    align-items: end;
    span {
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
        margin: 0 0.3rem 0.75rem;
        flex: 1;
    }
`;
