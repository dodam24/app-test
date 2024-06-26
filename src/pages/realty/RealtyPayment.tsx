import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import EnabledButton from "@/components/button/EnabledButton";
import RealtyPaymentInput from "@/pages/realty/RealtyPaymentInput";

import { Styles } from "@/style/Styles";

const RealtyPayment = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="결제하기" /> }}>
            <StyledLoanPaymentWrapper>
                <h2>
                    소소상점과 함께
                    <br /> 간편한 결제를 시작해 볼까요?
                </h2>
                <RealtyPaymentInput />
                <p>
                    ※ 오늘 결제시, <span>20일 13:00에 입금</span>될 예정입니다.
                </p>
            </StyledLoanPaymentWrapper>
            <EnabledButton title="결제하기" />
        </AppLayout>
    );
};

const StyledLoanPaymentWrapper = styled.div`
    width: 100%;
    padding: 1rem 1rem 0;
    h2 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
        margin-bottom: 1rem;
    }
    p {
        margin-top: 3.1rem;
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize13};
        font-weight: ${Styles.font.weight.regular};
        span {
            color: ${Styles.colors.systemError};
        }
    }
`;
export default RealtyPayment;
