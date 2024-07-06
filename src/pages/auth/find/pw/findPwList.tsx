import { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";

import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import FixedButton from "@/components/button/FixedButton";
import OptionInput from "@/components/input/OptionInput";
import { validatePassword } from "@/utils/inputVerify";

import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import DynamicModal from "@/components/modal/DynamicModal";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";
import useModal from "@/hooks/useModal";
import { useNavigate } from "react-router-dom";

const FindPwList = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        openModal();
    };

    const [value, setValue] = useState({
        password: "",
        passwordVerify: "",
        passwordValid: false,
        passwordMatch: false,
        verifyMatch: false,
        error: {
            passwordError: "",
            verifyError: "",
        },
    });

    const handle = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value: inputValue } = e.target;

        setValue((prevState) => ({
            ...prevState,
            [name]: inputValue,
            error: {
                ...prevState.error,
                [`${name}Error`]: "",
            },
        }));

        if (name === "password") {
            const isPasswordValid = validatePassword(inputValue);
            setValue((prevState) => ({
                ...prevState,
                passwordValid: isPasswordValid,
                passwordMatch: isPasswordValid && prevState.passwordVerify === inputValue,
                error: {
                    ...prevState.error,
                    passwordError: isPasswordValid
                        ? ""
                        : "8~20자리 영문+숫자+특수문자 모두 포함하여 입력해주세요.",
                },
            }));
        } else if (name === "passwordVerify") {
            setValue((prevState) => ({
                ...prevState,
                verifyMatch: prevState.password === inputValue,
                error: {
                    ...prevState.error,
                    verifyError:
                        prevState.password === inputValue ? "" : "비밀번호가 일치하지 않습니다.",
                },
            }));
        }
    };
    //모달 함수
    const { isOpen, openModal, closeModal } = useModal();
    const navigate = useNavigate();
    const confirmHandler = () => {
        closeModal();
        navigate("/login");
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="비밀번호 재설정" /> }}>
            <AppBaseWrapper title={`김소소님의 아이디는\n‘soso1234’ 이에요.`}>
                <StyledInputContainer onSubmit={(e) => handleSubmit(e)}>
                    <OptionInput
                        type="password"
                        name="password"
                        value={value.password}
                        onChange={handle}
                        placeholder="8~20자리 영문+숫자+특수문자 포함"
                        maxLength={20}
                        label="새로운 비밀번호"
                        options={{
                            buttonOption: {
                                passwordOption: true,
                                checkedOption: value.passwordValid,
                            },
                            error: {
                                errorStatus: !!value.error.passwordError,
                                errorMessage: value.error.passwordError,
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
                        options={{
                            buttonOption: {
                                passwordOption: true,
                                checkedOption: value.verifyMatch,
                            },
                            error: {
                                errorStatus: !!value.error.verifyError,
                                errorMessage: value.error.verifyError,
                            },
                        }}
                    />
                    <FixedButton type="submit">확인</FixedButton>
                </StyledInputContainer>
                <DynamicModal open={isOpen} close={closeModal}>
                    <ConfirmationModal
                        title="설정 완료"
                        message={"비밀번호 변경이\n 정상적으로 완료되었습니다."}
                        close={confirmHandler}
                        buttonText="로그인 하러 가기"
                    />
                </DynamicModal>
            </AppBaseWrapper>
        </AppLayout>
    );
};

const StyledInputContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    margin: 1.5rem 0 0;
`;

export default FindPwList;
