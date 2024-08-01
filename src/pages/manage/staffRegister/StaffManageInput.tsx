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
import Button from "@/components/button/Button";
import SelectInput from "@/components/input/SelectInput";
import Input from "@/components/input/Input";
import DynamicModal from "@/components/modal/DynamicModal";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";
import DatePickerOverlay from "@/components/overlay/DatePickerOverlay";
import { validateId, validatePassword } from "@/utils/inputVerify";
import { IManageStaffRegisterInput } from "@/interface/manage/staff/manageStaffRegister";
import { parseDate2, formatNewDate } from "@/utils/formatDateTime";
import { registerIdverify } from "@/apis/auth/register";

import { StyledBaseInputWrapper, StyledLabelRadioInputWrapper } from "@/style/InputStyle";

const StaffManageInput = () => {
    const [value, setValue] = useState<IManageStaffRegisterInput>({
        username: "",
        password: "",
        passwordVerify: "",
        name: "",
        cellphone_number: "",
        work_type: "",
        pay_type: "",
        pay: 2000000,
        work_start_date: "",
        pay_day: "",
        account_bank_code: "",
        account_holder: "",
        account_number: "",
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

            if (name === "password") {
                const isPasswordValid = validatePassword(inputValue);
                newValue.passwordMatch = isPasswordValid && inputValue === prevState.passwordVerify;
            } else if (name === "passwordVerify") {
                newValue.passwordMatch = prevState.password === inputValue;
            }

            if (name === "username") {
                const isIdValid = validateId(inputValue);
                newValue.usernameValid = isIdValid;
                newValue.idChecked = false;
            }

            if (name === "name") {
                newValue.nameValid = inputValue.length >= 1;
            }

            return newValue;
        });
    };

    const handleCheckId = async () => {
        try {
            const response = await registerIdverify({ username: value.username });
            console.log(response);
            setValue((prevState) => ({
                ...prevState,
                idChecked: true,
            }));
        } catch (error) {
            console.error(error);
            setValue((prevState) => ({
                ...prevState,
                idChecked: false,
            }));
        }
    };

    //선택 이메일 함수
    const handleSelectDomain = (domain: string, field: string) => {
        setValue((prevState) => ({
            ...prevState,
            [field]: domain,
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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
        <AppLayout props={{ header: <AppBackHeader title="직원등록" /> }}>
            <AppBaseWrapper title={`소소상점과 함께\n더 즐거운 사업을 시작해 볼까요?`}>
                <Form onSubmit={handleSubmit}>
                    <OptionInput
                        type="text"
                        name="username"
                        value={value.username}
                        onChange={handle}
                        placeholder="6자 이상 영문+숫자 포함"
                        label="아이디"
                        id="username"
                        options={{
                            buttonOption: {
                                checkedOption: value.idChecked,
                            },
                        }}
                    >
                        <Button
                            size="sub"
                            disabled={!value.usernameValid}
                            onClick={handleCheckId}
                            type="button"
                        >
                            중복확인
                        </Button>
                    </OptionInput>
                    <OptionInput
                        type="password"
                        name="password"
                        id="password"
                        value={value.password}
                        onChange={handle}
                        placeholder="8~20자리 영문+숫자+특수문자 포함"
                        maxLength={20}
                        label="비밀번호"
                        options={{
                            buttonOption: {
                                passwordOption: true,
                                checkedOption: validatePassword(value.password),
                            },
                        }}
                    />
                    <OptionInput
                        type="password"
                        name="passwordVerify"
                        id="passwordVerify"
                        value={value.passwordVerify}
                        onChange={handle}
                        placeholder="비밀번호를 한번 더 입력해 주세요."
                        maxLength={20}
                        label="비밀번호확인"
                        options={{
                            buttonOption: {
                                passwordOption: true,
                                checkedOption: value.passwordMatch,
                            },
                        }}
                    />
                    <OptionInput
                        type="text"
                        name="name"
                        id="name"
                        value={value.name}
                        onChange={handle}
                        placeholder="예) 김소소"
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
                        onChange={handle}
                        placeholder="예) 010-1234-1234"
                        label="휴대폰 번호"
                        options={{
                            buttonOption: {
                                checkedOption: false,
                                deleteOption: false,
                            },
                        }}
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
                    <FixedButton type="submit" onClick={openModal}>
                        등록
                    </FixedButton>

                    <DynamicModal open={isOpen} close={closeModal}>
                        <ConfirmationModal
                            title="등록 완료"
                            message={`${value.name}직원\n신규등록 처리되었습니다.`}
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

export default StaffManageInput;
const Form = styled(StyledBaseInputWrapper)`
    .pay_type {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
    }
`;
