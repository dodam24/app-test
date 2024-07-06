import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";

import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import FixedButton from "@/components/button/FixedButton";
import Button from "@/components/button/Button";
import OptionInput from "@/components/input/OptionInput";
import SelectInput from "@/components/input/SelectInput";
import PhoneAuthInput from "@/components/input/PhoneAuthInput";
import { StyledBaseInputWrapper, StyledEmailWrapper } from "@/components/styles/InputStyle";

import { validatePassword, validateId } from "@/utils/inputVerify";
import { registerIdverify } from "@/apis/auth/register";
import ConsentCheckBox from "@/components/checkbox/ConsentCheckBox";
import useModal from "@/hooks/useModal";
import DynamicModal from "@/components/modal/DynamicModal";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";
import { useNavigate } from "react-router-dom";

const OwnerRegister = () => {
    const [value, setValue] = useState({
        username: "",
        password: "",
        passwordVerify: "",
        name: "",
        cellphone_number: "",
        verificationCode: "",
        email_id: "",
        selectDomain: "",
        company_id: "",
        user_type: "owner",
        passwordMatch: false,
        usernameValid: false,
        idChecked: false,
        nameValid: false,
        showDeleteOption: false,
    });

    const [error, setError] = useState<string>("");

    const handle = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value: inputValue } = e.target;

        setValue((prevState) => {
            const newValue = {
                ...prevState,
                [name]: inputValue,
            };

            if (name === "password") {
                if (!validatePassword(inputValue)) {
                    setError("비밀번호는 8~20자리 영문+숫자+특수문자 포함이어야 합니다.");
                } else {
                    setError("");
                }
            } else if (name === "username") {
                !validateId(inputValue);
            }

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
                newValue.nameValid = inputValue.length >= 1;
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

    const handleSelectDomain = (domain: string) => {
        const updatedEmail = `${value.email_id}@${domain}`;
        setValue((prevState) => ({
            ...prevState,
            email_id: value.email_id,
            selectDomain: domain,
        }));

        console.log("Updated email:", updatedEmail);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(value);
    };
    //모달 함수
    const { isOpen, openModal, closeModal } = useModal();
    const navigate = useNavigate();
    const confirmHandler = () => {
        closeModal();
        navigate("/login");
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
                        id="username"
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
                        id="password"
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
                            error: {
                                errorStatus: !!error,
                                errorMessage: error,
                            },
                        }}
                    />
                    <OptionInput
                        type="password"
                        name="passwordVerify"
                        id="passwordVerify"
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
                        id="name"
                        value={value.name}
                        onChange={handle}
                        placeholder="예) 김소소"
                        label="이름"
                        options={{
                            buttonOption: {
                                checkedOption: value.nameValid,
                                deleteOption: value.nameValid,
                            },
                        }}
                    />
                    <PhoneAuthInput
                        onPhoneChange={handlePhoneChange}
                        onVerificationCodeChange={handleVerificationCodeChange}
                    />
                    <StyledEmailContainer>
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
                    </StyledEmailContainer>
                    <OptionInput
                        type="text"
                        name="company_id"
                        id="company_id"
                        value={value.company_id}
                        onChange={handle}
                        placeholder="영업점 ID를 입력해 주세요."
                        label="영업점(선택)"
                        options={{
                            buttonOption: {
                                checkedOption: false,
                            },
                        }}
                    />

                    <ConsentCheckBox />
                    <FixedButton type="submit" onClick={openModal}>
                        회원가입 신청
                    </FixedButton>
                    <DynamicModal open={isOpen} close={closeModal}>
                        <ConfirmationModal
                            title="회원가입 완료"
                            message={`회원가입이 완료되었습니다.\n로그인 페이지로 이동합니다.`}
                            buttonText="확인"
                            close={confirmHandler}
                        />
                    </DynamicModal>
                </Form>
            </AppBaseWrapper>
        </AppLayout>
    );
};

const Form = styled(StyledBaseInputWrapper)``;
const StyledEmailContainer = styled(StyledEmailWrapper)``;

export default OwnerRegister;
