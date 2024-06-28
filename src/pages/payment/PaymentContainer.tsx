import { Styles } from "@/style/Styles";
import styled from "styled-components";
import PaymentListItem from "./PaymentListItem";
import PaymentListItemHeader from "./PaymentListItemHeader";
import { Fragment } from "react/jsx-runtime";
import useScroll from "@/hooks/useScroll";
import FilterContainer from "@/pages/payment/FilterContainer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface paymentContents {
    id: string;
    transaction_at: string;
    payment_provider_type: "PG" | "VAN" | "APP" | "ETC";
    amount: number;
}

interface paymentList {
    page: number;
    size: number;
    sort: "ASC" | "DESC";
    total_pages: number;
    total_count: number;
    contents: paymentContents[];
    message: string;
    total_amount: number;
}

const PaymentContainer = () => {
    const { scrollY } = useScroll();

    // const sortedPaymentList = paymentList.map((payment) => {
    //     const getDate = new Date(payment.transaction_at).toLocaleDateString();
    //     console.log(getDate);
    // });

    const [data, setData] = useState<paymentList>({
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
        setData({
            ...data,
            ...{
                page: 0,
                size: 0,
                sort: "ASC",
                total_pages: 0,
                total_count: 0,
                contents: [
                    {
                        id: "1",
                        transaction_at: "2023-03-23T15:00:20+09:00",
                        payment_provider_type: "VAN",
                        amount: 44000,
                    },
                    {
                        id: "2",
                        transaction_at: "2023-03-23T15:00:20+09:00",
                        payment_provider_type: "PG",
                        amount: -44000,
                    },
                    {
                        id: "3",
                        transaction_at: "2023-03-23T15:00:20+09:00",
                        payment_provider_type: "VAN",
                        amount: 44000,
                    },
                    {
                        id: "4",
                        transaction_at: "2023-03-23T15:00:20+09:00",
                        payment_provider_type: "PG",
                        amount: -44000,
                    },
                    {
                        id: "5",
                        transaction_at: "2023-03-23T15:00:20+09:00",
                        payment_provider_type: "PG",
                        amount: 44000,
                    },
                    {
                        id: "6",
                        transaction_at: "2023-03-22T15:00:20+09:00",
                        payment_provider_type: "PG",
                        amount: -44000,
                    },
                    {
                        id: "7",
                        transaction_at: "2023-03-22T15:00:20+09:00",
                        payment_provider_type: "VAN",
                        amount: 44000,
                    },
                    {
                        id: "8",
                        transaction_at: "2023-03-22T15:00:20+09:00",
                        payment_provider_type: "VAN",
                        amount: -44000,
                    },
                    {
                        id: "9",
                        transaction_at: "2023-03-22T15:00:20+09:00",
                        payment_provider_type: "VAN",
                        amount: 44000,
                    },
                    {
                        id: "10",
                        transaction_at: "2023-03-21T15:00:20+09:00",
                        payment_provider_type: "VAN",
                        amount: 44000,
                    },
                    {
                        id: "11",
                        transaction_at: "2023-03-21T15:00:20+09:00",
                        payment_provider_type: "PG",
                        amount: -44000,
                    },
                    {
                        id: "12",
                        transaction_at: "2023-03-21T15:00:20+09:00",
                        payment_provider_type: "VAN",
                        amount: 44000,
                    },
                    {
                        id: "13",
                        transaction_at: "2023-03-21T15:00:20+09:00",
                        payment_provider_type: "VAN",
                        amount: -44000,
                    },
                    {
                        id: "14",
                        transaction_at: "2023-03-21T15:00:20+09:00",
                        payment_provider_type: "VAN",
                        amount: 44000,
                    },
                    {
                        id: "15",
                        transaction_at: "2023-03-21T15:00:20+09:00",
                        payment_provider_type: "VAN",
                        amount: 44000,
                    },
                ],
                message: "test",
                total_amount: 113200,
            },
        });
        return () => {};
    }, [data]);

    return (
        <>
            <StyledTotalPaymentWrap className={`${scrollY >= 130 ? "fixed" : ""}`}>
                <div>
                    <p>결제 총 금액</p>
                    <h2 className={data.total_amount >= 0 ? "" : "minus"}>
                        {data.total_amount.toLocaleString()}원
                    </h2>
                    <p className="date">2023.03.04 ~ 2023.04.04</p>
                </div>
            </StyledTotalPaymentWrap>
            <FilterContainer />
            <StyledPaymentListItemContainer>
                {data.contents.map((payment, index) => (
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
        </>
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
