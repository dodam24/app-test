import { ConditionProps, StyledConditionMainContainer } from "@/components/filter/ConditionOfDate";
import { MouseEvent } from "react";
import styled from "styled-components";

const CONDITION_OF_ORDERBY_DATA = ["최신순", "과거순"];

const ConditionOfOrderBy = ({
    filterOptions,
    setFilterOptions,
    request,
    setRequest,
}: ConditionProps) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setFilterOptions({ ...filterOptions, filterOrderBy: event.currentTarget.innerText });
        setRequest({
            ...request,
            sort: event.currentTarget.innerText === "최신순" ? "DESC" : "ASC",
        });
    };

    return (
        <StyledConditionContainer>
            <h5>정렬</h5>
            <ul>
                {CONDITION_OF_ORDERBY_DATA.map((data, index) => (
                    <li key={index}>
                        <button
                            onClick={handleClick}
                            className={filterOptions.filterOrderBy === data ? "active" : ""}
                        >
                            {data}
                        </button>
                    </li>
                ))}
            </ul>
        </StyledConditionContainer>
    );
};

export default ConditionOfOrderBy;

const StyledConditionContainer = styled(StyledConditionMainContainer)``;
