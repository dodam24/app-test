import { useState, useEffect, FormEvent } from "react";
import styled from "styled-components";
import useDateOverlay from "@/hooks/useDateOverlay";

import ManagePaymentList from "@/pages/manage/paymentRegister/ManagePaymentList";
import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import Button from "@/components/button/Button";
import OptionInput from "@/components/input/OptionInput";
import FixedButton from "@/components/button/FixedButton";
import DatePickerOverlay from "@/components/overlay/DatePickerOverlay";
import { formatNewDate, parseDate2 } from "@/utils/formatDateTime";

interface PaymentDate {
    paymentDate: string;
}

const ManagePaymentRegister = () => {
    const { overlayState, setOverlayState, hideOverlay } = useDateOverlay();
    const today = formatNewDate(new Date());
    const [isDateSelected, setIsDateSelected] = useState(false);
    const [value, setValue] = useState<PaymentDate>({ paymentDate: "" });

    useEffect(() => {
        setOverlayState((prevState) => ({
            ...prevState,
            startDate: today,
        }));
    }, []);

    useEffect(() => {
        if (overlayState.startDate && isDateSelected) {
            setValue((prevValue) => ({
                ...prevValue,
                paymentDate: overlayState.startDate ?? prevValue.paymentDate,
            }));
        }
    }, [overlayState.startDate, isDateSelected]);

    const handleDateChange = () => {
        setIsDateSelected(true);
        setOverlayState((prevState) => ({
            ...prevState,
            isActive: true,
            isStartDate: true,
            isEndDate: false,
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(value.paymentDate);
        return;
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="지급등록" /> }}>
            <StyledManagePaymentWrapper onSubmit={handleSubmit}>
                <OptionInput
                    type="text"
                    name="paymentDate"
                    value={value.paymentDate ? parseDate2(value.paymentDate) : ""}
                    onClick={handleDateChange}
                    placeholder="지급일을 입력해 주세요."
                    label="지급일"
                    readOnly="basic"
                >
                    <Button size="sub">세팅</Button>
                </OptionInput>
                <ManagePaymentList />
                <FixedButton>일괄지급 등록</FixedButton>
                <DatePickerOverlay
                    overlayState={overlayState}
                    setOverlayState={setOverlayState}
                    hideOverlay={hideOverlay}
                />
            </StyledManagePaymentWrapper>
        </AppLayout>
    );
};

export default ManagePaymentRegister;

const StyledManagePaymentWrapper = styled.form`
    width: 100%;
    padding: 1.5rem 1rem 0;
`;
