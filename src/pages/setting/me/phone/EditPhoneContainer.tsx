import styled from "styled-components";
import OptionInput from "@/components/input/OptionInput";
import Button from "@/components/button/Button";
import FixedButton from "@/components/button/FixedButton";

import { Styles } from "@/style/Styles";

const EditPhoneContainer = () => {
    return (
        <StyledEditPhoneContainer>
            <h2>
                변경하실 휴대폰번호를 <br />
                입력후 인증해주세요.
            </h2>
            <OptionInput
                type="text"
                id="phone"
                name="phone"
                placeholder="예) 010-1234-5678"
                label="휴대폰번호"
            >
                <Button size="sub">인증요청</Button>
            </OptionInput>
            <FixedButton disabled>저장</FixedButton>
        </StyledEditPhoneContainer>
    );
};

export default EditPhoneContainer;

const StyledEditPhoneContainer = styled.section`
    padding: 1rem 1rem 3.4rem;
    & > h2 {
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
        line-height: 1.4;
        color: ${Styles.colors.natural90};
        margin-bottom: 1.5rem;
    }
`;
