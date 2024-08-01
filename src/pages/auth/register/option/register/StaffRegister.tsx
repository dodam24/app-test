import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import useModal from "@/hooks/useModal";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import PhoneAuthInput from "@/components/input/PhoneAuthInput";
import ConsentCheckBox from "@/components/checkbox/ConsentCheckBox";
import DynamicModal from "@/components/modal/DynamicModal";
import ConfirmationModal from "@/components/modal/ui/ConfirmationModal";
import FixedButton from "@/components/button/FixedButton";
import OptionInput from "@/components/input/OptionInput";
import Button from "@/components/button/Button";
import SelectInput from "@/components/input/SelectInput";

import { register, registerIdverify } from "@/apis/auth/register";
import { IRegisterValues } from "@/interface/auth/register/register";
import { useInputHandler } from "@/utils/baseVerify";

import { StyledBaseInputWrapper, StyledEmailWrapper } from "@/style/InputStyle";

const StaffRegister = () => {
    const { values, error, handleInputChange, setValues, setError, validations, setValidations } =
        useInputHandler<IRegisterValues>({
            username: "",
            password: "",
            passwordVerify: "",
            name: "",
            cellphone_number: "",
            verificationCode: "",
            email: "",
            email_id: "",
            selectDomain: "",
            company_id: "",
            user_type: "EMPLOYER",
            account_holder: "",
            account_number: "",
            account_bank_code: "",
            required_terms_accepted: false,
            selected_terms_accepted_list: [] as string[],
        });

    const handlePhoneChange = (phone: string) => {
        setValues((prevValues) => ({
            ...prevValues,
            cellphone_number: phone,
        }));
    };

    const handleVerificationCodeChange = (code: string) => {
        setValues((prevValues) => ({
            ...prevValues,
            verificationCode: code,
        }));
    };

    const handleCheckId = async () => {
        try {
            const response = await registerIdverify({ username: values.username });
            console.log(response);
            setValidations((prevValidations) => ({
                ...prevValidations,
                idChecked: false,
            }));
        } catch (error) {
            console.error(error);
            setValidations((prevValidations) => ({
                ...prevValidations,
                idChecked: true,
            }));
        }
    };

    const isFormValid = () => {
        return (
            validations.usernameValid &&
            validations.passwordMatch &&
            validations.nameValid &&
            values.cellphone_number !== "" &&
            values.verificationCode !== "" &&
            values.required_terms_accepted &&
            values.selected_terms_accepted_list.length > 0 &&
            values.account_holder !== "" &&
            values.account_number !== "" &&
            values.account_bank_code !== ""
        );
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!isFormValid()) {
            setError("모든 필드를 올바르게 작성해주세요.");
            return;
        }

        try {
            const response = await register(values);
            // api 연결 후 테스트 필요
            console.log(response);

            openModal();
        } catch (error) {
            setError("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
            console.error("회원가입 오류:", error);
        }
    };

    //이메일 핸들러
    const handleSelectDomain = (domain: string) => {
        const updatedEmail = `${values.email_id}@${domain}`;
        setValues((prevValues) => ({
            ...prevValues,
            email: updatedEmail,
            email_id: prevValues.email_id,
            selectDomain: domain,
        }));
    };

    // 모달 함수
    const { isOpen, openModal, closeModal } = useModal();
    const navigate = useNavigate();
    const confirmHandler = () => {
        closeModal();
        navigate("/login", { replace: true });
    };
    // 체크박스 핸들러
    const handleConsentChange = (
        requiredTermsAccepted: boolean,
        selectedTermsAcceptedList: string[],
    ) => {
        setValues((prevValues) => ({
            ...prevValues,
            required_terms_accepted: requiredTermsAccepted,
            selected_terms_accepted_list: selectedTermsAcceptedList,
        }));
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="회원가입" /> }}>
            <AppBaseWrapper title={`소소상점과 함께\n더 즐거운 사업을 시작해 볼까요?`}>
                <StyledBaseInputWrapper onSubmit={handleSubmit}>
                    <OptionInput
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={handleInputChange}
                        placeholder="6자 이상 영문+숫자 포함"
                        label="아이디"
                        id="username"
                        options={{
                            buttonOption: {
                                checkedOption: validations.idChecked,
                            },
                        }}
                    >
                        <Button
                            size="sub"
                            disabled={!validations.usernameValid}
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
                        value={values.password}
                        onChange={handleInputChange}
                        placeholder="8~20자리 영문+숫자+특수문자 포함"
                        maxLength={20}
                        label="비밀번호"
                        options={{
                            buttonOption: {
                                passwordOption: true,
                                checkedOption: validations.passwordValid,
                            },
                            error: {
                                errorStatus: !!error,
                                errorMessage: error,
                            },
                        }}
                    />
                    <OptionInput
                        type="password"
                        name="passwordVerify"
                        id="passwordVerify"
                        value={values.passwordVerify}
                        onChange={handleInputChange}
                        placeholder="비밀번호를 한번 더 입력해 주세요."
                        maxLength={20}
                        label="비밀번호확인"
                        options={{
                            buttonOption: {
                                passwordOption: true,
                                checkedOption: validations.passwordMatch,
                            },
                        }}
                    />
                    <OptionInput
                        type="text"
                        name="name"
                        id="name"
                        value={values.name}
                        onChange={handleInputChange}
                        placeholder="예) 김소소"
                        label="이름"
                        options={{
                            buttonOption: {
                                checkedOption: validations.nameValid,
                                deleteOption: true,
                            },
                        }}
                    />
                    <PhoneAuthInput
                        onPhoneChange={handlePhoneChange}
                        onVerificationCodeChange={handleVerificationCodeChange}
                    />

                    <StyledEmailWrapper>
                        <OptionInput
                            type="text"
                            name="email_id"
                            id="email_id"
                            value={values.email_id}
                            onChange={handleInputChange}
                            placeholder="이메일 아이디"
                            label="이메일"
                        />
                        <span>@</span>
                        <SelectInput
                            options={[
                                "naver.com",
                                "gmail.com",
                                "nate.com",
                                "daum.net",
                                "icloud.com",
                                "직접입력",
                            ]}
                            onSelect={handleSelectDomain}
                            placeholder="선택하세요"
                        />
                    </StyledEmailWrapper>

                    <OptionInput
                        type="text"
                        name="account_bank_code"
                        id="account_bank_code"
                        value={values.account_bank_code}
                        onChange={handleInputChange}
                        placeholder="선택하세요."
                        label="계좌은행"
                    />
                    <OptionInput
                        type="text"
                        name="account_holder"
                        id="account_holder"
                        value={values.account_holder}
                        onChange={handleInputChange}
                        placeholder="계좌주를 입력해 주세요."
                        label="계좌주"
                        options={{
                            buttonOption: {
                                checkedOption: false,
                                deleteOption: true,
                            },
                        }}
                    />
                    <OptionInput
                        type="text"
                        name="account_number"
                        id="account_number"
                        value={values.account_number}
                        onChange={handleInputChange}
                        placeholder="계좌번호를 입력해 주세요."
                        label="계좌번호"
                        options={{
                            buttonOption: {
                                checkedOption: false,
                                deleteOption: true,
                            },
                        }}
                    />

                    <ConsentCheckBox onChange={handleConsentChange} />
                    <FixedButton type="submit" onClick={openModal}>
                        회원가입 신청
                    </FixedButton>
                    <DynamicModal open={isOpen} close={closeModal}>
                        <ConfirmationModal
                            title="회원가입 완료"
                            message={`회원가입이 완료되었습니다.\n로그인 페이지로 이동합니다.`}
                            buttonText="확인"
                            close={confirmHandler}
                        />
                    </DynamicModal>
                </StyledBaseInputWrapper>
            </AppBaseWrapper>
        </AppLayout>
    );
};

export default StaffRegister;
