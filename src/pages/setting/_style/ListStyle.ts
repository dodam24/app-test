import styled from "styled-components";
import { Styles } from "@/style/Styles";

export const StyledList = styled.div`
    h4 {
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
        color: ${Styles.colors.natural90};
    }
    ul {
        display: flex;
        flex-direction: column;
        padding: 0.5rem 0;
        li {
            display: flex;
            align-items: center;
            min-height: 3.1rem;
            gap: 0.8rem;
            h6 {
                min-width: 5rem;
                font-size: ${Styles.font.size.fontsize15};
                font-weight: ${Styles.font.weight.regular};
                color: ${Styles.colors.natural80};
            }
            span {
                font-size: ${Styles.font.size.fontsize15};
                font-weight: ${Styles.font.weight.regular};
                color: ${Styles.colors.natural60};
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
`;
