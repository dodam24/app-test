import instance from "@/apis/instance";

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
