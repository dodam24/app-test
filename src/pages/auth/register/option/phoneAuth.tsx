import styled from "styled-components";

import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import LabelInput from "@/components/input/LabelInput";
import ButtonInput from "@/components/input/ButtonInput";
import EnabledButton from "@/components/button/EnabledButton";
import ConsentComponent from "@/pages/auth/register/ConsentComponent";

import { Styles } from "@/style/Styles";

const PhoneAuth = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="휴대폰 인증" /> }}>
            <StyledPhoneAuthWrapper>
                <h3>최초 접속 인증을 진행해 주세요.</h3>
                <LabelInput
                    option="상호명"
                    placeholder="회원가입에서 상호명 받아오기"
                    type="text"
                />
                <LabelInput option="이름" placeholder="회원가입에서 이름 받아오기" type="text" />
                <ButtonInput
                    option="휴대폰번호"
                    placeholder="010-1234-5678"
                    buttonTitle="인증요청"
                    type="text"
                    onButtonClick={() => console.log("인증요청 클릭")}
                />
                <ConsentComponent />
                <EnabledButton title="확인" />
            </StyledPhoneAuthWrapper>
        </AppLayout>
    );
};
const StyledPhoneAuthWrapper = styled.div`
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
export default PhoneAuth;
