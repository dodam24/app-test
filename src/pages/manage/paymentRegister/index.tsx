import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import ManagePaymentList from "@/pages/manage/paymentRegister/ManagePaymentList";
import Button from "@/components/button/Button";
import OptionInput from "@/components/input/OptionInput";
import { ChangeEvent, useState } from "react";
import PhoneAuthInput from "@/components/input/PhoneAuthInput";

const ManagePaymentRegister = () => {
    const [value, setValue] = useState({
        paymentDate: "",
    });

    const handle = (e: ChangeEvent<HTMLInputElement>) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <AppLayout props={{ header: <AppBackHeader title="지급등록" /> }}>
            <StyledManagePaymentWrapper>
                <OptionInput
                    type="text"
                    name="paymentDate"
                    value={value.paymentDate}
                    onChange={handle}
                    placeholder="6자 이상 영문+숫자 포함"
                    label="지급일"
                >
                    <Button size="sub">세팅</Button>
                </OptionInput>
                <ManagePaymentList />
                <PhoneAuthInput />
                {/* 테스트 화면으로 넣어둠 지울거임 */}
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
