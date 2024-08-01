import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import { Styles } from "@/style/Styles";
import { formatDateTime } from "@/utils/formatDateTime";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface SettlementDetail {
    id: string; // 결제내역 KEY(UUID)
    payment_type:
        | "card"
        | "phone"
        | "account"
        | "virtualaccount"
        | "kakaopay"
        | "kakaopay_card"
        | "kakaopay_money"
        | "naverpay"
        | "naverpay_card"
        | "naverpay_point"
        | "samsungpay"
        | "applepay"
        | "payco"
        | "toss"
        | "tmoney"
        | "phonebill"
        | "booklife"
        | "cultureland"
        | "gamelife"
        | "happymoney"
        | "cashgate"
        | "eggmoney"
        | "teencash"
        | "auth"
        | "etc"; // 결제수단
    payment_provider_type: "PG" | "VAN" | "APP" | "ETC"; // 결제 제공 유형(PG, VAN, APP) - Enum;
    transaction_amount: number; // 거래금액(승인금액)
    cancellation_count: number; // 취소건수
    cancellation_amount: number; // 취소금액
    fee_amount: number; // 수수료
    settlement_amount: number; // 정산금액
    payment_transaction_at: string; // 거래일시
    settlement_completed_at: string; // 정산 완료일시
}

const SettlementDetail = () => {
    const [detail, setDetail] = useState<SettlementDetail>({
        id: "",
        payment_type: "card",
        payment_provider_type: "PG",
        transaction_amount: 0,
        cancellation_count: 0,
        cancellation_amount: 0,
        fee_amount: 0,
        settlement_amount: 0,
        payment_transaction_at: "",
        settlement_completed_at: "",
    });

    useEffect(() => {
        setDetail({
            ...detail,
            ...{
                id: "20230224143323123456",
                payment_type: "card",
                payment_provider_type: "PG",
                transaction_amount: 10000,
                cancellation_count: 0,
                cancellation_amount: 0,
                fee_amount: 160,
                settlement_amount: 9840,
                payment_transaction_at: "",
                settlement_completed_at:
                    "2023-02-24T00:00:00.000000+09:00~2023-02-21T23:59:59.000000+09:00",
            },
        });

        return () => {};
    }, []);

    const transactionType = (
        payment_type:
            | "card"
            | "phone"
            | "account"
            | "virtualaccount"
            | "kakaopay"
            | "kakaopay_card"
            | "kakaopay_money"
            | "naverpay"
            | "naverpay_card"
            | "naverpay_point"
            | "samsungpay"
            | "applepay"
            | "payco"
            | "toss"
            | "tmoney"
            | "phonebill"
            | "booklife"
            | "cultureland"
            | "gamelife"
            | "happymoney"
            | "cashgate"
            | "eggmoney"
            | "teencash"
            | "auth"
            | "etc",
    ): string => {
        if (payment_type === "card") {
            return "카드";
        }
        return "";
    };

    const totalAmount = (cancellation_amount: number, transaction_amount: number): number => {
        return cancellation_amount + transaction_amount;
    };

    const settlementPeriod = (
        settlement_completed_at: string,
    ): { startSettlementAt: string; endSettlementAt: string } => {
        const [startSettlementAt, endSettlementAt] = settlement_completed_at.split("~");
        return {
            startSettlementAt: formatDateTime(startSettlementAt),
            endSettlementAt: formatDateTime(endSettlementAt),
        };
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="정산 상세내역" /> }}>
            <PaymentDetailContainerWrap>
                <section>
                    <h4>{detail.payment_provider_type}</h4>
                    <h3>{detail.settlement_amount.toLocaleString()}원</h3>
                </section>
                <section>
                    <div className="row">
                        <span className="title">정산기간</span>
                        <div className="period">
                            <span>
                                {settlementPeriod(detail.settlement_completed_at).startSettlementAt}
                            </span>
                            <span>
                                ~ {settlementPeriod(detail.settlement_completed_at).endSettlementAt}
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <span className="title">결제수단</span>
                        <span>{transactionType(detail.payment_type)}</span>
                    </div>
                    <div className="row">
                        <span className="title">승인건수</span>
                        <span>1</span>
                    </div>
                    <div className="row">
                        <span className="title">승인금액</span>
                        <span>{detail.transaction_amount.toLocaleString()}원</span>
                    </div>
                </section>
                <section>
                    <div className="row">
                        <span className="title">취소건수</span>
                        <span>0</span>
                    </div>
                    <div className="row">
                        <span className="title">취소금액</span>
                        <span>{detail.cancellation_amount}</span>
                    </div>
                    <div className="row">
                        <span className="title">합계</span>
                        <span>
                            {totalAmount(
                                detail.cancellation_amount,
                                detail.transaction_amount,
                            ).toLocaleString()}
                            원
                        </span>
                    </div>
                </section>
                <section>
                    <div className="row">
                        <span className="title">수수료</span>
                        <span>{detail.fee_amount.toLocaleString()}원</span>
                    </div>
                    <div className="row">
                        <span className="title">정산합계</span>
                        <span>{detail.settlement_amount.toLocaleString()}원</span>
                    </div>
                </section>
            </PaymentDetailContainerWrap>
        </AppLayout>
    );
};

export default SettlementDetail;

const PaymentDetailContainerWrap = styled.div`
    padding: 0 1rem;

    section {
        padding: 1rem 0;
        border-bottom: 1px solid ${Styles.colors.natural10};

        h4 {
            color: ${Styles.colors.natural90};
            font-size: ${Styles.font.size.fontsize18};
            font-weight: ${Styles.font.weight.medium};
            padding: 2rem 0 0.4rem 0;
        }

        h3 {
            color: ${Styles.colors.primary100};
            font-size: ${Styles.font.size.fontsize24};
            font-weight: ${Styles.font.weight.semibold};
            padding-bottom: 0.6rem;
        }

        .row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            color: ${Styles.colors.natural80};
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.regular};
            padding: 0.8rem 0;

            > span {
                word-break: break-all;

                &.title {
                    color: ${Styles.colors.natural60};
                    word-break: keep-all;
                }
            }

            .period {
                display: flex;
                flex-direction: column;
                align-items: flex-end;

                span {
                    word-break: break-all;
                }
            }
        }
    }

    section:last-child {
        border-bottom: 0;
    }
`;
