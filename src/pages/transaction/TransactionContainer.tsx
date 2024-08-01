import FilterContainer from "@/pages/payment/FilterContainer";
import { RequestList } from "@/pages/payment/PaymentContainer";
import TransactionListItem from "@/pages/transaction/TransactionListItem";
import TransactionListItemHeader from "@/pages/transaction/TransactionListItemHeader";
import { Styles } from "@/style/Styles";
import { getPeriodDate } from "@/utils/formatDateTime";
import { MouseEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import styled, { css } from "styled-components";

interface Contents {
    id: string; // 매입매출 key(UUID
    category: "PAYROLL" | "PURCHASE" | "SALE"; // 매입매출내용( PAYROLL:급여, PURCHASE:매입, SALE:매출) )
    description: string; // 내용(설명)
    amount: number; // 금액
    status: "PENDING" | "CONFIRMED"; // 확정여부 (PENDING:대기, CONFIRMED:확정)
    created_at: string; // 생성일
}

interface ResponseList {
    page: number;
    size: number;
    sort: "ASC" | "DESC";
    total_pages: number;
    total_count: number;
    contents: Contents[];
    message: string;
}

const TransactionContainer = () => {
    const [isOverlay, setIsOverlay] = useState(false);
    const [request, setRequest] = useState<RequestList>({
        start_date: getPeriodDate(new Date(), 1).startDate,
        end_date: getPeriodDate(new Date(), 1).endDate,
        start_amount: 0,
        end_amount: 0,
        sort: "DESC",
        page: 1,
        size: 100,
        total_count: 0,
        work_type: undefined,
        work_status: undefined,
        approval_status: undefined,
        category: undefined,
    });
    const [initRequest, setInitRequest] = useState<RequestList>({
        start_date: getPeriodDate(new Date(), 1).startDate,
        end_date: getPeriodDate(new Date(), 1).endDate,
        start_amount: 0,
        end_amount: 0,
        sort: "DESC",
        page: 1,
        size: 100,
        total_count: 0,
        work_type: undefined,
        work_status: undefined,
        approval_status: undefined,
        category: undefined,
    });

    const [response, setResponse] = useState<ResponseList>({
        page: 0,
        size: 0,
        sort: "ASC",
        total_pages: 0,
        total_count: 0,
        contents: [],
        message: "",
    });

    useEffect(() => {
        setResponse({
            ...response,
            ...{
                page: 0,
                size: 0,
                sort: "ASC",
                total_pages: 0,
                total_count: 0,
                contents: [
                    {
                        id: "1",
                        category: "PURCHASE",
                        description: "식재료 충남상회",
                        amount: 110000000,
                        status: "PENDING",
                        created_at: "2023-03-24T00:15:00.000000+09:00",
                    },
                    {
                        id: "2",
                        category: "SALE",
                        description: "주차비",
                        amount: 50000,
                        status: "PENDING",
                        created_at: "2023-03-23T00:15:00.000000+09:00",
                    },
                    {
                        id: "3",
                        category: "PURCHASE",
                        description: "급여-박정영",
                        amount: 10000000,
                        status: "CONFIRMED",
                        created_at: "2023-03-23T00:15:00.000000+09:00",
                    },
                    {
                        id: "4",
                        category: "PURCHASE",
                        description: "급여-박정영",
                        amount: 10000000,
                        status: "CONFIRMED",
                        created_at: "2023-03-23T00:15:00.000000+09:00",
                    },
                    {
                        id: "5",
                        category: "PURCHASE",
                        description: "급여-박정영",
                        amount: 10000000,
                        status: "CONFIRMED",
                        created_at: "2023-03-23T00:15:00.000000+09:00",
                    },
                    {
                        id: "6",
                        category: "PURCHASE",
                        description: "식재료 충남상회",
                        amount: 110000000,
                        status: "PENDING",
                        created_at: "2023-03-22T00:15:00.000000+09:00",
                    },
                    {
                        id: "7",
                        category: "SALE",
                        description: "주차비",
                        amount: 50000,
                        status: "PENDING",
                        created_at: "2023-03-22T00:15:00.000000+09:00",
                    },
                    {
                        id: "8",
                        category: "PURCHASE",
                        description: "급여-박정영",
                        amount: 10000000,
                        status: "CONFIRMED",
                        created_at: "2023-03-21T00:15:00.000000+09:00",
                    },
                    {
                        id: "9",
                        category: "PURCHASE",
                        description: "급여-박정영",
                        amount: 10000000,
                        status: "CONFIRMED",
                        created_at: "2023-03-21T00:15:00.000000+09:00",
                    },
                    {
                        id: "10",
                        category: "PURCHASE",
                        description: "급여-박정영",
                        amount: 10000000,
                        status: "CONFIRMED",
                        created_at: "2023-03-21T00:15:00.000000+09:00",
                    },
                    {
                        id: "11",
                        category: "PURCHASE",
                        description: "식재료 충남상회",
                        amount: 110000000,
                        status: "PENDING",
                        created_at: "2023-03-24T00:15:00.000000+09:00",
                    },
                    {
                        id: "12",
                        category: "SALE",
                        description: "주차비",
                        amount: 50000,
                        status: "PENDING",
                        created_at: "2023-03-23T00:15:00.000000+09:00",
                    },
                    {
                        id: "13",
                        category: "PURCHASE",
                        description: "급여-박정영",
                        amount: 10000000,
                        status: "CONFIRMED",
                        created_at: "2023-03-23T00:15:00.000000+09:00",
                    },
                    {
                        id: "14",
                        category: "PURCHASE",
                        description: "급여-박정영",
                        amount: 10000000,
                        status: "CONFIRMED",
                        created_at: "2023-03-23T00:15:00.000000+09:00",
                    },
                    {
                        id: "15",
                        category: "PURCHASE",
                        description: "급여-박정영",
                        amount: 10000000,
                        status: "CONFIRMED",
                        created_at: "2023-03-23T00:15:00.000000+09:00",
                    },
                    {
                        id: "16",
                        category: "PURCHASE",
                        description: "식재료 충남상회",
                        amount: 110000000,
                        status: "PENDING",
                        created_at: "2023-03-22T00:15:00.000000+09:00",
                    },
                    {
                        id: "17",
                        category: "SALE",
                        description: "주차비",
                        amount: 50000,
                        status: "PENDING",
                        created_at: "2023-03-22T00:15:00.000000+09:00",
                    },
                    {
                        id: "18",
                        category: "PURCHASE",
                        description: "급여-박정영",
                        amount: 10000000,
                        status: "CONFIRMED",
                        created_at: "2023-03-21T00:15:00.000000+09:00",
                    },
                    {
                        id: "19",
                        category: "PURCHASE",
                        description: "급여-박정영",
                        amount: 10000000,
                        status: "CONFIRMED",
                        created_at: "2023-03-21T00:15:00.000000+09:00",
                    },
                    {
                        id: "20",
                        category: "PURCHASE",
                        description: "급여-박정영",
                        amount: 10000000,
                        status: "CONFIRMED",
                        created_at: "2023-03-21T00:15:00.000000+09:00",
                    },
                ],
                message: "test",
            },
        });
        return () => {};
    }, []);

    const handleSubMenu = (e: MouseEvent<HTMLButtonElement>) => {
        if ((e.target as HTMLButtonElement).classList.contains("active")) {
            setIsOverlay(false);
        } else {
            setIsOverlay(true);
        }
    };

    const handleRequest = () => {};

    const handleCall = () => {};

    if (isOverlay) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "unset";
    }

    const navigate = useNavigate();

    const handleNavi = (idx: number) => {
        if (idx === 0) {
            navigate("/transaction");
        } else if (idx === 1) {
            navigate("/transaction/purchase/add");
        } else {
            navigate("/transaction/sale/add");
        }
    };

    return (
        <div style={{ position: "relative" }}>
            <StyledTransactionTabContainer className={`fixed`}>
                <button className="active" onClick={() => handleNavi(0)}>
                    전체내역
                </button>
                <button onClick={() => handleNavi(1)}>매입등록</button>
                <button onClick={() => handleNavi(2)}>매출등록</button>
            </StyledTransactionTabContainer>
            <FilterContainer
                isTransaction
                fixedHeight={0}
                totalCount={response.contents.length}
                request={request}
                setRequest={setRequest}
                initRequest={initRequest}
                setInitRequest={setInitRequest}
                isUseConditionOfDate
                isUseConditionOfOrderBy
                isUseConditionOfAmount
            />
            <StyledPaddingBottom />
            <StyledTransactionListContainer>
                {response.contents.map((transaction, index) => (
                    <Fragment key={transaction.id}>
                        <TransactionListItemHeader
                            transaction_at={transaction.created_at}
                            index={index}
                        />
                        <Link to={`/transaction/${transaction.id}`}>
                            <TransactionListItem transaction={transaction} index={index} />
                        </Link>
                    </Fragment>
                ))}
            </StyledTransactionListContainer>
            <StyledFloatingMenu className={`menus ${isOverlay ? "active" : ""}`}>
                <div className={`menus ${isOverlay ? "active" : ""}`}>
                    <div>
                        <span>확정 요청</span>
                        <FloatingMenu
                            onClick={handleRequest}
                            $request={"src/assets/images/icons/icon_confirm_request.png"}
                        />
                    </div>
                    <div>
                        <span>세무사 전화</span>
                        <FloatingMenu
                            onClick={handleCall}
                            $call={"src/assets/images/icons/icon_call.png"}
                        />
                    </div>
                </div>
                <FloatingMenu
                    className={`${isOverlay ? "active" : ""}`}
                    onClick={handleSubMenu}
                    $open={"src/assets/images/icons/icon_floating_add.png"}
                    $close={"src/assets/images/icons/icon_floating_close.png"}
                />
            </StyledFloatingMenu>
            <SubmenuOverlay className={`${isOverlay ? "active" : ""}`}></SubmenuOverlay>
        </div>
    );
};

export default TransactionContainer;

const StyledPaddingBottom = styled.div`
    padding-bottom: 2.35rem;
`;

export const StyledTransactionTabContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 1rem 0 1rem;
    background-color: ${Styles.colors.systemWhite};
    border-bottom: 1px solid ${Styles.colors.natural10};

    &.fixed {
        position: sticky;
        top: 3rem;
        left: 0;
        width: 100%;
        display: flex;
        align-items: flex-end;
        z-index: 9999;
        background-color: ${Styles.colors.systemWhite};
        border-bottom: 0;
        height: auto;

        button {
            &.active {
                &::before {
                    height: 2px;
                }
            }
        }
    }

    button {
        position: relative;
        color: ${Styles.colors.natural40};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
        line-height: 0.9rem;
        padding: 0.5rem 0;

        &.active {
            color: ${Styles.colors.primary100};

            &::before {
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 2px;
                background-color: ${Styles.colors.primary100};
            }
        }
    }
`;

const FloatingMenu = styled.button<{
    $open?: string;
    $close?: string;
    $request?: string;
    $call?: string;
}>`
    width: 2.8rem;
    height: 2.8rem;
    padding: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Styles.colors.secondary100};
    border-radius: 50%;
    box-shadow:
        0px 20px 25px -5px rgba(51, 65, 85, 0.14),
        0px 8px 13px -5px rgba(51, 65, 85, 0.22);
    transition: 0.3s;
    ${(props) => {
        if (props.$open) {
            return css`
                background-image: url(${props.$open});
            `;
        }
        if (props.$request) {
            return css`
                background-image: url(${props.$request});
            `;
        }
        if (props.$call) {
            return css`
                background-image: url(${props.$call});
            `;
        }
    }}
    background-size: 1.2rem 1.2rem;
    background-repeat: no-repeat;
    background-position: center center;

    &.active {
        ${(props) => {
            if (props.$close) {
                return css`
                    background-color: ${Styles.colors.systemWhite};
                    background-image: url(${props.$close});
                `;
            }
        }}
    }
`;

const SubmenuOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 99999;
    height: 100vh;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;

    &.active {
        opacity: 1;
        visibility: visible;
    }
`;

const StyledFloatingMenu = styled.div`
    position: fixed;
    bottom: 4.7rem;
    right: 1rem;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1.5rem;

    &.active {
        opacity: 1;
        visibility: visible;
        z-index: 999999;
    }

    & > div {
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
        opacity: 0;
        visibility: hidden;

        &.active {
            opacity: 1;
            visibility: visible;
        }

        & > div {
            display: flex;
            gap: 0.6rem;
            align-items: center;
            justify-content: flex-end;

            span {
                font-size: ${Styles.font.size.fontsize16};
                font-weight: ${Styles.font.weight.medium};
                color: ${Styles.colors.systemWhite};
            }
        }
    }
`;

const StyledTransactionListContainer = styled.div`
    padding-bottom: 2.8rem;
`;
