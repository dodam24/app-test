import { Styles } from "@/style/Styles";
import styled from "styled-components";

export const StyledBottomText = styled.div`
    position: fixed;
    bottom: 4.7rem;
    p {
        margin-top: 3.1rem;
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize13};
        font-weight: ${Styles.font.weight.regular};
        white-space: pre-wrap;
    }
`;
