import { useState, ChangeEvent } from "react";
import styled from "styled-components";

import AppLayout from "@/components/layout/AppLayout";
import AppBackHeader from "@/components/header/AppBackHeader";

import { Styles } from "@/style/Styles";
import OptionInput from "@/components/input/OptionInput";

const FindID = () => {
    const [value, setValue] = useState({
        name: "",
    });

    const handle = (e: ChangeEvent<HTMLInputElement>) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="아이디 찾기" /> }}>
            <StyledFindIdrWrapper>
                <h3>
                    이름과 휴대폰 번호를 입력하여
                    <br />
                    인증을 진행해 주세요.
                </h3>
                <OptionInput
                    type="text"
                    name="name"
                    value={value.name}
                    onChange={handle}
                    placeholder="예) 김소소"
                    label="이름"
                />
            </StyledFindIdrWrapper>
        </AppLayout>
    );
};

const StyledFindIdrWrapper = styled.div`
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

export default FindID;

// 작업 필요
