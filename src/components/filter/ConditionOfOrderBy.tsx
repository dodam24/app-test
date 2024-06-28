import { StyledConditionMainContainer } from "@/components/filter/ConditionOfDate";
import styled from "styled-components";

const ConditionOfOrderBy = () => {
    return (
        <StyledConditionContainer>
            <h5>정렬</h5>
            <ul>
                <li className="active">최신순</li>
                <li>과거순</li>
            </ul>
        </StyledConditionContainer>
    );
};

export default ConditionOfOrderBy;

const StyledConditionContainer = styled(StyledConditionMainContainer)``;
