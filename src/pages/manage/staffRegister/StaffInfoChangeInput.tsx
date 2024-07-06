import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import AppLayout from "@/components/layout/AppLayout";

import { ChangeEvent, FormEvent, useState } from "react";
import ConsentCheckBox from "@/components/checkbox/ConsentCheckBox";
import FixedButton from "@/components/button/FixedButton";
import OptionInput from "@/components/input/OptionInput";

import {
    StyledBaseInputWrapper,
    StyledLabelRadioInputWrapper,
} from "@/components/styles/InputStyle";

import SelectInput from "@/components/input/SelectInput";
import Input from "@/components/input/Input";

const StaffInfoChangeInput = () => {
    const [value, setValue] = useState({
        username: "mr.hong",
        name: "홍길동",
        cellphone_number: "010-1234-5678",
        work_type: "직원",
        pay_type: "월급",
        pay: "2,000,000",
        work_start_date: "2022.03.14",
        work_exit_date: "",
        insurance: "",
        member_created_at: "2023.02.24 14:33:23",
        member_updated_at: "2023.02.24 14:33:23",
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
                        disabled
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
                                deleteOption: value.nameValid,
                            },
                        }}
                    />
                    <OptionInput
                        type="text"
                        name="cellphone_number"
                        id="cellphone_number"
                        value={value.cellphone_number}
                        label="휴대폰 번호"
                        disabled
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
                        <Input value={value.pay} name="pay" type="text" onChange={handle} />
                    </div>
                    <OptionInput
                        type="text"
                        name="work_start_date"
                        id="work_start_date"
                        value={value.work_start_date}
                        label="근무시작일"
                        disabled
                    />
                    <OptionInput
                        type="text"
                        name="work_exit_date"
                        id="work_exit_date"
                        value={value.work_exit_date}
                        onChange={handle}
                        placeholder="퇴사일 입력 시 퇴사처리됩니다."
                        label="퇴사일"
                        options={{
                            buttonOption: {
                                deleteOption: true,
                            },
                        }}
                    />
                    <StyledSelectRadio>
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
                    </StyledSelectRadio>
                    <OptionInput
                        type="text"
                        name="member_created_at"
                        id="member_created_at"
                        value={value.member_created_at}
                        label="등록일시"
                        disabled
                    />
                    <OptionInput
                        type="text"
                        name="member_updated_at"
                        id="member_updated_at"
                        value={value.member_updated_at}
                        label="수정일시"
                        disabled
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
const StyledSelectRadio = styled(StyledLabelRadioInputWrapper)``;
