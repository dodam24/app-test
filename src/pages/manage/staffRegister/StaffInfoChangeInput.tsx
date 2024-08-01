import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import useDateOverlay from "@/hooks/useDateOverlay";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import AppLayout from "@/components/layout/AppLayout";
import ConsentCheckBox from "@/components/checkbox/ConsentCheckBox";
import FixedButton from "@/components/button/FixedButton";
import OptionInput from "@/components/input/OptionInput";
import SelectInput from "@/components/input/SelectInput";
import Input from "@/components/input/Input";
import DatePickerOverlay from "@/components/overlay/DatePickerOverlay";

import { IManageStaffInputProps } from "@/interface/manage/staff/manageStaffRegister";
import { formatDateTime, formatNewDate, parseDate2 } from "@/utils/formatDateTime";

import { StyledBaseInputWrapper, StyledLabelRadioInputWrapper } from "@/style/InputStyle";

const StaffInfoChangeInput = () => {
    const [value, setValue] = useState<IManageStaffInputProps>({
        username: "mr.hong",
        name: "홍길동",
        cellphone_number: "010-1234-5678",
        work_type: "직원",
        pay_type: "월급",
        pay: 2000000,
        work_start_date: "20220314",
        work_exit_date: "",
        insurance: "",
        member_created_at: "2023-02-24T14:30:23.306371+09:00",
        member_updated_at: "2023-02-24T14:33:23.306371+09:00",
        pay_day: "12",
        account_bank_code: "국민은행",
        account_holder: "홍길동",
        account_number: "12345678910",
        selectDomain: "",
        passwordMatch: false,
        usernameValid: false,
        idChecked: false,
        nameValid: false,
        showDeleteOption: false,
    });

    const handle = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value: inputValue } = e.target;

        setValue((prevState) => {
            const newValue = {
                ...prevState,
                [name]: inputValue,
            };

            return newValue;
        });
    };

    const handleSelectDomain = (domain: string, field: string) => {
        setValue((prevState) => ({
            ...prevState,
            [field]: domain,
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(value);
    };

    //날짜 모달
    const { overlayState, setOverlayState, hideOverlay } = useDateOverlay();
    const today = formatNewDate(new Date());
    const [isDateSelected, setIsDateSelected] = useState(false);

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
                work_exit_date: overlayState.startDate ?? prevValue.work_exit_date,
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

    return (
        <AppLayout props={{ header: <AppBackHeader title="직원수정" /> }}>
            <AppBaseWrapper title={`소소상점과 함께\n더 즐거운 사업을 시작해 볼까요?`}>
                <Form onSubmit={handleSubmit}>
                    <OptionInput
                        type="text"
                        name="username"
                        value={value.username}
                        label="아이디"
                        id="username"
                        readOnly
                    ></OptionInput>
                    <OptionInput
                        type="text"
                        name="name"
                        id="name"
                        value={value.name}
                        onChange={handle}
                        label="이름"
                        options={{
                            buttonOption: {
                                checkedOption: value.nameValid,
                                deleteOption: true,
                            },
                        }}
                    />
                    <OptionInput
                        type="text"
                        name="cellphone_number"
                        id="cellphone_number"
                        value={value.cellphone_number}
                        label="휴대폰 번호"
                        readOnly
                    />
                    <SelectInput
                        options={["직원", "알바"]}
                        onSelect={(domain) => handleSelectDomain(domain, "work_type")}
                        placeholder="선택하세요."
                        label="근무유형"
                        id="work_type"
                        value={value.work_type}
                    />
                    <div className="pay_type">
                        <SelectInput
                            options={["월급", "시급"]}
                            onSelect={(domain) => handleSelectDomain(domain, "pay_type")}
                            placeholder="선택"
                            label="계약급여"
                            id="pay_type"
                            value={value.pay_type}
                        />
                        <Input
                            value={value.pay.toLocaleString()}
                            name="pay"
                            type="text"
                            onChange={handle}
                        />
                    </div>
                    <OptionInput
                        type="text"
                        name="work_start_date"
                        id="work_start_date"
                        value={parseDate2(value.work_start_date)}
                        label="근무시작일"
                        readOnly
                    />
                    <OptionInput
                        type="text"
                        name="work_exit_date"
                        id="work_exit_date"
                        value={value.work_exit_date ? parseDate2(value.work_exit_date) : ""}
                        onChange={handle}
                        onClick={handleDateChange}
                        placeholder="퇴사일 입력 시 퇴사처리됩니다."
                        label="퇴사일"
                        readOnly="basic"
                        options={{
                            buttonOption: {
                                deleteOption: true,
                            },
                        }}
                    />
                    <StyledLabelRadioInputWrapper>
                        <label>4대포험 가입여부</label>
                        <div className="select_radio">
                            <label>
                                <input type="radio" name="insurance" />
                                미가입
                            </label>
                            <label>
                                <input type="radio" name="insurance" />
                                가입
                            </label>
                        </div>
                    </StyledLabelRadioInputWrapper>
                    <OptionInput
                        type="text"
                        name="member_created_at"
                        id="member_created_at"
                        value={formatDateTime(value.member_created_at)}
                        label="등록일시"
                        readOnly
                    />
                    <OptionInput
                        type="text"
                        name="member_updated_at"
                        id="member_updated_at"
                        value={formatDateTime(value.member_updated_at)}
                        label="수정일시"
                        readOnly
                    />
                    <OptionInput
                        type="text"
                        name="pay_day"
                        id="pay_day"
                        value={value.pay_day}
                        onChange={handle}
                        placeholder="숫자 2자리만 입력해 주세요."
                        label="급여일(매월)"
                        options={{
                            buttonOption: {
                                deleteOption: true,
                            },
                        }}
                    />
                    <OptionInput
                        type="text"
                        name="account_bank_code"
                        id="account_bank_code"
                        value={value.account_bank_code}
                        onChange={handle}
                        placeholder="선택하세요."
                        label="계좌은행"
                    />
                    <OptionInput
                        type="text"
                        name="account_holder"
                        id="account_holder"
                        value={value.account_holder}
                        onChange={handle}
                        placeholder="계좌주를 입력해 주세요."
                        label="계좌주"
                    />
                    <OptionInput
                        type="text"
                        name="account_number"
                        id="account_number"
                        value={value.account_number}
                        onChange={handle}
                        placeholder="계좌번호를 입력해 주세요."
                        label="계좌번호"
                    />
                    <ConsentCheckBox />
                    <FixedButton type="submit">수정</FixedButton>
                    <DatePickerOverlay
                        overlayState={overlayState}
                        setOverlayState={setOverlayState}
                        hideOverlay={hideOverlay}
                    />
                </Form>
            </AppBaseWrapper>
        </AppLayout>
    );
};

export default StaffInfoChangeInput;
const Form = styled(StyledBaseInputWrapper)`
    .pay_type {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
    }
`;
