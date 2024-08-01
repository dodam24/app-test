export interface ILoanData {
    id: number;
    img: string;
}

export interface ILoanInfoData extends ILoanData {
    title: string;
    interestRate: string;
    limit: string;
    details: {
        img: string;
        title: string;
        description: string;
    }[];
}
