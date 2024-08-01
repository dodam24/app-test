export interface IManageStaffApproval {
    id: number;
    name: string;
    status: string;
    date: string;
    time: string;
}
export type IManageStaffInfo = Omit<IManageStaffApproval, "time" | "id"> & {
    id: string;
    phone: string;
};

export interface IManageStaffInputProps {
    username: string;
    name: string;
    cellphone_number: string;
    work_type: string;
    pay_type: string;
    pay: number;
    work_start_date: string;
    work_exit_date: string;
    insurance: string;
    member_created_at: string;
    member_updated_at: string;
    pay_day: string;
    account_bank_code: string;
    account_holder: string;
    account_number: string;
    selectDomain: string;
    passwordMatch: boolean;
    usernameValid: boolean;
    idChecked: boolean;
    nameValid: boolean;
    showDeleteOption: boolean;
}

export type IManageStaffApprovalInput = Omit<
    IManageStaffInputProps,
    "work_exit_date" | "insurance" | "member_created_at" | "member_updated_at"
>;

export type IManageStaffRegisterInput = Omit<
    IManageStaffInputProps,
    "work_exit_date" | "insurance" | "member_created_at" | "member_updated_at"
> & {
    password: string;
    passwordVerify: string;
};
