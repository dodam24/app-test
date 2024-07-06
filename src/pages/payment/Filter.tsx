import styled from "styled-components";
import ConditionOfDate from "@/components/filter/ConditionOfDate";
import ConditionOfStaffType from "@/components/filter/ConditionOfStaffType";
import ConditionOfStatus from "@/components/filter/ConditionOfStatus";
import ConditionOfOrderBy from "@/components/filter/ConditionOfOrderBy";
import ConditionOfAmount from "@/components/filter/ConditionOfAmount";
import { RequestList } from "@/pages/payment/PaymentContainer";
import { Dispatch, SetStateAction } from "react";
import { FilterOptionsState } from "@/pages/payment/FilterContainer";
import FixedButton from "@/components/button/FixedButton";
import OverlayLayout from "@/components/layout/OverlayLayout";
import ConditionOfCategory from "@/components/filter/ConditionOfCategory";

interface FilterProps {
    request: RequestList;
    setRequest: Dispatch<SetStateAction<RequestList>>;
    initRequest: RequestList;
    setInitRequest: Dispatch<SetStateAction<RequestList>>;
    filterOptions: FilterOptionsState;
    setFilterOptions: Dispatch<SetStateAction<FilterOptionsState>>;
    initFilterOptions: FilterOptionsState;
    setInitFilterOptions: Dispatch<SetStateAction<FilterOptionsState>>;
    isShow: boolean;
    setIsShow: Dispatch<SetStateAction<boolean>>;
    isUseConditionOfDate?: boolean;
    isUseConditionOfStaffType?: boolean;
    isUseConditionOfStatus?: boolean;
    isUseConditionOfCategory?: boolean;
    isUseConditionOfOrderBy?: boolean;
    isUseConditionOfAmount?: boolean;
}

const Filter = ({
    request,
    setRequest,
    initRequest,
    setInitRequest,
    filterOptions,
    setFilterOptions,
    initFilterOptions,
    setInitFilterOptions,
    isShow,
    setIsShow,
    isUseConditionOfDate,
    isUseConditionOfStaffType,
    isUseConditionOfStatus,
    isUseConditionOfCategory,
    isUseConditionOfOrderBy,
    isUseConditionOfAmount,
}: FilterProps) => {
    const handleFilterInactive = () => {
        setFilterOptions({ ...initFilterOptions, isActive: false });
        setRequest({ ...request, ...initRequest });
        initFilterOptions.filterDate === "직접설정" ? setIsShow(true) : setIsShow(false);
    };

    const handleSelect = () => {
        setFilterOptions({ ...filterOptions, isActive: false });
        setInitFilterOptions({ ...initFilterOptions, ...filterOptions });
        setInitRequest({ ...initRequest, ...request });
    };

    return (
        <OverlayLayout
            height={92}
            hideOverlay={handleFilterInactive}
            isActive={filterOptions.isActive}
            isHeader={true}
            overlayHeaderTitle="조회조건설정"
        >
            <StyledFilterBody>
                {isUseConditionOfDate && (
                    <ConditionOfDate
                        filterOptions={filterOptions}
                        setFilterOptions={setFilterOptions}
                        request={request}
                        setRequest={setRequest}
                        isShow={isShow}
                        setIsShow={setIsShow}
                    />
                )}
                {isUseConditionOfStaffType && (
                    <ConditionOfStaffType
                        filterOptions={filterOptions}
                        setFilterOptions={setFilterOptions}
                        request={request}
                        setRequest={setRequest}
                    />
                )}
                {isUseConditionOfStatus && (
                    <ConditionOfStatus
                        filterOptions={filterOptions}
                        setFilterOptions={setFilterOptions}
                        request={request}
                        setRequest={setRequest}
                    />
                )}
                {isUseConditionOfCategory && (
                    <ConditionOfCategory
                        filterOptions={filterOptions}
                        setFilterOptions={setFilterOptions}
                        request={request}
                        setRequest={setRequest}
                    />
                )}
                {isUseConditionOfOrderBy && (
                    <ConditionOfOrderBy
                        filterOptions={filterOptions}
                        setFilterOptions={setFilterOptions}
                        request={request}
                        setRequest={setRequest}
                    />
                )}
                {isUseConditionOfAmount && (
                    <ConditionOfAmount request={request} setRequest={setRequest} />
                )}
            </StyledFilterBody>
            <FixedButton onClick={handleSelect}>조회</FixedButton>
        </OverlayLayout>
    );
};

export default Filter;

const StyledFilterBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;
