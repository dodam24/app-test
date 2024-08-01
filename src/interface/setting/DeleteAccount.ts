export interface DeleteAccount {
    setTotal: React.Dispatch<React.SetStateAction<DeleteAccountProps>>;
}

export interface DeleteAccountProps {
    agreed_to_payment_cancellation: boolean;
    agreed_to_purchase_sales_cancellation: boolean;
    agreed_to_employee_cancellation: boolean;
    reason: number | null;
    reason_detail: string;
    accepted_all: boolean;
}

export interface DeleteAccountServiceProps {
    id: number;
    title: string;
    service_id: string;
    checked: boolean;
}

export interface DeleteAccountReasonProps {
    id: number | null;
    reason: string | null;
    reason_detail?: string;
}
