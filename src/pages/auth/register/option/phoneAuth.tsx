import { useState, ChangeEvent } from "react";
import styled from "styled-components";

import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import OptionInput from "@/components/input/OptionInput";
import ConsentComponent from "@/pages/auth/register/ConsentComponent";

import { Styles } from "@/style/Styles";
import FixedButton from "@/components/button/FixedButton";
import Button from "@/components/button/Button";

const PhoneAuth = () => {
    const [value, setValue] = useState({
        company_id: "",
        name: "",
        cellphone_number: "",
    });

    const handle = (e: ChangeEvent<HTMLInputElement>) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="휴대폰 인증" /> }}>
            <StyledPhoneAuthWrapper>
                <h3>최초 접속 인증을 진행해 주세요.</h3>
                <StyledInputContainer>
                    <OptionInput
                        type="text"
                        name="company_id"
                        value={value.company_id}
                        onChange={handle}
                        placeholder="예) 소소상점"
                        label="상호명"
                    />
                    <OptionInput
                        type="text"
                        name="name"
                        value={value.name}
                        onChange={handle}
                        placeholder="예) 김소소"
                        label="이름"
                    />
                    <OptionInput
                        type="text"
                        name="cellphone_number"
                        value={value.cellphone_number}
                        onChange={handle}
                        placeholder="예) 010-1234-5678"
                        label="휴대폰번호"
                    >
                        <Button size="sub">인증요청</Button>
                    </OptionInput>
                </StyledInputContainer>
                <ConsentComponent />
                <FixedButton>확인</FixedButton>
            </StyledPhoneAuthWrapper>
        </AppLayout>
    );
};
const StyledPhoneAuthWrapper = styled.div`
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

const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;
export default PhoneAuth;
