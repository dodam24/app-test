export interface IinsuranceCheck {
    id: number;
    title: string;
    details: string[];
}

export type IinsuranceInfo = Omit<IinsuranceCheck, "details"> & { details: string };

export type IinsuranceItem = Omit<IinsuranceCheck, "details"> & {
    mainIcon: string;
    head: string;
    description: string;
};

export type IinsuranceService = Omit<IinsuranceCheck, "details"> & {
    company: string;
    expiryDate: string;
};
