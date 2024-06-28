import WithdrawButton from "@/pages/setting/me/withdraw/WithdrawButton";
import WithdrawReason from "@/pages/setting/me/withdraw/WithdrawReason";
import WithdrawServiceConfirmation from "@/pages/setting/me/withdraw/WithdrawServiceConfirmation";
import styled from "styled-components";

const WithdrawContainer = () => {
    return (
        <StyledWithdrawContainer>
            <WithdrawServiceConfirmation />
            <WithdrawReason />
            <WithdrawButton />
        </StyledWithdrawContainer>
    );
};

export default WithdrawContainer;

const StyledWithdrawContainer = styled.section``;
