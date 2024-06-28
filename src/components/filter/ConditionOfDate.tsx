import { Styles } from "@/style/Styles";
import styled from "styled-components";

const ConditionOfDate = () => {
    return (
        <StyledConditionMainContainer>
            <h5>조회기간</h5>
            <ul>
                <li className="active">1개월</li>
                <li>3개월</li>
                <li>6개월</li>
                <li>직접설정</li>
            </ul>
        </StyledConditionMainContainer>
    );
};

export default ConditionOfDate;

export const StyledConditionMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    h5 {
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize16};
        font-weight: ${Styles.font.weight.medium};
    }

    ul {
        display: flex;
        gap: 0.45rem;
        color: ${Styles.colors.natural40};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.medium};

        li {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid ${Styles.colors.natural40};
            border-radius: 0.4rem;
            flex: 1;
            height: 1.85rem;

            &.active {
                color: ${Styles.colors.primary100};
                border: 1px solid ${Styles.colors.primary100};
            }
        }
    }
`;
