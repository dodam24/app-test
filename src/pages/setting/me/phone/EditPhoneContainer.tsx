import ButtonInput from "@/components/input/ButtonInput";
import LabelInput from "@/pages/setting/password/_components/LabelInput";
import { Styles } from "@/style/Styles";
import styled from "styled-components";

const EditPhoneContainer = () => {
    return (
        <StyledEditPhoneContainer>
            <h2>
                변경하실 휴대폰번호를 <br />
                입력후 인증해주세요.
            </h2>
            <ButtonInput buttonTitle="인증요청" option="휴대폰번호" onButtonClick={() => {}} />

            <div className="fixed_button">
                <button>저장</button>
            </div>

            <LabelInput label="아이디" />
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

    .fixed_button {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 0 1rem 0.6rem;
        background: ${Styles.colors.systemWhite};
        button {
            width: 100%;
            height: 2.8rem;
            border-radius: 0.4rem;
            background: ${Styles.colors.primary100};
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.semibold};
            color: ${Styles.colors.systemWhite};
        }
    }
`;
