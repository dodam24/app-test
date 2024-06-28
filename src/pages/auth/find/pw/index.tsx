import { ChangeEvent, useState } from "react";
import styled from "styled-components";

import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";
// import TimerInput from "@/components/input/TimerInput";
// import instance from "@/apis/instance";

import { Styles } from "@/style/Styles";
import OptionInput from "@/components/input/OptionInput";
import FixedButton from "@/components/button/FixedButton";

const FindPW = () => {
    const [value, setValue] = useState({
        name: "",
        username: "",
    });

    const handle = (e: ChangeEvent<HTMLInputElement>) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="비밀번호 찾기" /> }}>
            <StyledFindPwWrapper>
                <h3>
                    아이디, 이름, 휴대폰 번호를 입력하여
                    <br />
                    인증을 진행해 주세요.
                </h3>
                <OptionInput
                    type="text"
                    name="username"
                    value={value.username}
                    onChange={handle}
                    placeholder="예) soso1234"
                    label="아이디"
                />
                <OptionInput
                    type="text"
                    name="name"
                    value={value.name}
                    onChange={handle}
                    placeholder="예) 김소소"
                    label="이름"
                />
                <FixedButton>다음</FixedButton>
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
