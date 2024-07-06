import { ConditionProps, StyledConditionMainContainer } from "@/components/filter/ConditionOfDate";
import { MouseEvent } from "react";
import styled from "styled-components";

const CONDITION_OF_STAFF_DATA = ["전체", "직원", "알바"];

const ConditionOfStaffType = ({
    filterOptions,
    setFilterOptions,
    request,
    setRequest,
}: ConditionProps) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        let work_type: number | undefined = 0;
        if (event.currentTarget.innerText === "전체") {
            work_type = undefined;
        } else if (event.currentTarget.innerText === "직원") {
            work_type = 1;
        } else {
            work_type = 2;
        }
        setFilterOptions({ ...filterOptions, filterStaffType: event.currentTarget.innerText });
        setRequest({
            ...request,
            work_type,
        });
    };

    return (
        <StyledConditionContainer>
            <h5>근무유형</h5>
            <ul>
                {CONDITION_OF_STAFF_DATA.map((data, index) => (
                    <li key={index}>
                        <button
                            onClick={handleClick}
                            className={filterOptions.filterStaffType === data ? "active" : ""}
                        >
                            {data}
                        </button>
                    </li>
                ))}
            </ul>
        </StyledConditionContainer>
    );
};

export default ConditionOfStaffType;

const StyledConditionContainer = styled(StyledConditionMainContainer)``;
