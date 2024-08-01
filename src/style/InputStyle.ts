import { Styles } from "@/style/Styles";
import styled from "styled-components";
import RadioCheckIcon from "@/assets/images/icons/icon_radio_check_k.png";
import RadioCheckedIcon from "@/assets/images/icons/icon_radio_checked_k.png";

export const StyledBaseInputWrapper = styled.form`
    margin: 1.5rem 0 4rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;

export const StyledInputRadioWrapper = styled.div`
    input {
        width: 1rem;
        height: 1rem;
        border-radius: 0.2rem;
        background: url(${RadioCheckIcon}) no-repeat center;
        background-size: 1rem 1rem;
        appearance: none;
        margin: 0;

        &:checked {
            background: url(${RadioCheckedIcon}) no-repeat center;
            background-size: 1rem 1rem;
        }

        &:focus {
            outline: none;
        }
    }
`;

export const StyledLabelRadioInputWrapper = styled(StyledInputRadioWrapper)`
    label {
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
    }
    .select_radio {
        display: flex;
        gap: 1rem;

        label {
            display: flex;
            align-items: center;
            gap: 0.3rem;
            margin-top: 0.4rem;
            color: ${Styles.colors.natural40};
            font-size: ${Styles.font.size.fontsize14};
            font-weight: ${Styles.font.weight.regular};
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
