export interface IRealtyDepositItem {
    id: number;
    title: string;
    status: string;
    name: string;
    date: string;
    amount: number;
    scheduledDate: string;
    fee_rate: string;
}
export type IRealtyData = Omit<IRealtyDepositItem, "name" | "fee_rate">;
