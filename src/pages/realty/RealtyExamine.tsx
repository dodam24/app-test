import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import EnabledButton from "@/components/button/EnabledButton";

import { Styles } from "@/style/Styles";
const RealtyExamine = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="서류검토" /> }}>
            <StyledExaminWrapper>
                <h2>
                    서류 등록 완료되었어요.
                    <br />
                    결제하기를 통해 임대료를 납입할 수 있어요!
                </h2>
                <StyledExaminInner>
                    <h3>서류 검토</h3>
                    <p>완료</p>
                </StyledExaminInner>
                <button>서류 추가하기</button>
            </StyledExaminWrapper>
            <EnabledButton title="결제하기" />
        </AppLayout>
    );
};

const StyledExaminWrapper = styled.div`
    width: 100%;
    padding: 1rem 1rem 0;
    text-align: center;
    h2 {
        text-align: left;
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
        margin-bottom: 1.5rem;
    }
    button {
        color: ${Styles.colors.primary100};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
        margin-top: 1.2rem;
        padding: 0.5rem 1.9rem;
        display: inline-block;
        border-radius: 0.4rem;
        border: 1px solid ${Styles.colors.primary100};
        background-color: ${Styles.colors.systemWhite};
    }
`;

const StyledExaminInner = styled.section`
    text-align: center;
    border-radius: 0.4rem;
    background-color: ${Styles.colors.systemBackground};
    padding: 1.7rem 0;
    h3 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.medium};
        margin-bottom: 0.4rem;
    }
    p {
        color: ${Styles.colors.systemWhite};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.medium};
        background-color: ${Styles.colors.primary100};
        padding: 0.2rem 0.7rem;
        display: inline-block;
        border-radius: 4.45rem;
    }
`;

export default RealtyExamine;
