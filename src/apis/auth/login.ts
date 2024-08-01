// 로그인 API

import { instance } from "@/apis/instance";

interface LoginData {
    username: string;
    password: string;
}

export const login = async (data: LoginData) => {
    try {
        const response = await instance.post("/api/v1/members/login", data);

        console.log("Response data:", response.data.body);

        const { access_token, refresh_token } = response.data.body;

        // 로컬스토리지에 토큰 저장
        if (access_token) {
            localStorage.setItem("access_token", access_token);
        } else {
            console.warn("access_token이 없습니다.");
        }

        if (refresh_token) {
            localStorage.setItem("refresh_token", refresh_token);
        } else {
            console.warn("refresh_token이 없습니다.");
        }

        window.alert("로그인 성공");
        // window.location.href = "/";

        return response.data;
    } catch (error) {
        console.error("로그인 오류:", error);
        throw new Error("로그인 실패");
    }
};
