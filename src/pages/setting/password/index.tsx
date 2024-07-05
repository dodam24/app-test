import styled from "styled-components";
import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import useModal from "@/hooks/useModal";
import DynamicModal from "@/components/modal/DynamicModal";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";
import OptionInput from "@/components/input/OptionInput";

import { Styles } from "@/style/Styles";
import FixedButton from "@/components/button/FixedButton";

const ChangePassword = () => {
    const { isOpen, openModal, closeModal } = useModal();
    const error = true;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        openModal();
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="비밀번호 변경" /> }}>
            <StyledChangePasswordContainer onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <h2>
                        현재 비밀번호 및 변경하실
                        <br />
                        새로운 비밀번호를 입력해주세요.
                    </h2>
                    <div className="form_input">
                        <OptionInput
                            type="password"
                            id="currentPassword"
                            name="password"
                            placeholder="비밀번호를 입력해 주세요."
                            label="현재 비밀번호"
                            options={{
                                buttonOption: {
                                    passwordOption: true,
                                },
                                error: {
                                    errorStatus: error,
                                    errorMessage: "비밀번호가 일치하지 않습니다.",
                                },
                            }}
                        />
                        <div className="new_password">
                            <OptionInput
                                type="password"
                                id="newPassword"
                                name="newPassword"
                                placeholder="8~20자리 영문+숫자+특수문자 포함"
                                label="새로운 비밀번호"
                                options={{
                                    buttonOption: {
                                        passwordOption: true,
                                    },
                                }}
                            />
                            <OptionInput
                                type="password"
                                placeholder="비밀번호를 한번 더 입력해 주세요."
                                name="newPasswordCheck"
                                options={{
                                    buttonOption: {
                                        passwordOption: true,
                                    },
                                    error: {
                                        errorStatus: error,
                                        errorMessage: "비밀번호가 일치하지 않습니다.",
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>
                <FixedButton type="submit" disabled>
                    저장
                </FixedButton>
            </StyledChangePasswordContainer>
            <DynamicModal open={isOpen} close={closeModal}>
                <ConfirmationModal
                    title="설정 완료"
                    message={"비밀번호 변경이\n 정상적으로 완료되었습니다."}
                    close={closeModal}
                />
            </DynamicModal>
        </AppLayout>
    );
};

export default ChangePassword;

const StyledChangePasswordContainer = styled.form`
    width: 100%;
    height: calc(100vh - 2.4rem);
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem 0.6rem;
    overflow: auto;
    & > div {
        flex: 1;
        h2 {
            font-size: ${Styles.font.size.fontsize18};
            font-weight: ${Styles.font.weight.medium};
            line-height: 1.4;
            color: ${Styles.colors.natural90};
        }
    }
    .form_input {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        margin-top: 1.5rem;
        .new_password {
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
        }
    }
`;
