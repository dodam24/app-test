import instance from "@/apis/instance";

export const requestPhoneVerification = async (phoneNumber: string) => {
    try {
        const response = await instance.post("/api/v1/members/verification/request/cellphone", {
            cellphone_number: phoneNumber,
        });
        const json = response.data;
        if (json && json.body === "SUCCESS") {
            return true;
        }
    } catch (error) {
        console.error("인증 요청 실패", error);
        throw new Error("인증 요청에 실패했습니다. 다시 시도해주세요.");
    }
};

export const requestPhoneVerificationCheck = async (
    phoneNumber: string,
    verificationCode: string,
) => {
    try {
        const response = await instance.post("/api/v1/members/verification/check/cellphone", {
            cellphone_number: phoneNumber,
            verification_code: verificationCode,
        });
        console.log("인증 성공");
        const json = response.data;
        console.log(json);
        return true;
    } catch (error) {
        console.error("인증 실패", error);
        throw new Error("인증에 실패했습니다. 다시 시도해주세요.");
    }
};
