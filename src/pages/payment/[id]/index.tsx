import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import { Styles } from "@/style/Styles";
import { formatDateTime } from "@/utils/formatDateTime";
import { useEffect, useState } from "react";
import styled from "styled-components";

// 은행정보
interface BankInfo {
    bank_name: string; // 은행명(BankCorp의 한글명칭)
    bank_account_number: string; // 은행 계좌번호
}

// 카드정보
interface CardInfo {
    card_inst: number; // 카드할부개월수
    card_number: string; // 카드번호
    card_approval_number: string; // 카드승인번호
    card_issuer_name: string; // 카드발급사(CardCorp의 한글명칭)
    card_purchase_name: string; // 카드매입사(CardCorp의 한글명칭)
}

interface PaymentDetail {
    id: string; // 결제내역 key(UUID), "주문번호" 필드로 사용
    transaction_at: string; // example: 2024-01-01T00:00:00.000000000+09:00
    transaction_type: number; // 거래구분 (0:거절, 1:결제, -1:취소, -2:부분취소, -99:오류)
    amount: number; // 거래금액(결제금액)
    payment_provider_type: "PG" | "VAN" | "APP" | "ETC"; // 결제 제공 유형(PG, VAN, APP) - Enum
    corp: string; // (PgCorp, VanCorp, AppCorp) 결제내역 제공사
    payment_type: string; // 결제수단 (PaymentType의 한글명칭)
    card_info: CardInfo; // 카드정보
    bank_info: BankInfo; // 은행정보
}

const PaymentDetail = () => {
    const [detail, setDetail] = useState<PaymentDetail>({
        id: "",
        transaction_at: "",
        transaction_type: 0,
        amount: 0,
        payment_provider_type: "ETC",
        corp: "",
        payment_type: "",
        card_info: {
            card_inst: 0,
            card_number: "",
            card_approval_number: "",
            card_issuer_name: "",
            card_purchase_name: "",
        },
        bank_info: {
            bank_name: "",
            bank_account_number: "",
        },
    });

    useEffect(() => {
        setDetail({
            ...detail,
            ...{
                id: "20230224143323123456",
                transaction_at: "2024-04-30T16:08:09.306371+09:00",
                transaction_type: 1,
                amount: 89000,
                payment_provider_type: "PG",
                corp: "갤럭시아머니트리",
                payment_type: "PG",
                card_info: {
                    card_inst: 0,
                    card_number: "****-****-****-1234",
                    card_approval_number: "12345678",
                    card_issuer_name: "국민",
                    card_purchase_name: "string",
                },
                bank_info: {
                    bank_name: "국민",
                    bank_account_number: "",
                },
            },
        });

        return () => {};
    }, []);

    const transactionType = (transaction_type: number): string => {
        if (transaction_type === 0) {
            return "거절";
        } else if (transaction_type === 1) {
            return "결제";
        } else if (transaction_type === -1) {
            return "취소";
        } else if (transaction_type === -2) {
            return "부분취소";
        } else if (transaction_type === -99) {
            return "오류";
        }
        return "";
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="결제 상세내역" /> }}>
            <PaymentDetailContainerWrap>
                <section>
                    <h4>{detail.payment_provider_type}</h4>
                    <h3>{detail.amount.toLocaleString()}원</h3>
                </section>
                <section>
                    <div>
                        <span className="title">거래일시</span>
                        <span>{formatDateTime(detail.transaction_at)}</span>
                    </div>
                    <div>
                        <span className="title">거래구분</span>
                        <span>{transactionType(detail.transaction_type)}</span>
                    </div>
                    <div>
                        <span className="title">주문번호</span>
                        <span>{detail.id}</span>
                    </div>
                    <div>
                        <span className="title">승인번호</span>
                        <span>{detail.card_info.card_approval_number}</span>
                    </div>
                    <div>
                        <span className="title">거래금액</span>
                        <span>{detail.amount.toLocaleString()}원</span>
                    </div>
                </section>
                <section>
                    <div>
                        <span className="title">결제유형</span>
                        <span>{detail.payment_provider_type}</span>
                    </div>
                    <div>
                        <span className="title">PG사</span>
                        <span>{detail.corp}</span>
                    </div>
                </section>
                <section>
                    <div>
                        <span className="title">결제수단</span>
                        <span>{detail.payment_type}</span>
                    </div>
                    <div>
                        <span className="title">매입사</span>
                        <span>{detail.card_info.card_purchase_name}</span>
                    </div>
                    <div>
                        <span className="title">카드번호</span>
                        <span>{detail.card_info.card_number}</span>
                    </div>
                </section>
            </PaymentDetailContainerWrap>
        </AppLayout>
    );
};

export default PaymentDetail;

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

        div {
            display: flex;
            justify-content: space-between;
            gap: 1rem;
            color: ${Styles.colors.natural80};
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.regular};
            padding: 0.8rem 0;

            span {
                word-break: break-all;

                &.title {
                    color: ${Styles.colors.natural60};
                    word-break: keep-all;
                }
            }
        }
    }
`;
