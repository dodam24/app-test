import styled from "styled-components";
import { Styles } from "@/style/Styles";

interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Toggle = ({ ...rest }: ToggleProps) => {
    return (
        <StyledToggle>
            <input type="checkbox" {...rest} id={rest.id} />
            <label htmlFor={rest.id}></label>
        </StyledToggle>
    );
};

export default Toggle;

const StyledToggle = styled.div`
    input[type="checkbox"] {
        display: none;
    }
    label {
        position: relative;
        display: block;
        width: 2.5rem;
        height: 1.5rem;
        border-radius: 0.75rem;
        background: ${Styles.colors.natural20};
        cursor: pointer;

        &::before {
            content: "";
            position: absolute;
            top: 0.1rem;
            left: 0.1rem;
            width: 1.3rem;
            height: 1.3rem;
            border-radius: 50%;
            background: ${Styles.colors.systemWhite};
            box-shadow: 0rem 0px 0.8rem 0px rgba(0, 0, 0, 0.2);
            transition: 0.3s;
        }
    }
    input[type="checkbox"]:checked + label {
        background: ${Styles.colors.primary100};
    }
    input[type="checkbox"]:checked + label::before {
        left: calc(100% - 1.4rem);
    }
`;
