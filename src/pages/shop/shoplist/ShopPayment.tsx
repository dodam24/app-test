import { useState, ChangeEvent } from "react";
import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";

import OptionInput from "@/components/input/OptionInput";
import FixedButton from "@/components/button/FixedButton";
import Button from "@/components/button/Button";
import ConsentComponent from "@/pages/auth/register/ConsentComponent";

const ShopPayment = () => {
    const [value, setValue] = useState({
        name: "",
        adress: "",
        message: "",
    });

    const handle = (e: ChangeEvent<HTMLInputElement>) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <AppLayout props={{ header: <AppBackHeader title="서류등록" /> }}>
            <StyledRealtyWrapper>
                <StyledInputContainer>
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
                        name="adress"
                        value={value.adress}
                        onChange={handle}
                        placeholder="주소를 입력해주세요."
                        label="배송지"
                    >
                        <Button size="sub">주소검색</Button>
                    </OptionInput>
                    <OptionInput />

                    <OptionInput
                        type="text"
                        name="message"
                        value={value.message}
                        onChange={handle}
                        placeholder="요청 메시지를 입력해 주세요."
                        label="배송 요청 메시지"
                    />
                    <ConsentComponent />
                </StyledInputContainer>
                <FixedButton>9,900원 결제하기</FixedButton>
            </StyledRealtyWrapper>
        </AppLayout>
    );
};

const StyledRealtyWrapper = styled.div`
    width: 100%;
    padding: 1rem 1rem 0;
    .phoneInput {
        height: 2.3rem;
        margin-bottom: 0; /* 마진 값 해결해야함  */
    }
    .adressInput {
        height: 2.3rem;
        margin-bottom: 1.2rem;
    }
`;

const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;
export default ShopPayment;
