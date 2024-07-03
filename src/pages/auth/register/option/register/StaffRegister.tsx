import { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";

import { validatePassword, validateId } from "@/utils/inputVerify";

import FixedButton from "@/components/button/FixedButton";
import OptionInput from "@/components/input/OptionInput";
import Button from "@/components/button/Button";

import { registerIdverify } from "@/apis/auth/register";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import { StyledBaseInputWrapper } from "@/components/styles/InputStyle";
import PhoneAuthInput from "@/components/input/PhoneAuthInput";
import ConsentCheckBox from "@/components/checkbox/ConsentCheckBox";

const StaffRegister = () => {
    const [value, setValue] = useState({
        username: "",
        password: "",
        passwordVerify: "",
        name: "",
        cellphone_number: "",
        verificationCode: "",
        email: "",
        company_id: "",
        account_holder: "",
        account_number: "",
        account_bank_code: "",
        passwordMatch: false,
        usernameValid: false,
        idChecked: false,
        nameValid: false,
    });

    const handle = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value: inputValue } = e.target;

        setValue((prevState) => {
            const newValue = {
                ...prevState,
                [name]: inputValue,
            };

            if (name === "password") {
                const isPasswordValid = validatePassword(inputValue);
                newValue.passwordMatch = isPasswordValid && inputValue === prevState.passwordVerify;
            } else if (name === "passwordVerify") {
                newValue.passwordMatch = prevState.password === inputValue;
            }

            if (name === "username") {
                const isIdValid = validateId(inputValue);
                newValue.usernameValid = isIdValid;
                newValue.idChecked = false;
            }

            if (name === "name") {
                newValue.nameValid = inputValue.length >= 2;
            }

            return newValue;
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

    const handleCheckId = async () => {
        try {
            const response = await registerIdverify({ username: value.username });
            console.log(response);
            setValue((prevState) => ({
                ...prevState,
                idChecked: true,
            }));
        } catch (error) {
            console.error(error);
            setValue((prevState) => ({
                ...prevState,
                idChecked: false,
            }));
        }
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="회원가입" /> }}>
            <AppBaseWrapper title={`소소상점과 함께\n더 즐거운 사업을 시작해 볼까요?`}>
                <Form onSubmit={handleSubmit}>
                    <OptionInput
                        type="text"
                        name="username"
                        value={value.username}
                        onChange={handle}
                        placeholder="6자 이상 영문+숫자 포함"
                        label="아이디"
                        options={{
                            buttonOption: {
                                checkedOption: value.idChecked,
                            },
                        }}
                    >
                        <Button
                            size="sub"
                            disabled={!value.usernameValid}
                            onClick={handleCheckId}
                            type="button"
                        >
                            중복확인
                        </Button>
                    </OptionInput>
                    <OptionInput
                        type="password"
                        name="password"
                        value={value.password}
                        onChange={handle}
                        placeholder="8~20자리 영문+숫자+특수문자 포함"
                        maxLength={20}
                        label="비밀번호"
                        options={{
                            buttonOption: {
                                passwordOption: true,
                                checkedOption: validatePassword(value.password),
                            },
                        }}
                    />
                    <OptionInput
                        type="password"
                        name="passwordVerify"
                        value={value.passwordVerify}
                        onChange={handle}
                        placeholder="비밀번호를 한번 더 입력해 주세요."
                        maxLength={20}
                        label="비밀번호확인"
                        options={{
                            buttonOption: {
                                passwordOption: true,
                                checkedOption: value.passwordMatch,
                            },
                        }}
                    />
                    <OptionInput
                        type="text"
                        name="name"
                        value={value.name}
                        onChange={handle}
                        placeholder="예) 김소소"
                        label="이름"
                        options={{
                            buttonOption: {
                                checkedOption: value.nameValid,
                            },
                        }}
                    />
                    <PhoneAuthInput
                        onPhoneChange={handlePhoneChange}
                        onVerificationCodeChange={handleVerificationCodeChange}
                    />

                    <OptionInput
                        type="text"
                        name="account_bank_code"
                        value={value.account_bank_code}
                        onChange={handle}
                        placeholder="선택하세요."
                        label="계좌은행"
                    />
                    <OptionInput
                        type="text"
                        name="account_holder"
                        value={value.account_holder}
                        onChange={handle}
                        placeholder="계좌주를 입력해 주세요."
                        label="계좌주"
                    />
                    <OptionInput
                        type="text"
                        name="account_number"
                        value={value.account_number}
                        onChange={handle}
                        placeholder="계좌번호를 입력해 주세요."
                        label="계좌번호"
                    />

                    <ConsentCheckBox />
                    <FixedButton type="submit">회원가입 신청</FixedButton>
                </Form>
            </AppBaseWrapper>
        </AppLayout>
    );
};
//
const Form = styled(StyledBaseInputWrapper)``;

export default StaffRegister;
