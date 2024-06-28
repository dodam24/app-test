import { useEffect, useState } from "react";

interface BankInfo {
    bank_name: string;
    bank_account_number: string;
}

interface CardInfo {
    card_inst: number;
    card_number: string;
    card_approval_number: string;
    card_issuer_name: string;
    card_purchase_name: string;
}

interface PaymentDetail {
    id: string;
    transaction_at: string;
    transaction_type: number;
    amount: number;
    payment_provider_type: string;
    corp: string;
    payment_type: string;
    card_info: CardInfo;
    bank_info: BankInfo;
}

const PaymentDetailContainer = () => {
    const [detail, setDetail] = useState<PaymentDetail>({
        id: "",
        transaction_at: "",
        transaction_type: 0,
        amount: 0,
        payment_provider_type: "",
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
                id: "5",
                transaction_at: "2023-02-24T14:33:23+09:00",
                transaction_type: 0,
                amount: 44000,
                payment_provider_type: "PG",
                corp: "string",
                payment_type: "string",
                card_info: {
                    card_inst: 0,
                    card_number: "string",
                    card_approval_number: "string",
                    card_issuer_name: "string",
                    card_purchase_name: "string",
                },
                bank_info: {
                    bank_name: "string",
                    bank_account_number: "string",
                },
            },
        });

        return () => {};
    }, [detail]);

    return <div>PaymentDetailContainer</div>;
};

export default PaymentDetailContainer;
