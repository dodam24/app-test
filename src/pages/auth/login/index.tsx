import { Link } from "react-router-dom";
import styled from "styled-components";

import SnsLogin from "@/pages/auth/login/SnsLogin";

import { Styles } from "@/style/Styles";

import { CheckIcon, CheckedIcon } from "@/pages/auth/login/_images/loginImg";
import LoginInput from "@/pages/auth/login/LoginInput";

const Login = () => {
    return (
        <ReservationWrapper>
            <Form>
                <LoginInput />
                <FormFieldOption>
                    <SaveIdWrapper>
                        <input type="checkbox" />
                        <label>자동로그인</label>
                    </SaveIdWrapper>
                    <FindOptionsWrapper>
                        <Link to={"/find/id"}>아이디 찾기</Link>
                        <Link to={"/find/pw"}>비밀번호 찾기</Link>
                    </FindOptionsWrapper>
                </FormFieldOption>
                <DividerText>또는 간편로그인</DividerText>
                <SnsLogin />
                <RegisterWrapper>
                    <RegisterPrompt>아직 회원이 아니신가요?</RegisterPrompt>
                    <RegisterLink to={"/register"}>회원가입</RegisterLink>
                </RegisterWrapper>
            </Form>
        </ReservationWrapper>
    );
};

const ReservationWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 3rem;
    .custom_btn {
        position: static;
        left: 0;
        transform: translateX(0);
        width: 100%;
    }
`;

const Form = styled.form`
    width: 100%;
    padding: 0 1rem;
`;

const FormFieldOption = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 0.6rem;
`;

const SaveIdWrapper = styled.div`
    display: flex;
    gap: 0.3rem;
    align-items: center;

    input {
        width: 1rem;
        height: 1rem;
        border-radius: 0.2rem;
        background: url(${CheckIcon}) no-repeat center;
        background-size: 1rem 1rem;
        appearance: none;
        margin: 0;

        &:checked {
            background: url(${CheckedIcon}) no-repeat center;
            background-size: 1rem 1rem;
        }
    }

    label {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
    }
`;

const FindOptionsWrapper = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;

    a {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};

        text-decoration: none;

        &::before {
            content: "|";
            margin-right: 0.5rem;
            color: ${Styles.colors.natural60};
        }

        &:first-child::before {
            content: none;
        }
    }
`;

const DividerText = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-size: ${Styles.font.size.fontsize14};
    color: ${Styles.colors.natural80};
    margin: 2rem 0 0.6rem;
    padding: 0.6rem 0;
    text-align: center;
    font-weight: ${Styles.font.weight.regular};

    &::before,
    &::after {
        content: "";
        flex: 1;
        width: 5.15rem;
        height: 0.05rem;
        background: ${Styles.colors.natural30};
    }
    &::before {
        margin-right: 0.8rem;
    }
    &::after {
        margin-left: 0.8rem;
    }
`;

const RegisterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2.3rem;
    gap: 0.3rem;
`;

const RegisterPrompt = styled.span`
    color: var(--Natural-N40, #a3a3a8);
    font-family: Pretendard;
    font-size: ${Styles.font.size.fontsize14};
    font-weight: ${Styles.font.weight.regular};
`;

const RegisterLink = styled(Link)`
    color: ${Styles.colors.primary100};
    font-family: Pretendard;
    font-size: ${Styles.font.size.fontsize14};
    font-weight: ${Styles.font.weight.medium};

    text-underline-position: under;
`;

export default Login;
