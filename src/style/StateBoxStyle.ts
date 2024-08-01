import styled from "styled-components";
import { Styles } from "@/style/Styles";

export const StyledStateBox = styled.div`
    text-align: center;
    border-radius: 0.4rem;
    background-color: ${Styles.colors.systemBackground};
    padding: 1.7rem 0;
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
        background-color: ${Styles.colors.primary100};
        padding: 0.2rem 0.7rem;
        display: inline-block;
        border-radius: 4.45rem;
    }
`;

export const StyledStateListWrapper = styled.div`
    width: 100%;
    padding: 1rem 1rem 0;

    ul {
        li {
            display: flex;
            justify-content: space-between;
            padding: 0.8rem 0;
            gap: 1.2rem;
            h4 {
                color: ${Styles.colors.natural60};
                font-size: ${Styles.font.size.fontsize15};
                font-weight: ${Styles.font.weight.regular};
                min-width: fit-content;
            }
            span {
                color: ${Styles.colors.natural80};
                font-size: ${Styles.font.size.fontsize15};
                font-weight: ${Styles.font.weight.regular};
                text-align: right;
                max-width: 70%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .status_span {
                color: ${Styles.colors.systemError};
            }
        }
    }
`;
