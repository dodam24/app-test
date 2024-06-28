import { StyledConditionMainContainer } from "@/components/filter/ConditionOfDate";
import styled from "styled-components";

const ConditionOfStatus = () => {
    return (
        <StyledConditionContainer>
            <h5>상태</h5>
            <ul>
                <li className="active">전체</li>
                <li>근무</li>
                <li>퇴사</li>
            </ul>
        </StyledConditionContainer>
    );
};

export default ConditionOfStatus;

const StyledConditionContainer = styled(StyledConditionMainContainer)``;
