//아이디 칮기 API

import { instance } from "@/apis/instance";

interface findIdData {
    username: string;
    cellphone_number: string;
    verificationCode: string;
}

export const findId = async (data: findIdData) => {
    try {
        const response = await instance.post("/api/v1/members/find-id", data);
        return response.data;
    } catch (error) {
        throw new Error("아이디 찾기 실패");
    }
};

//비밀번호 찾기 API

interface findPasswordData {
    name: string;
    username: string;
    cellphone_number: string;
    verificationCode: string;
}

export const findPassword = async (data: findPasswordData) => {
    try {
        const response = await instance.post("/api/v1/members/find-password", data);
        return response.data;
    } catch (error) {
        throw new Error("비밀번호 찾기 실패");
    }
};

//비밀번호 재설정 API

interface resetPasswordData {
    new_password: string;
}

export const resetPassword = async (data: resetPasswordData) => {
    try {
        const response = await instance.post(`/api/v1/members/reset-password/{resetToken}`, data);
        return response.data;
    } catch (error) {
        throw new Error("비밀번호 재설정 실패");
    }
};
