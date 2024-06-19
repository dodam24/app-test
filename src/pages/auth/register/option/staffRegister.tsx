import { useState, ChangeEvent } from "react";
import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import styled from "styled-components";
import { Styles } from "@/style/Styles";
import EmailToggle from "../../../../../public/login/EmailToggleIcon.png";
import LabelInput from "@/components/input/LabelInput";
import EnabledButton from "@/components/button/EnabledButton";
import TimerInput from "@/components/input/TimerInput";
import ConsentComponent from "../consentComponent";
import ButtonInput from "@/components/input/ButtonInput";

const StaffRegister = () => {
    const [username, setUsername] = useState("");
    const [isUsernameValid, setIsUsernameValid] = useState(false);

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const usernameRegex = /^(?=.*[a-zA-Z]{6,})(?=.*\d)[A-Za-z\d]{6,}$/;

        setUsername(value);

        if (!usernameRegex.test(value)) {
            setIsUsernameValid(false);
        } else {
            setIsUsernameValid(true);
        }
    };

    const handleVerified = (status: boolean) => {
        if (status) {
            console.log("인증 성공");
        } else {
            console.log("인증 실패 test");
        }
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="회원가입" /> }}>
            <StyledRegisterWrapper>
                <h3>
                    소소상점과 함께
                    <br />더 즐거운 사업을 시작해 볼까요?
                </h3>
                <ButtonInput
                    option="가맹점"
                    buttonTitle="조회"
                    placeholder="가맹점을 입력해 주세요."
                    type="text"
                    onButtonClick={() => console.log("가맹점 조회")}
                />
                <ButtonInput
                    option="아이디"
                    buttonTitle="중복확인"
                    placeholder="6자 이상 영문+숫자 포함"
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    disabled={!isUsernameValid}
                    onButtonClick={() => console.log("중복확인 클릭")}
                />
                <LabelInput
                    placeholder="8~20자리 영문+숫자+특수문자 포함"
                    showPasswordToggle={true}
                    option="비밀번호"
                    maxLength={20}
                />
                <LabelInput
                    placeholder="비밀번호를 한번 더 입력해 주세요."
                    showPasswordToggle={true}
                    option="비밀번호 확인"
                    maxLength={20}
                />
                <LabelInput placeholder="예) 김소소" option="이름" type="text" />
                <TimerInput initialSeconds={180} onVerified={handleVerified} />
                <StyledEmailWrapper>
                    <label>계좌은행</label>
                    <StyledEmailInner>
                        <input
                            className="email_modal_input"
                            type="text"
                            placeholder="선택하세요."
                        />
                        <span>
                            <img src={EmailToggle} alt="이메일 토글" />
                        </span>
                    </StyledEmailInner>
                </StyledEmailWrapper>
                <LabelInput placeholder="계좌주를 입력해 주세요." option="계좌주" type="text" />
                <LabelInput placeholder="계좌번호를 입력해 주세요." option="계좌번호" type="text" />
                <ConsentComponent />
                <EnabledButton title="회원가입 신청" disabled={!isUsernameValid} />
            </StyledRegisterWrapper>
        </AppLayout>
    );
};

const StyledRegisterWrapper = styled.div`
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

const StyledEmailWrapper = styled.div`
    label {
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
    }
`;

const StyledEmailInner = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    margin: 0.4rem 0 1.2rem;
    input {
        width: 100%;
        height: 2.3rem;
        padding: 0 0.8rem;
        align-items: center;
        background-color: ${Styles.colors.systemBackground};
        border: none;
        border-radius: 0.4rem;
        caret-color: ${Styles.colors.primary100};
        &::placeholder {
            color: ${Styles.colors.natural40};
            font-size: ${Styles.font.size.fontsize14};
            font-weight: ${Styles.font.weight.regular};
        }

        &:focus {
            border: 0.05rem solid ${Styles.colors.primary100};
            outline: none;
        }
    }
    span {
        position: absolute;
        top: 50%;
        right: 0.8rem;
        transform: translateY(-50%);
        cursor: pointer;
        display: flex;
        justify-content: end;
        align-items: center;

        img {
            width: 1.2rem;
            height: 1.2rem;
            margin: 0;
        }
    }
`;

export default StaffRegister;
