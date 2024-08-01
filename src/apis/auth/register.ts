import { instance } from "@/apis/instance";

// 아이디 중복 확인 API
interface RegisterIdData {
    username: string;
}

export const registerIdverify = async (data: RegisterIdData) => {
    try {
        const response = await instance.get("/api/v1/members/exists", {
            params: data,
        });
        return response.data;
    } catch (error) {
        console.error("아이디 중복 확인 중 오류 발생:", error);
        throw error;
    }
};

// 회원가입 API

interface registerData {
    username: string;
    password: string;
    name: string;
    cellphone_number: string;
    verificationCode: string;
    email: string;
    required_terms_accepted: boolean;
    selected_terms_accepted_list?: string[];
    user_type: string;
    compay_id?: string;
    account_back_code?: string;
    account_holder?: string;
    account_number?: string;
}

export const register = async (data: registerData) => {
    try {
        const response = await instance.post("/api/v1/members/singup", data);
        return response.data;
    } catch (error) {
        throw new Error("회원가입 실패");
    }
};
