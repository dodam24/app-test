import useScroll from "@/hooks/useScroll";
import { RequestList } from "@/pages/payment/PaymentContainer";
import { Styles } from "@/style/Styles";
import { getPeriodDate } from "@/utils/formatDateTime";
import { useEffect, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import styled from "styled-components";

interface Contents {
    id: string; // 결제내역 KEY(UUID)
    payment_provider_type: "PG" | "VAN" | "APP" | "ETC"; // 결제 제공 유형( APP:주문앱, VAN:VAN, PG:PG , ETC:기타 )
    transaction_amount: number; // 거래금액(승인금액)
    fee_amount: number; // 수수료
    settlement_amount: number; // 정산금액
    payment_transaction_at?: string; // 거래일시
    settlement_completed_at: string; // 정산 완료일시
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

const CalculationContainer = () => {
    const { scrollY } = useScroll();
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

    // id: string; // 결제내역 KEY(UUID)
    // payment_provider_type: "PG" | "VAN" | "APP" | "ETC"; // 결제 제공 유형( APP:주문앱, VAN:VAN, PG:PG , ETC:기타 )
    // transaction_amount: number; // 거래금액(승인금액)
    // fee_amount: number; // 수수료
    // settlement_amount: number; // 정산금액
    // payment_transaction_at: string; // 거래일시
    // settlement_completed_at: string; // 정산 완료일시

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
                        settlement_completed_at: "2023-03-24T00:00:00.000000+09:00",
                        payment_provider_type: "VAN",
                        settlement_amount: 44000,
                        fee_amount: 100,
                        transaction_amount: 10000,
                    },
                    {
                        id: "2",
                        settlement_completed_at: "2024-04-30T00:00:00.000000+09:00",
                        payment_provider_type: "PG",
                        settlement_amount: 44000,
                        fee_amount: 100,
                        transaction_amount: 10000,
                    },
                    {
                        id: "3",
                        settlement_completed_at: "2024-04-30T00:00:00.000000+09:00",
                        payment_provider_type: "VAN",
                        settlement_amount: 44000,
                        fee_amount: 100,
                        transaction_amount: 10000,
                    },
                    {
                        id: "4",
                        settlement_completed_at: "2024-04-30T00:00:00.000000+09:00",
                        payment_provider_type: "PG",
                        settlement_amount: 44000,
                        fee_amount: 100,
                        transaction_amount: 10000,
                    },
                    {
                        id: "5",
                        settlement_completed_at: "2024-04-30T00:00:00.000000+09:00",
                        payment_provider_type: "PG",
                        settlement_amount: 44000,
                        fee_amount: 100,
                        transaction_amount: 10000,
                    },
                    {
                        id: "6",
                        settlement_completed_at: "2024-04-22T15:08:09.306371+09:00",
                        payment_provider_type: "PG",
                        settlement_amount: 44000,
                        fee_amount: 100,
                        transaction_amount: 10000,
                    },
                    {
                        id: "7",
                        settlement_completed_at: "2024-04-22T15:08:09.306371+09:00",
                        payment_provider_type: "VAN",
                        settlement_amount: 44000,
                        fee_amount: 100,
                        transaction_amount: 10000,
                    },
                    {
                        id: "8",
                        settlement_completed_at: "2024-04-22T15:08:09.306371+09:00",
                        payment_provider_type: "VAN",
                        settlement_amount: 44000,
                        fee_amount: 100,
                        transaction_amount: 10000,
                    },
                    {
                        id: "9",
                        settlement_completed_at: "2024-04-22T15:08:09.306371+09:00",
                        payment_provider_type: "VAN",
                        settlement_amount: 44000,
                        fee_amount: 100,
                        transaction_amount: 10000,
                    },
                    {
                        id: "10",
                        settlement_completed_at: "2024-04-20T12:08:09.306371+09:00",
                        payment_provider_type: "VAN",
                        settlement_amount: 44000,
                        fee_amount: 100,
                        transaction_amount: 10000,
                    },
                    {
                        id: "11",
                        settlement_completed_at: "2024-04-20T12:08:09.306371+09:00",
                        payment_provider_type: "PG",
                        settlement_amount: 44000,
                        fee_amount: 100,
                        transaction_amount: 10000,
                    },
                    {
                        id: "12",
                        settlement_completed_at: "2024-04-20T12:08:09.306371+09:00",
                        payment_provider_type: "VAN",
                        settlement_amount: 44000,
                        fee_amount: 100,
                        transaction_amount: 10000,
                    },
                    {
                        id: "13",
                        settlement_completed_at: "2024-04-20T12:08:09.306371+09:00",
                        payment_provider_type: "VAN",
                        settlement_amount: 44000,
                        fee_amount: 100,
                        transaction_amount: 10000,
                    },
                    {
                        id: "14",
                        settlement_completed_at: "2024-04-20T12:08:09.306371+09:00",
                        payment_provider_type: "VAN",
                        settlement_amount: 44000,
                        fee_amount: 100,
                        transaction_amount: 10000,
                    },
                    {
                        id: "15",
                        settlement_completed_at: "2024-04-20T12:08:09.306371+09:00",
                        payment_provider_type: "VAN",
                        settlement_amount: 44000,
                        fee_amount: 100,
                        transaction_amount: 10000,
                    },
                ],
                message: "test",
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
        </div>
    );
};

export default CalculationContainer;

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
