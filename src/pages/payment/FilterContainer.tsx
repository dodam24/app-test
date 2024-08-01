import { Styles } from "@/style/Styles";
import styled from "styled-components";
import FilterIcon from "@/assets/images/icons/icon_filter.png";
import useScroll from "@/hooks/useScroll";
import { Dispatch, SetStateAction, useState } from "react";
import Filter from "@/pages/payment/Filter";
import { RequestList } from "@/pages/payment/PaymentContainer";

export interface FilterOptionsState {
    isActive: boolean;
    filterDate?: string;
    filterStatus?: string;
    filterOrderBy?: string;
    filterCategory?: string;
    filterStaffType?: string;
}

interface FilterContainerProps {
    isTransaction?: boolean;
    fixedHeight: number;
    totalCount: number;
    request: RequestList;
    setRequest: Dispatch<SetStateAction<RequestList>>;
    initRequest: RequestList;
    setInitRequest: Dispatch<SetStateAction<RequestList>>;
    isUseConditionOfDate?: boolean;
    isUseConditionOfStaffType?: boolean;
    isUseConditionOfStatus?: boolean;
    isUseConditionOfCategory?: boolean;
    isUseConditionOfOrderBy?: boolean;
    isUseConditionOfAmount?: boolean;
}

const FilterContainer = ({
    isTransaction,
    fixedHeight,
    totalCount,
    request,
    setRequest,
    initRequest,
    setInitRequest,
    isUseConditionOfDate,
    isUseConditionOfStaffType,
    isUseConditionOfStatus,
    isUseConditionOfCategory,
    isUseConditionOfOrderBy,
    isUseConditionOfAmount,
}: FilterContainerProps) => {
    const [isShow, setIsShow] = useState(false);
    const [filterOptions, setFilterOptions] = useState<FilterOptionsState>({
        isActive: false,
        filterDate: "1개월",
        filterStatus: "전체",
        filterOrderBy: "최신순",
        filterCategory: "전체",
        filterStaffType: "전체",
    });
    const [initFilterOptions, setInitFilterOptions] = useState<FilterOptionsState>({
        isActive: false,
        filterDate: "1개월",
        filterStatus: "전체",
        filterOrderBy: "최신순",
        filterCategory: "전체",
        filterStaffType: "전체",
    });
    const { scrollY } = useScroll();

    const handleFilterActive = () => {
        setFilterOptions({ ...filterOptions, isActive: true });
    };

    if (filterOptions.isActive) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "unset";
    }

    return (
        <StyledFilterWrap
            className={`${scrollY >= fixedHeight ? "fixed" : ""}`}
            $isTransaction={isTransaction}
        >
            <StyledFilterContainer className={`${scrollY >= fixedHeight ? "fixed" : ""}`}>
                <span>총 {totalCount}건</span>
                <ul>
                    {isUseConditionOfDate && filterOptions.filterDate && (
                        <>
                            <li>{filterOptions.filterDate}</li>
                            <li>・</li>
                        </>
                    )}
                    {isUseConditionOfStaffType && filterOptions.filterStaffType && (
                        <>
                            <li>{filterOptions.filterStaffType}</li>
                            <li>・</li>
                        </>
                    )}
                    {isUseConditionOfStatus && filterOptions.filterStatus && (
                        <>
                            <li>{filterOptions.filterStatus}</li>
                            <li>・</li>
                        </>
                    )}
                    {isUseConditionOfCategory && filterOptions.filterCategory && (
                        <>
                            <li>{filterOptions.filterCategory}</li>
                            <li>・</li>
                        </>
                    )}
                    {isUseConditionOfOrderBy && filterOptions.filterOrderBy && (
                        <>
                            <li>{filterOptions.filterOrderBy}</li>
                            <li>・</li>
                        </>
                    )}
                    <li>
                        <img
                            src={FilterIcon}
                            alt="필터"
                            className="icon"
                            onClick={handleFilterActive}
                        />
                    </li>
                </ul>
            </StyledFilterContainer>
            <Filter
                request={request}
                setRequest={setRequest}
                initRequest={initRequest}
                setInitRequest={setInitRequest}
                filterOptions={filterOptions}
                setFilterOptions={setFilterOptions}
                initFilterOptions={initFilterOptions}
                setInitFilterOptions={setInitFilterOptions}
                isShow={isShow}
                setIsShow={setIsShow}
                isUseConditionOfDate={isUseConditionOfDate}
                isUseConditionOfStaffType={isUseConditionOfStaffType}
                isUseConditionOfStatus={isUseConditionOfStatus}
                isUseConditionOfCategory={isUseConditionOfCategory}
                isUseConditionOfOrderBy={isUseConditionOfOrderBy}
                isUseConditionOfAmount={isUseConditionOfAmount}
            />
        </StyledFilterWrap>
    );
};

export default FilterContainer;

const StyledFilterWrap = styled.section<{ $isTransaction?: boolean }>`
    &.fixed {
        position: sticky;
        top: ${(props) => (props.$isTransaction ? "calc(6rem - 2px)" : "4rem")};
        left: 0;
        width: 100%;
        display: flex;
        align-items: flex-end;
        z-index: 99999;
        height: auto;
    }

    background-color: ${Styles.colors.systemWhite};
`;

const StyledFilterContainer = styled.div`
    &.fixed {
        width: 100%;
    }

    display: flex;
    align-items: center;
    padding: 0.55rem 1rem;
    justify-content: space-between;
    background-color: ${Styles.colors.systemBackground};
    border-top: 1px solid ${Styles.colors.natural10};
    border-bottom: 1px solid ${Styles.colors.natural10};

    span {
        color: ${Styles.colors.brandBlue};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.medium};
    }

    ul {
        position: relative;
        display: flex;
        align-items: center;
        gap: 0.1rem;

        li {
            color: ${Styles.colors.natural80};
            font-size: ${Styles.font.size.fontsize14};
            font-weight: ${Styles.font.weight.regular};

            &:last-child {
                padding-left: 0.2rem;
            }

            &:nth-last-child(2) {
                display: none;
            }

            img {
                width: 1.3rem;
                vertical-align: middle;
            }
        }
    }
`;
