import { IManagePaymentList } from "@/interface/manage/payment/managePaymentRegister";

export const paymentListData: IManagePaymentList[] = [
    {
        id: 1,
        name: "홍길동",
        paymentType: "월급",
        expectedPayment: "2,000,000원",
        actualPayment: "2,000,000원",
        startDate: "20230201",
        endDate: "20230228",
    },
    {
        id: 2,
        name: "이순신",
        paymentType: "시급",
        expectedPayment: "926,000원",
        actualPayment: "926,000원",
        startDate: "2023.02.01",
        endDate: "2023.02.28",
    },
];
