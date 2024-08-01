import { instanceWithToken } from "@/apis/instance";

export const noticeList = async () => {
    try {
        const response = await instanceWithToken.get("/api/v1/notices");
        console.log("Response data:", response.data);
        return response.data.body;
    } catch (error) {
        console.error("공지사항 목록 오류:", error);
        throw new Error("공지사항 목록 오류");
    }
};
