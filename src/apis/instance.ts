import axios from "axios";

const API_BASE_URL = "https://sosomarket-api.bubaum.dev";

export const instance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const instanceWithToken = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// 요청 인터셉터 추가
instanceWithToken.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("access_token");
        if (accessToken !== null) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

instanceWithToken.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = localStorage.getItem("refresh_token");

            if (refreshToken! == null) {
                console.error("refresh_token이 없습니다.");
                // return Promise.reject(error);
            }

            try {
                const response = await instance.post("/api/v1/members/reissue", {
                    refresh_token: refreshToken,
                });

                const { new_access_token } = response.data.body;

                localStorage.setItem("access_token", new_access_token);
                originalRequest.headers.Authorization = `Bearer ${new_access_token}`;

                return instanceWithToken(originalRequest);
            } catch (error) {
                console.error("토큰 갱신 오류:", error);
                return Promise.reject(error);
            }
        }

        return Promise.reject(error);
    },
);

// const refreshToken  -> 함수로 만들기  값이 있을 경우 refreshToken (); 이런 식으로만 넣어줄 수 있게
