import { useState, ChangeEvent } from "react";
import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import OptionInput from "@/components/input/OptionInput";
import FixedButton from "@/components/button/FixedButton";
import Button from "@/components/button/Button";
import PhoneAuthInput from "@/components/input/PhoneAuthInput";
import SelectInput from "@/components/input/SelectInput";
import ConsentCheckBox from "@/components/checkbox/ConsentCheckBox";

import { StyledEmailWrapper } from "@/style/InputStyle";
import { IShopPayment } from "@/interface/shop/shop";

const ShopPayment = () => {
    const [value, setValue] = useState<IShopPayment>({
        name: "",
        adress: "",
        line: "",
        message: "",
        cellphone_number: "",
        verificationCode: "",
        email: "",
        email_id: "",
        selectDomain: "",
        required_terms_accepted: false,
        selected_terms_accepted_list: [] as string[],
    });

    const handle = (e: ChangeEvent<HTMLInputElement>) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };

    const handlePhoneChange = (phone: string) => {
        setValue({
            ...value,
            cellphone_number: phone,
        });
    };

    const handleVerificationCodeChange = (code: string) => {
        setValue({
            ...value,
            verificationCode: code,
        });
    };

    const handleSelectDomain = (domain: string) => {
        const updatedEmail = `${value.email_id}@${domain}`;
        setValue({
            ...value,
            email: updatedEmail,
            email_id: value.email_id,
            selectDomain: domain,
        });
    };

    const handleConsentChange = (
        requiredTermsAccepted: boolean,
        selectedTermsAcceptedList: string[],
    ) => {
        setValue({
            ...value,
            required_terms_accepted: requiredTermsAccepted,
            selected_terms_accepted_list: selectedTermsAcceptedList,
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
                    <div className="address_wrap">
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
                        <OptionInput
                            type="text"
                            name="line"
                            value={value.line}
                            onChange={handle}
                            placeholder="상세주소를 입력해주세요."
                        />
                    </div>
                    <PhoneAuthInput
                        onPhoneChange={handlePhoneChange}
                        onVerificationCodeChange={handleVerificationCodeChange}
                    />
                    <StyledEmailWrapper>
                        <OptionInput
                            type="text"
                            name="email_id"
                            id="email_id"
                            value={value.email_id}
                            onChange={handle}
                            placeholder="이메일 아이디"
                            label="이메일"
                        />
                        <span>@</span>
                        <SelectInput
                            options={[
                                "naver.com",
                                "gmail.com",
                                "nate.com",
                                "daum.net",
                                "icloud.com",
                                "직접입력",
                            ]}
                            onSelect={handleSelectDomain}
                            placeholder="선택하세요"
                        />
                    </StyledEmailWrapper>
                    <OptionInput
                        type="text"
                        name="message"
                        value={value.message}
                        onChange={handle}
                        placeholder="요청 메시지를 입력해 주세요."
                        label="배송 요청 메시지"
                    />
                    <ConsentCheckBox onChange={handleConsentChange} />
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
    .address_wrap {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
`;
export default ShopPayment;
