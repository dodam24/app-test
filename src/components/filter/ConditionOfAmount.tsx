import OptionInput from "@/components/input/OptionInput";
import { Styles } from "@/style/Styles";
import styled from "styled-components";

const ConditionOfAmount = () => {
    return (
        <StyledConditionContainer>
            <h5>금액범위</h5>
            <div>
                <OptionInput type="tel" placeholder="최소" />
                <span>-</span>
                <OptionInput type="tel" placeholder="최대" />
            </div>
        </StyledConditionContainer>
    );
};

export default ConditionOfAmount;

const StyledConditionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    h5 {
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize16};
        font-weight: ${Styles.font.weight.medium};
    }

    div {
        display: flex;
        align-items: center;
        gap: 0.01rem;
        color: ${Styles.colors.natural40};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.medium};
    }
`;
