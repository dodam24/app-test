import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import { Styles } from "@/style/Styles";
import styled from "styled-components";

const Withdraw = () => {
    return (
        <div>
            <AppLayout props={{ header: <AppBackHeader title="회원탈퇴" /> }}>
                <WithdrawContainer />
                {/* WithdrawContainer 내부 */}
                {/* <WithdrawServiceConfirmation /> 컴포넌트 */}
                <StyledWithdrawServiceConfirmation>
                    <h4>
                        탈퇴 전, 해지되는 서비스를
                        <br />
                        확인해주세요.
                    </h4>
                    <ul>
                        <li>
                            <h6>결제 정보</h6>
                            <input type="radio" name="" />
                        </li>
                        <li>
                            <h6>매입/매출 정보</h6>
                            <input type="radio" name="" />
                        </li>
                        <li>
                            <h6>직원 정보</h6>
                            <input type="radio" name="" />
                        </li>
                    </ul>
                    <p>
                        위 결제정보, 매입매출 정보, 직원 정보 서비스는 회원 탈퇴시
                        <br />
                        3년간 보관 후 파기됩니다.
                    </p>
                </StyledWithdrawServiceConfirmation>

                {/* <WithdrawReason /> 컴포넌트 */}
                <StyledWithdrawReason>
                    <h4>탈퇴하는 이유를 선택해주세요.</h4>
                </StyledWithdrawReason>

                {/* <WithdrawButton /> 컴포넌트 */}
                <StyledWithdrawButton></StyledWithdrawButton>
            </AppLayout>
        </div>
    );
};

export default Withdraw;

const WithdrawContainer = styled.section`
    /* padding: 1rem; */
`;
const StyledWithdrawServiceConfirmation = styled.section`
    padding: 1rem;
    border: 0.05rem solid ${Styles.colors.natural10};
    border-radius: 0.4rem;
    background: #fff;
    p {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize13};
    }
`;
const StyledWithdrawReason = styled.section``;
const StyledWithdrawButton = styled.div``;
