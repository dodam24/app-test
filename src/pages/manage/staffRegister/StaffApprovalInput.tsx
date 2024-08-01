import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useModal from "@/hooks/useModal";
import useDateOverlay from "@/hooks/useDateOverlay";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import AppLayout from "@/components/layout/AppLayout";
import ConsentCheckBox from "@/components/checkbox/ConsentCheckBox";
import FixedButton from "@/components/button/FixedButton";
import OptionInput from "@/components/input/OptionInput";
import SelectInput from "@/components/input/SelectInput";
import Input from "@/components/input/Input";
import DynamicModal from "@/components/modal/DynamicModal";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";
import DatePickerOverlay from "@/components/overlay/DatePickerOverlay";

import { formatNewDate, parseDate2 } from "@/utils/formatDateTime";

import { IManageStaffApprovalInput } from "@/interface/manage/staff/manageStaffRegister";

import { StyledBaseInputWrapper, StyledLabelRadioInputWrapper } from "@/style/InputStyle";

const StaffApprovalInput = () => {
    const [value, setValue] = useState<IManageStaffApprovalInput>({
        username: "sunflower",
        name: "오태식",
        cellphone_number: "010-1234-5678",
        work_type: "",
        pay_type: "",
        pay: 2000000,
        work_start_date: "",
        pay_day: "",
        account_bank_code: "우리은행",
        account_holder: "홍길동",
        account_number: "100200300400500",
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

    //모달 함수
    const { isOpen, openModal, closeModal } = useModal();
    const navigate = useNavigate();
    const confirmHandler = () => {
        closeModal();
        navigate("/manage/staff/register", { replace: true });
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
                work_start_date: overlayState.startDate ?? prevValue.work_start_date,
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
        <AppLayout props={{ header: <AppBackHeader title="직원승인" /> }}>
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
                        label="이름"
                        readOnly
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
                            placeholder="숫자만 입력하세요."
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
                        value={value.work_start_date ? parseDate2(value.work_start_date) : ""}
                        onChange={handle}
                        onClick={handleDateChange}
                        placeholder="근무시작일을 입력해 주세요."
                        label="근무시작일"
                        readOnly="basic"
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
                        name="pay_day"
                        id="pay_day"
                        value={value.pay_day}
                        onChange={handle}
                        placeholder="숫자 2자리만 입력해 주세요."
                        label="급여일(매월)"
                        maxLength={2}
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
                        readOnly
                        label="계좌은행"
                    />
                    <OptionInput
                        type="text"
                        name="account_holder"
                        id="account_holder"
                        value={value.account_holder}
                        readOnly
                        label="계좌주"
                    />
                    <OptionInput
                        type="text"
                        name="account_number"
                        id="account_number"
                        value={value.account_number}
                        readOnly
                        label="계좌번호"
                    />
                    <ConsentCheckBox />
                    <FixedButton type="submit" onClick={openModal}>
                        승인
                    </FixedButton>
                    <DynamicModal open={isOpen} close={closeModal}>
                        <ConfirmationModal
                            title="승인 완료"
                            message={`${value.name} 직원\n회원가입 승인 처리되었습니다.`}
                            buttonText="확인"
                            close={confirmHandler}
                        />
                    </DynamicModal>
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

export default StaffApprovalInput;
const Form = styled(StyledBaseInputWrapper)`
    .pay_type {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
    }
`;
