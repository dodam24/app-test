import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import ManagePaymentList from "@/pages/manage/paymentRegister/ManagePaymentList";
import Button from "@/components/button/Button";
import OptionInput from "@/components/input/OptionInput";
import { ChangeEvent, useState } from "react";
import FixedButton from "@/components/button/FixedButton";

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
                    placeholder="지급일을 입력해 주세요."
                    label="지급일"
                >
                    <Button size="sub">세팅</Button>
                </OptionInput>
                <ManagePaymentList />
                <FixedButton>일괄지급 등록</FixedButton>
            </StyledManagePaymentWrapper>
        </AppLayout>
    );
};

export default ManagePaymentRegister;

const StyledManagePaymentWrapper = styled.form`
    width: 100%;
    padding: 1.5rem 1rem 0;
`;
