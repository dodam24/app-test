import { ConditionProps, StyledConditionMainContainer } from "@/components/filter/ConditionOfDate";
import { MouseEvent } from "react";
import styled from "styled-components";

const CONDITION_OF_STATUS_DATA = ["전체", "근무", "퇴사"];

const ConditionOfStatus = ({
    filterOptions,
    setFilterOptions,
    request,
    setRequest,
}: ConditionProps) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        let work_status: number | undefined = 0;
        if (event.currentTarget.innerText === "전체") {
            work_status = undefined;
        } else if (event.currentTarget.innerText === "근무") {
            work_status = 1;
        } else {
            work_status = 2;
        }
        setFilterOptions({ ...filterOptions, filterStatus: event.currentTarget.innerText });
        setRequest({
            ...request,
            work_status,
        });
    };

    return (
        <StyledConditionContainer>
            <h5>상태</h5>
            <ul>
                {CONDITION_OF_STATUS_DATA.map((data, index) => (
                    <li key={index}>
                        <button
                            onClick={handleClick}
                            className={filterOptions.filterStatus === data ? "active" : ""}
                        >
                            {data}
                        </button>
                    </li>
                ))}
            </ul>
        </StyledConditionContainer>
    );
};

export default ConditionOfStatus;

const StyledConditionContainer = styled(StyledConditionMainContainer)``;
