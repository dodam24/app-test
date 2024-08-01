//약관동의 목록 가져오기
import { instance } from "@/apis/instance";

export const termsList = async (category: string) => {
    try {
        const response = await instance.get("/api/v1/terms/titles", {
            params: {
                category: category,
            },
        });
        return response.data.body;
    } catch (error) {
        console.error("약관 목록 오류:", error);
        throw new Error("약관 목록 오류");
    }
};

//약관상세 내용 가져오기

export const termsDetail = async (id: string) => {
    try {
        const response = await instance.get(`/api/v1/terms/${id}`);
        return response.data.body;
    } catch (error) {
        console.error("약관 상세 내용 오류:", error);
        throw new Error("약관 상세 내용 오류");
    }
};
