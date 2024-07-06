import { ConditionProps, StyledConditionMainContainer } from "@/components/filter/ConditionOfDate";
import { MouseEvent } from "react";
import styled from "styled-components";

const CONDITION_OF_STAFF_DATA = ["전체", "매출", "매입", "급여"];

const ConditionOfCategory = ({
    filterOptions,
    setFilterOptions,
    request,
    setRequest,
}: ConditionProps) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        let category: "PAYROLL" | "PURCHASE" | "SALE" | undefined;
        if (event.currentTarget.innerText === "전체") {
            category = undefined;
        } else if (event.currentTarget.innerText === "매출") {
            category = "SALE";
        } else if (event.currentTarget.innerText === "매입") {
            category = "PURCHASE";
        } else {
            category = "PAYROLL";
        }
        setFilterOptions({ ...filterOptions, filterCategory: event.currentTarget.innerText });
        setRequest({
            ...request,
            category,
        });
    };

    return (
        <StyledConditionContainer>
            <h5>구분</h5>
            <ul>
                {CONDITION_OF_STAFF_DATA.map((data, index) => (
                    <li key={index}>
                        <button
                            onClick={handleClick}
                            className={filterOptions.filterCategory === data ? "active" : ""}
                        >
                            {data}
                        </button>
                    </li>
                ))}
            </ul>
        </StyledConditionContainer>
    );
};

export default ConditionOfCategory;

const StyledConditionContainer = styled(StyledConditionMainContainer)``;
