import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useModal from "@/hooks/useModal";

import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import FixedButton from "@/components/button/FixedButton";
import OptionInput from "@/components/input/OptionInput";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";
import DynamicModal from "@/components/modal/DynamicModal";

import { IFindPwList } from "@/interface/auth/find/find";
import { useInputHandler } from "@/utils/baseVerify";

const FindPwList = () => {
    const { values, error, handleInputChange, validations } = useInputHandler<IFindPwList>({
        password: "",
        passwordVerify: "",
    });
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        openModal();
    };

    //모달 함수
    const { isOpen, openModal, closeModal } = useModal();
    const navigate = useNavigate();
    const confirmHandler = () => {
        closeModal();
        navigate("/login", { replace: true });
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="비밀번호 재설정" /> }}>
            <AppBaseWrapper title={`김소소님의 아이디는\n‘soso1234’ 이에요.`}>
                <StyledInputContainer onSubmit={(e) => handleSubmit(e)}>
                    <OptionInput
                        type="password"
                        name="password"
                        id="password"
                        value={values.password}
                        onChange={handleInputChange}
                        placeholder="8~20자리 영문+숫자+특수문자 포함"
                        maxLength={20}
                        label="비밀번호"
                        options={{
                            buttonOption: {
                                passwordOption: true,
                                checkedOption: validations.passwordValid,
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
                        value={values.passwordVerify}
                        onChange={handleInputChange}
                        placeholder="비밀번호를 한번 더 입력해 주세요."
                        maxLength={20}
                        label="비밀번호확인"
                        options={{
                            buttonOption: {
                                passwordOption: true,
                                checkedOption: validations.passwordMatch,
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
