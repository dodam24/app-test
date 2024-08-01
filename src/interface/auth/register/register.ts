export interface IValidationValues {
    passwordMatch: boolean;
    passwordValid: boolean;
    usernameValid: boolean;
    idChecked: boolean;
    nameValid: boolean;
    // showDeleteOption: boolean;
}

export interface IRegisterValues {
    username: string;
    password: string;
    passwordVerify: string;
    name: string;
    cellphone_number: string;
    verificationCode: string;
    email: string;
    email_id: string;
    selectDomain: string;
    company_id: string;
    user_type: string;
    account_holder?: string;
    account_number?: string;
    account_bank_code?: string;
    required_terms_accepted: boolean;
    selected_terms_accepted_list: string[];
}

export interface IRegisterPhone {
    company_id: string;
    name: string;
    cellphone_number: string;
    verificationCode: string;
}
