import styled from "styled-components";
import { Styles } from "@/style/Styles";

interface IAlarmHeaderButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const AlarmHeaderButton = ({ ...rest }: IAlarmHeaderButtonProps) => {
    return (
        <StyledAlarmHeaderButton {...rest}>
            <span>모두 읽음</span>
        </StyledAlarmHeaderButton>
    );
};

export default AlarmHeaderButton;

const StyledAlarmHeaderButton = styled.button`
    height: inherit;
    padding: 0 0.8rem;
    & > span {
        position: relative;
        font-size: ${Styles.font.size.fontsize12};
        font-weight: ${Styles.font.weight.regular};
        color: ${Styles.colors.natural60};

        &::before {
            content: "";
            position: absolute;
            left: 0;
            bottom: -0.03rem;
            width: 100%;
            height: 0.05rem;
            background-color: ${Styles.colors.natural40};
        }
    }
`;
