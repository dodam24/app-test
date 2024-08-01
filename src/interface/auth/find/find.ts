export interface IFindIdList {
    id: string;
    registrationDate: string;
}

export interface IFindID {
    name: string;
    cellphone_number: string;
    verificationCode: string;
}

export interface IFindPwList {
    password: string;
    passwordVerify: string;
}
//분리 고민중

export interface IFindPW extends IFindID {
    username: string;
}
