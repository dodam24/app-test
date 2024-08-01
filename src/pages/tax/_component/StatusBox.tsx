import styled from "styled-components";
import { Styles } from "@/style/Styles";

interface IStatusBox {
    status: string;
    title: string;
}

const StatusBox = ({ status, title }: IStatusBox) => {
    return (
        <StyledStateBox status={status}>
            <h3>{title}</h3>
            <p>{status}</p>
        </StyledStateBox>
    );
};

export default StatusBox;

interface StyledStateBoxProps {
    status: string;
}

const StyledStateBox = styled.div<StyledStateBoxProps>`
    text-align: center;
    border-radius: 0.4rem;
    background-color: ${Styles.colors.systemBackground};
    padding: 1.7rem 0;
    margin-top: 1.5rem;
    width: 100%;

    h3 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.medium};
        margin-bottom: 0.4rem;
    }

    p {
        color: ${Styles.colors.systemWhite};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.medium};
        background-color: ${({ status }) =>
            status === "미신청" || status === "대기중"
                ? Styles.colors.systemError
                : status === "신청" || status === "완료"
                  ? Styles.colors.primary100
                  : Styles.colors.systemError};
        padding: 0.2rem 0.7rem;
        display: inline-block;
        border-radius: 4.45rem;
    }
`;
