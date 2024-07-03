import styled from "styled-components";
import { Styles } from "@/style/Styles";

export const StyleDoubleFixedBotton = styled.div`
    width: 100%;
    display: flex;
    gap: 0.75rem;
    position: fixed;
    bottom: 0.6rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 1rem;
    div {
        position: static;
        padding: 0;
    }
    .custom_btn {
        background-color: ${Styles.colors.systemWhite};
        color: ${Styles.colors.primary100};
        border: 1px solid ${Styles.colors.primary100};
    }
`;
