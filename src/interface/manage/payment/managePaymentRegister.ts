export interface IManagePaymentInfo {
    id: number;
    name: string;
    paymentType: string;
    expectedPayment: number;
    actualPayment: number;
    startDate: string;
    endDate: string;
}

export type IManagePaymentList = Omit<IManagePaymentInfo, "expectedPayment" | "actualPayment"> & {
    expectedPayment: string;
    actualPayment: string;
};
