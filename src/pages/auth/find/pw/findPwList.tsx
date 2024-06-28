import { useState, ChangeEvent } from "react";
import styled from "styled-components";

import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import FixedButton from "@/components/button/FixedButton";
import OptionInput from "@/components/input/OptionInput";
import { validatePassword } from "@/utils/inputVerify";

import { Styles } from "@/style/Styles";

const FindPwList = () => {
    const [value, setValue] = useState({
        password: "",
        passwordverify: "",
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
                passwordMatch: isPasswordValid && prevState.passwordverify === inputValue,
                error: {
                    ...prevState.error,
                    passwordError: isPasswordValid
                        ? ""
                        : "8~20자리 영문+숫자+특수문자 모두 포함하여 입력해주세요.",
                },
            }));
        } else if (name === "passwordverify") {
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

    return (
        <AppLayout props={{ header: <AppBackHeader title="비밀번호 재설정" /> }}>
            <StyledFindPwListWrapper>
                <h3>
                    김소소님의 아이디는
                    <br />
                    ‘soso1234’ 이에요.
                </h3>
                <StyledInputContainer>
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
                        name="passwordverify"
                        value={value.passwordverify}
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
                </StyledInputContainer>
                <FixedButton>확인</FixedButton>
            </StyledFindPwListWrapper>
        </AppLayout>
    );
};

const StyledFindPwListWrapper = styled.div`
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
    gap: 0.6rem;
`;

export default FindPwList;
