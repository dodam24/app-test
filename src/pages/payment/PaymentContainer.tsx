import { Styles } from "@/style/Styles";
import styled from "styled-components";
import PaymentListItem from "./PaymentListItem";
import PaymentListItemHeader from "./PaymentListItemHeader";
import { Fragment } from "react/jsx-runtime";
import useScroll from "@/hooks/useScroll";
import FilterContainer from "@/pages/payment/FilterContainer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPeriodDate, parseDate2 } from "@/utils/formatDateTime";
import SpeechBubble from "@/components/SpeechBubble";
import useSpeechBubble from "@/hooks/useSpeechBubble";

interface PaymentContents {
    id: string;
    transaction_at: string;
    payment_provider_type: "PG" | "VAN" | "APP" | "ETC";
    amount: number;
}

interface ResponsePaymentList {
    page: number;
    size: number;
    sort: "ASC" | "DESC";
    total_pages: number;
    total_count: number;
    contents: PaymentContents[];
    message: string;
    total_amount: number;
}

export interface RequestList {
    sort: "ASC" | "DESC";
    page: number;
    size: number;
    start_date?: string;
    end_date?: string;
    total_count?: number;
    payment_provider_type?: "PG" | "VAN" | "APP" | "ETC";
    start_amount?: number;
    end_amount?: number;
    work_type?: number;
    work_status?: number;
    approval_status?: number;
    category?: "PAYROLL" | "PURCHASE" | "SALE";
}

const PaymentContainer = () => {
    const { scrollY } = useScroll();
    const { isClose, closeSpeechBubble } = useSpeechBubble();

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

    const [response, setResponse] = useState<ResponsePaymentList>({
        page: 0,
        size: 0,
        sort: "ASC",
        total_pages: 0,
        total_count: 0,
        contents: [],
        message: "",
        total_amount: 0,
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
                        transaction_at: "2024-04-30T16:08:09.306371+09:00",
                        payment_provider_type: "VAN",
                        amount: 44000,
                    },
                    {
                        id: "2",
                        transaction_at: "2024-04-30T16:08:09.306371+09:00",
                        payment_provider_type: "PG",
                        amount: -44000,
                    },
                    {
                        id: "3",
                        transaction_at: "2024-04-30T16:08:09.306371+09:00",
                        payment_provider_type: "VAN",
                        amount: 44000,
                    },
                    {
                        id: "4",
                        transaction_at: "2024-04-30T16:08:09.306371+09:00",
                        payment_provider_type: "PG",
                        amount: -44000,
                    },
                    {
                        id: "5",
                        transaction_at: "2024-04-30T16:08:09.306371+09:00",
                        payment_provider_type: "PG",
                        amount: 44000,
                    },
                    {
                        id: "6",
                        transaction_at: "2024-04-22T15:08:09.306371+09:00",
                        payment_provider_type: "PG",
                        amount: -44000,
                    },
                    {
                        id: "7",
                        transaction_at: "2024-04-22T15:08:09.306371+09:00",
                        payment_provider_type: "VAN",
                        amount: 44000,
                    },
                    {
                        id: "8",
                        transaction_at: "2024-04-22T15:08:09.306371+09:00",
                        payment_provider_type: "VAN",
                        amount: -44000,
                    },
                    {
                        id: "9",
                        transaction_at: "2024-04-22T15:08:09.306371+09:00",
                        payment_provider_type: "VAN",
                        amount: 44000,
                    },
                    {
                        id: "10",
                        transaction_at: "2024-04-20T12:08:09.306371+09:00",
                        payment_provider_type: "VAN",
                        amount: 44000,
                    },
                    {
                        id: "11",
                        transaction_at: "2024-04-20T12:08:09.306371+09:00",
                        payment_provider_type: "PG",
                        amount: -44000,
                    },
                    {
                        id: "12",
                        transaction_at: "2024-04-20T12:08:09.306371+09:00",
                        payment_provider_type: "VAN",
                        amount: 44000,
                    },
                    {
                        id: "13",
                        transaction_at: "2024-04-20T12:08:09.306371+09:00",
                        payment_provider_type: "VAN",
                        amount: -44000,
                    },
                    {
                        id: "14",
                        transaction_at: "2024-04-20T12:08:09.306371+09:00",
                        payment_provider_type: "VAN",
                        amount: 44000,
                    },
                    {
                        id: "15",
                        transaction_at: "2024-04-20T12:08:09.306371+09:00",
                        payment_provider_type: "VAN",
                        amount: 44000,
                    },
                ],
                message: "test",
                total_amount: 113200,
            },
        });
        return () => {};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div style={{ position: "relative" }}>
            <StyledTotalPaymentWrap className={`${scrollY >= 130 ? "fixed" : ""}`}>
                <div>
                    <p>결제 총 금액</p>
                    <h2 className={response.total_amount >= 0 ? "" : "minus"}>
                        {response.total_amount.toLocaleString()}원
                    </h2>
                    <p className="date">
                        {parseDate2(request?.start_date)} ~ {parseDate2(request?.end_date)}
                    </p>
                </div>
            </StyledTotalPaymentWrap>
            <FilterContainer
                totalCount={response.contents.length}
                request={request}
                setRequest={setRequest}
                initRequest={initRequest}
                setInitRequest={setInitRequest}
                isUseConditionOfDate
                isUseConditionOfOrderBy
                isUseConditionOfAmount
            />
            <StyledPaymentListItemContainer>
                {response.contents.map((payment, index) => (
                    <Fragment key={payment.id}>
                        <PaymentListItemHeader
                            transaction_at={payment.transaction_at}
                            index={index}
                        />
                        <Link to={`/payment/${payment.id}`}>
                            <PaymentListItem payment={payment} index={index} />
                        </Link>
                    </Fragment>
                ))}
            </StyledPaymentListItemContainer>
            <SpeechBubble
                contents={"항목을 선택하면 상세내역을 확인할 수 있어요!"}
                isClose={isClose}
                closeSpeechBubble={closeSpeechBubble}
                left={61.5}
                top={11.5}
            />
        </div>
    );
};

export default PaymentContainer;

const StyledTotalPaymentWrap = styled.section`
    padding: 1rem 1rem 0 1rem;
    &.fixed {
        padding: 1rem 1rem 4.9rem 1rem;
    }

    div {
        display: flex;
        flex-direction: column;
        padding: 1.2rem 0;
        p {
            color: ${Styles.colors.natural70};
            font-size: ${Styles.font.size.fontsize14};
            font-weight: ${Styles.font.weight.medium};
            margin-bottom: 0.25rem;
        }
        h2 {
            color: ${Styles.colors.natural90};
            font-size: ${Styles.font.size.fontsize24};
            font-weight: ${Styles.font.weight.semibold};
            margin-bottom: 0.6rem;
            &.minus {
                color: ${Styles.colors.systemError};
            }
        }
        p.date {
            color: ${Styles.colors.natural30};
            font-size: ${Styles.font.size.fontsize14};
            font-weight: ${Styles.font.weight.regular};
        }
    }
`;

const StyledPaymentListItemContainer = styled.div`
    padding-bottom: 2.8rem;
`;
