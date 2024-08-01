import Input from "@/components/input/Input";
import DatePickerOverlay from "@/components/overlay/DatePickerOverlay";
import useDateOverlay from "@/hooks/useDateOverlay";
import { FilterOptionsState } from "@/pages/payment/FilterContainer";
import { RequestList } from "@/pages/payment/PaymentContainer";
import { Styles } from "@/style/Styles";
import { parseDate2 } from "@/utils/formatDateTime";
import { Dispatch, MouseEvent, SetStateAction, useEffect } from "react";
import styled from "styled-components";

const CONDITION_OF_DATE_DATA = ["1개월", "3개월", "6개월", "직접설정"];

export interface ConditionProps {
    filterOptions: FilterOptionsState;
    setFilterOptions: Dispatch<SetStateAction<FilterOptionsState>>;
    request: RequestList;
    setRequest: Dispatch<SetStateAction<RequestList>>;
    isShow?: boolean;
    setIsShow?: Dispatch<SetStateAction<boolean>>;
}

const ConditionOfDate = ({
    filterOptions,
    setFilterOptions,
    request,
    setRequest,
    isShow,
    setIsShow,
}: ConditionProps) => {
    const { overlayState, setOverlayState, hideOverlay } = useDateOverlay();

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setFilterOptions({ ...filterOptions, filterDate: event.currentTarget.innerText });
        if (event.currentTarget.innerText === "직접설정") {
            setOverlayState({
                ...overlayState,
                startDate: request.start_date,
                endDate: request.end_date,
            });
            setIsShow!(true);
        } else {
            setIsShow!(false);
        }
    };

    useEffect(() => {
        setRequest({
            ...request,
            start_date: overlayState.startDate ?? request.start_date,
            end_date: overlayState.endDate ?? request.end_date,
        });
        return () => {};
    }, [overlayState]);

    return (
        <>
            <StyledConditionMainContainer>
                <h5>조회기간</h5>
                <ul>
                    {CONDITION_OF_DATE_DATA.map((data, index) => (
                        <li key={index}>
                            <button
                                onClick={handleClick}
                                className={filterOptions.filterDate === data ? "active" : ""}
                            >
                                {data}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className={isShow ? `active` : ``}>
                    <Input
                        type="text"
                        readOnly
                        value={parseDate2(request.start_date)}
                        onClick={() => {
                            setOverlayState({
                                ...overlayState,
                                isActive: true,
                                isStartDate: true,
                                isEndDate: false,
                            });
                        }}
                    />
                    <span>-</span>
                    <Input
                        type="text"
                        readOnly
                        value={parseDate2(request.end_date)}
                        onClick={() => {
                            setOverlayState({
                                ...overlayState,
                                isActive: true,
                                isStartDate: false,
                                isEndDate: true,
                            });
                        }}
                    />
                </div>
            </StyledConditionMainContainer>
            <DatePickerOverlay
                overlayState={overlayState}
                setOverlayState={setOverlayState}
                hideOverlay={hideOverlay}
            />
        </>
    );
};

export default ConditionOfDate;

export const StyledConditionMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    h5 {
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize16};
        font-weight: ${Styles.font.weight.medium};
    }

    ul {
        display: flex;
        gap: 0.45rem;

        li {
            flex: 1;

            button {
                color: ${Styles.colors.natural40};
                font-size: ${Styles.font.size.fontsize14};
                font-weight: ${Styles.font.weight.medium};
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid ${Styles.colors.natural40};
                border-radius: 0.4rem;
                height: 1.85rem;

                &.active {
                    color: ${Styles.colors.primary100};
                    border: 1px solid ${Styles.colors.primary100};
                }
            }
        }
    }

    div {
        display: none;
        align-items: center;
        gap: 0.01rem;
        color: ${Styles.colors.natural40};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.medium};

        &.active {
            display: flex;
        }
    }
`;
