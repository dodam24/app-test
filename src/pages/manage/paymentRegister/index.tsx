import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import ButtonInput from "@/components/input/ButtonInput";
import ManagePaymentList from "@/pages/manage/paymentRegister/ManagePaymentList";

const ManagePaymentRegister = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="직원 상세정보" /> }}>
            <StyledManagePaymentWrapper>
                <ButtonInput
                    option="지급일"
                    buttonTitle="세팅"
                    placeholder="지급일을 입력해주세요."
                />
                <ManagePaymentList />
            </StyledManagePaymentWrapper>
        </AppLayout>
    );
};

export default ManagePaymentRegister;

const StyledManagePaymentWrapper = styled.div`
    width: 100%;
    height: calc(100vh - 2.4rem);
    padding: 1.5rem 1rem 0;
`;
