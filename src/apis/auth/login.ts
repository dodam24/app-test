// 로그인 API
import instance from "@/apis/instance";

interface LoginData {
    username: string;
    password: string;
}

export const login = async (data: LoginData) => {
    try {
        const response = await instance.post("/api/v1/members/login", data);
        return response.data;
    } catch (error) {
        throw new Error("로그인 실패");
    }
};
