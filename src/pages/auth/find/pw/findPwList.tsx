import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
import styled from "styled-components";
import { Styles } from "@/style/Styles";
import LabelInput from "@/components/input/LabelInput";
import CustomInput from "@/components/input/CustomInput";
import EnabledButton from "@/components/button/EnabledButton";

const FindPwList = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="비밀번호 재설정" /> }}>
            <StyledFindPwListWrapper>
                <h3>
                    김소소님의 아이디는
                    <br />
                    ‘soso1234’ 이에요.
                </h3>
                <LabelInput
                    className="firstInput"
                    option="새로운 비밀번호"
                    placeholder="8~20자리 영문+숫자+특수문자 포함"
                    showPasswordToggle={true}
                />
                <CustomInput
                    placeholder="비밀번호를 한번 더 입력해 주세요."
                    showPasswordToggle={true}
                />
                <EnabledButton title="확인" className="bottomBtn" />
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
    fieldset {
        margin-bottom: 0.6rem;
    }
`;

export default FindPwList;
