import { Styles } from "@/style/Styles";
import styled from "styled-components";
import RadioCheckIcon from "@/assets/images/icons/icon_radio_check_k.png";
import RadioCheckedIcon from "@/assets/images/icons/icon_radio_checked_k.png";

interface IRadioInputProps {
    title: string;
    name: string;
    id: string;
}

const RadioInput = ({ title, name, id }: IRadioInputProps) => {
    return (
        <StyledRadioInputWrapper>
            <input type="radio" name={name} id={id} />
            <label htmlFor={id}>{title}</label>
        </StyledRadioInputWrapper>
    );
};

export default RadioInput;

const StyledRadioInputWrapper = styled.div`
    display: flex;
    gap: 0.3rem;
    align-items: center;

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

    label {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
        cursor: pointer; // 라벨에 커서를 포인터로 변경
    }
`;
