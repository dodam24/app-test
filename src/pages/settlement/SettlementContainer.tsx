import useScroll from "@/hooks/useScroll";
import FilterContainer from "@/pages/payment/FilterContainer";
import { RequestList, StyledTotalPaymentWrap } from "@/pages/payment/PaymentContainer";
import SettlementListItem from "@/pages/settlement/SettlementListItem";
import SettlementListItemHeader from "@/pages/settlement/SettlementListItemHeader";
import { getPeriodDate, parseDate2 } from "@/utils/formatDateTime";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

const SettlementContainer = () => {
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
                        fee_amount: 100,
                        settlement_amount: 44000,
                        transaction_amount: 10000,
                    },
                    {
                        id: "2",
                        settlement_completed_at: "2024-04-30T00:00:00.000000+09:00",
                        payment_provider_type: "PG",
                        fee_amount: 100,
                        settlement_amount: 44000,
                        transaction_amount: 10000,
                    },
                    {
                        id: "3",
                        settlement_completed_at: "2024-04-30T00:00:00.000000+09:00",
                        payment_provider_type: "VAN",
                        fee_amount: 100,
                        settlement_amount: 44000,
                        transaction_amount: 10000,
                    },
                    {
                        id: "4",
                        settlement_completed_at: "2024-04-30T00:00:00.000000+09:00",
                        payment_provider_type: "PG",
                        fee_amount: 100,
                        settlement_amount: 44000,
                        transaction_amount: 10000,
                    },
                    {
                        id: "5",
                        settlement_completed_at: "2024-04-30T00:00:00.000000+09:00",
                        payment_provider_type: "PG",
                        fee_amount: 100,
                        settlement_amount: 44000,
                        transaction_amount: 10000,
                    },
                    {
                        id: "6",
                        settlement_completed_at: "2024-04-22T15:08:09.306371+09:00",
                        payment_provider_type: "PG",
                        fee_amount: 100,
                        settlement_amount: 44000,
                        transaction_amount: 10000,
                    },
                    {
                        id: "7",
                        settlement_completed_at: "2024-04-22T15:08:09.306371+09:00",
                        payment_provider_type: "VAN",
                        fee_amount: 100,
                        settlement_amount: 44000,
                        transaction_amount: 10000,
                    },
                    {
                        id: "8",
                        settlement_completed_at: "2024-04-22T15:08:09.306371+09:00",
                        payment_provider_type: "VAN",
                        fee_amount: 100,
                        settlement_amount: 44000,
                        transaction_amount: 10000,
                    },
                    {
                        id: "9",
                        settlement_completed_at: "2024-04-22T15:08:09.306371+09:00",
                        payment_provider_type: "VAN",
                        fee_amount: 100,
                        settlement_amount: 44000,
                        transaction_amount: 10000,
                    },
                    {
                        id: "10",
                        settlement_completed_at: "2024-04-20T12:08:09.306371+09:00",
                        payment_provider_type: "VAN",
                        fee_amount: 100,
                        settlement_amount: 44000,
                        transaction_amount: 10000,
                    },
                    {
                        id: "11",
                        settlement_completed_at: "2024-04-20T12:08:09.306371+09:00",
                        payment_provider_type: "PG",
                        fee_amount: 100,
                        settlement_amount: 44000,
                        transaction_amount: 10000,
                    },
                    {
                        id: "12",
                        settlement_completed_at: "2024-04-20T12:08:09.306371+09:00",
                        payment_provider_type: "VAN",
                        fee_amount: 100,
                        settlement_amount: 44000,
                        transaction_amount: 10000,
                    },
                    {
                        id: "13",
                        settlement_completed_at: "2024-04-20T12:08:09.306371+09:00",
                        payment_provider_type: "VAN",
                        fee_amount: 100,
                        settlement_amount: 44000,
                        transaction_amount: 10000,
                    },
                    {
                        id: "14",
                        settlement_completed_at: "2024-04-20T12:08:09.306371+09:00",
                        payment_provider_type: "VAN",
                        fee_amount: 100,
                        settlement_amount: 44000,
                        transaction_amount: 10000,
                    },
                    {
                        id: "15",
                        settlement_completed_at: "2024-04-20T12:08:09.306371+09:00",
                        payment_provider_type: "VAN",
                        fee_amount: 100,
                        settlement_amount: 44000,
                        transaction_amount: 10000,
                    },
                ],
                message: "test",
            },
        });
        return () => {};
    }, []);

    return (
        <div style={{ position: "relative" }}>
            <StyledTotalSettlementWrap className={`${scrollY >= 130 ? "fixed" : ""}`}>
                <div>
                    <p>결제 총 금액</p>
                    <h2
                        className={
                            response.contents.reduce(
                                (prev, current) => prev + current.settlement_amount,
                                0,
                            ) >= 0
                                ? ""
                                : "minus"
                        }
                    >
                        {response.contents
                            .reduce((prev, current) => prev + current.settlement_amount, 0)
                            .toLocaleString()}
                        원
                    </h2>
                    <p className="date">
                        {parseDate2(request?.start_date)} ~ {parseDate2(request?.end_date)}
                    </p>
                </div>
            </StyledTotalSettlementWrap>
            <FilterContainer
                fixedHeight={130}
                totalCount={response.contents.length}
                request={request}
                setRequest={setRequest}
                initRequest={initRequest}
                setInitRequest={setInitRequest}
                isUseConditionOfDate
                isUseConditionOfOrderBy
                isUseConditionOfAmount
            />
            <StyledSettlementListItemContainer>
                {response.contents.map((settlement, index) => (
                    <Fragment key={settlement.id}>
                        <SettlementListItemHeader
                            transaction_at={settlement.settlement_completed_at}
                            index={index}
                        />
                        <Link to={`/settlement/${settlement.id}`}>
                            <SettlementListItem settlement={settlement} index={index} />
                        </Link>
                    </Fragment>
                ))}
            </StyledSettlementListItemContainer>
        </div>
    );
};

export default SettlementContainer;

const StyledTotalSettlementWrap = styled(StyledTotalPaymentWrap)``;

const StyledSettlementListItemContainer = styled.div`
    padding-bottom: 2.8rem;
`;
