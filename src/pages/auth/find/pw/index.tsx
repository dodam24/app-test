import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { Styles } from "@/style/Styles";

import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import LabelInput from "@/components/input/LabelInput";
import EnabledButton from "@/components/button/EnabledButton";
import TimerInput from "@/components/input/TimerInput";
import instance from "@/apis/instance";

const FindPW = () => {
    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
    const [verificationCode, setVerificationCode] = useState<string | null>(null);

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    const handleVerified = (status: boolean, phoneNumber?: string, verificationCode?: string) => {
        if (status && phoneNumber && verificationCode) {
            setPhoneNumber(phoneNumber);
            setVerificationCode(verificationCode);
        }
    };

    const handleFindPw = async () => {
        if (!phoneNumber || !verificationCode) {
            console.error("휴대폰 번호 또는 인증번호가 누락되었습니다.");
            return;
        }

        try {
            const response = await instance.post("/api/v1/members/find-password", {
                name: name,
                username: username,
                cellphone_number: phoneNumber,
                verification_code: verificationCode,
            });
            console.log("비밀번호 찾기 성공");
            const json = response.data;
            console.log(json);
        } catch (error) {
            console.error("비밀번호 찾기 실패");
        }
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="비밀번호 찾기" /> }}>
            <StyledFindPwWrapper>
                <h3>
                    아이디, 이름, 휴대폰 번호를 입력하여
                    <br />
                    인증을 진행해 주세요.
                </h3>
                <LabelInput
                    option="아이디"
                    placeholder="예) soso1234"
                    type="text"
                    value={username}
                    onChange={handleUserNameChange}
                />
                <LabelInput
                    option="이름"
                    placeholder="예) 김소소"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                />
                <TimerInput initialSeconds={180} onVerified={handleVerified} />
                <EnabledButton title="다음" onClick={handleFindPw} />
            </StyledFindPwWrapper>
        </AppLayout>
    );
};
const StyledFindPwWrapper = styled.div`
    width: 100%;
    padding: 0 1rem 0.6rem;
    h3 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
        line-height: 140%;
        width: 100%;
        text-align: left;
        margin: 1rem 0 1.5rem;
    }
`;
export default FindPW;
