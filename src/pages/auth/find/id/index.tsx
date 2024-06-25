import { useState, ChangeEvent } from "react";
import { Styles } from "@/style/Styles";
import styled from "styled-components";

import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import EnabledButton from "@/components/button/EnabledButton";
import LabelInput from "@/components/input/LabelInput";
import TimerInput from "@/components/input/TimerInput";

import instance from "@/apis/instance";

const FindID = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [verificationCode, setVerificationCode] = useState<string>("");

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleVerified = (status: boolean, phoneNumber?: string, verificationCode?: string) => {
        if (status && phoneNumber && verificationCode) {
            setPhoneNumber(phoneNumber);
            setVerificationCode(verificationCode);
            console.log("인증 성공");
        } else {
            console.log("인증 실패");
        }
    };

    const handleFindId = async () => {
        if (!phoneNumber || !verificationCode) {
            console.error("휴대폰 번호 또는 인증번호가 누락되었습니다.");
            return;
        }

        try {
            const response = await instance.post("/api/v1/members/find-id", {
                name: name,
                cellphone_number: phoneNumber,
                verification_code: verificationCode,
            });
            console.log("아이디 찾기 성공");
            const json = response.data;
            console.log(json);
        } catch (error) {
            console.error("아이디 찾기 실패");
        }
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="아이디 찾기" /> }}>
            <StyledFindIdrWrapper>
                <h3>
                    이름과 휴대폰 번호를 입력하여
                    <br />
                    인증을 진행해 주세요.
                </h3>
                <LabelInput
                    option="이름"
                    placeholder="예) 김소소"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                />
                <TimerInput initialSeconds={180} onVerified={handleVerified} />
                <EnabledButton title="다음" onClick={handleFindId} />
            </StyledFindIdrWrapper>
        </AppLayout>
    );
};

const StyledFindIdrWrapper = styled.div`
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

export default FindID;
