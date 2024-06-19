import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import styled from "styled-components";
import { Styles } from "@/style/Styles";
import LabelInput from "@/components/input/LabelInput";
import EnabledButton from "@/components/button/EnabledButton";
import TimerInput from "@/components/input/TimerInput";

const FindPW = () => {
    const handleVerified = (status: boolean) => {
        if (status) {
            console.log("인증 성공");
        } else {
            console.log("인증 실패 test");
        }
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="비밀번호 찾기" /> }}>
            <StyledFindPwWrapper>
                <h3>
                    아이디, 이름, 휴대폰 번호를 입력하여
                    <br />
                    인증을 진행해 주세요.
                </h3>
                <LabelInput option="아이디" placeholder="예) soso1234" type="text" />
                <LabelInput option="이름" placeholder="예) 김소소" type="text" />
                <TimerInput initialSeconds={180} onVerified={handleVerified} />
                <EnabledButton title="다음" />
            </StyledFindPwWrapper>
        </AppLayout>
    );
};
const StyledFindPwWrapper = styled.div`
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
export default FindPW;
