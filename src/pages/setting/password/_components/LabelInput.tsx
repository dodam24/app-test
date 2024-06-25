import styled from "styled-components";
import Input from "@/pages/setting/password/_components/Input";
import { Styles } from "@/style/Styles";

interface LabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const LabelInput = ({ label, ...rest }: LabelInputProps) => {
    return (
        <StyledLabelInput>
            <label htmlFor={rest.id}>{label}</label>
            <Input {...rest} />
        </StyledLabelInput>
    );
};

export default LabelInput;

const StyledLabelInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    & > label {
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
        color: ${Styles.colors.natural80};
    }
`;
