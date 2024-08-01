export interface IShopList {
    id: number;
    img: string;
    title: string;
    cost: number;
    sale: string;
    price: number;
}

export type IShopTag = Omit<IShopList, "cost" | "sale" | "price">;

export interface IShopTabs {
    id: string;
    title: string;
}

export interface IShopPayment {
    name: string;
    adress: string;
    line: string;
    message: string;
    cellphone_number: string;
    verificationCode: string;
    email: string;
    email_id: string;
    selectDomain: string;
    required_terms_accepted: boolean;
    selected_terms_accepted_list: string[];
}
