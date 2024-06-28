import { ChangeEvent, useState } from "react";
import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";

import { validatePassword, validateId } from "@/utils/inputVerify";

import ConsentComponent from "@/pages/auth/register/ConsentComponent";
import OwnerRegisterEmail from "@/pages/auth/register/option/OwnerRegisterEmail";

import { Styles } from "@/style/Styles";
import FixedButton from "@/components/button/FixedButton";
import OptionInput from "@/components/input/OptionInput";
import Button from "@/components/button/Button";

import { registerIdverify } from "@/apis/auth/register";

const OwnerRegister = () => {
    const [value, setValue] = useState({
        username: "",
        password: "",
        passwordverify: "",
        name: "",
        cellphone_number: "",
        verificationCode: "",
        email: "",
        company_id: "",
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
                newValue.passwordMatch = isPasswordValid && inputValue === prevState.passwordverify;
            } else if (name === "passwordverify") {
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

    return (
        <AppLayout props={{ header: <AppBackHeader title="회원가입" /> }}>
            <StyledRegisterWrapper>
                <Form>
                    <h3>
                        소소상점과 함께
                        <br />더 즐거운 사업을 시작해 볼까요?
                    </h3>
                    <FormFieldSet>
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
                            name="passwordverify"
                            value={value.passwordverify}
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
                        <OptionInput
                            type="text"
                            name="verificationCode"
                            value={value.verificationCode}
                            onChange={handle}
                            placeholder="인증번호를 입력해 주세요"
                        >
                            <Button size="sub">인증확인</Button>
                        </OptionInput>
                        <OwnerRegisterEmail />
                        <OptionInput
                            type="text"
                            name="company_id"
                            value={value.company_id}
                            onChange={handle}
                            placeholder="영업점 ID를 입력해 주세요."
                            label="영업점 ID를 입력해 주세요."
                            options={{
                                buttonOption: {
                                    checkedOption: false,
                                },
                            }}
                        />
                    </FormFieldSet>
                    <ConsentComponent />

                    <FixedButton>회원가입 신청</FixedButton>
                </Form>
            </StyledRegisterWrapper>
        </AppLayout>
    );
};

const StyledRegisterWrapper = styled.div`
    width: 100%;
    padding: 0 1rem 0.6rem;
    margin-bottom: 2.5rem;
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
const Form = styled.form``;
const FormFieldSet = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    justify-content: center;
    align-items: center;
`;

export default OwnerRegister;
