import { StyledConditionMainContainer } from "@/components/filter/ConditionOfDate";
import styled from "styled-components";

const ConditionOfStaffType = () => {
    return (
        <StyledConditionContainer>
            <h5>근무유형</h5>
            <ul>
                <li className="active">전체</li>
                <li>직원</li>
                <li>알바</li>
            </ul>
        </StyledConditionContainer>
    );
};

export default ConditionOfStaffType;

const StyledConditionContainer = styled(StyledConditionMainContainer)``;
