import AppBackHeader from "@/components/header/AppBackHeader";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import AppLayout from "@/components/layout/AppLayout";
import { useState, useCallback } from "react";
import InquiryTextField from "@/pages/more/component/InquiryTextField";
import { Styles } from "@/style/Styles";
import styled from "styled-components";
import { ArrowDownIcon } from "@/pages/insurance/_images/insurance";
import CheckboxOff from "@/assets/images/icons/icon_delete_checkbox_off_c.png";
import CheckboxOn from "@/assets/images/icons/icon_delete_checkbox_on_c.png";
import CheckedIcon from "@/assets/images/icons/icon_delete_checked_c.png";
import EnabledButton from "@/components/button/EnabledButton";

// data
const terminatedServiceList = ["결제 정보", "매입/매출 정보", "직원 정보"];

const selectList = [
    { value: "default", name: "탈퇴 이유 선택" },
    { value: "security", name: "보안 불안" },
    { value: "inconvenience", name: "앱 불편" },
    { value: "push", name: "푸시알림과다" },
    { value: "noUse", name: "앱 미사용" },
    { value: "etc", name: "기타" },
];

const Delete = () => {
    // checkbox
    const [checkedServiceList, setCheckedServiceList] = useState<string[]>([]);
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleCheckedService = (value: string, isChecked: boolean) => {
        if (isChecked) {
            setCheckedServiceList((prev) => [...prev, value]);
            return;
        }
        if (!isChecked && checkedServiceList.includes(value)) {
            setCheckedServiceList(checkedServiceList.filter((item) => item !== value));
            return;
        }
        return;
    };

    const handleOnChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
        setIsChecked(!isChecked);
        handleCheckedService(value, e.target.checked);
        console.log(checkedServiceList);
    };

    const handleOnSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }, []);

    // select box
    const [selectedValue, setSelectedValue] = useState("탈퇴 이유 선택");
    const [showOptions, setShowOptions] = useState(false);

    const handleOnChangeSelectValue = (e: React.MouseEvent<HTMLElement>) => {
        const { innerText } = e.currentTarget;
        setSelectedValue(innerText);
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="회원탈퇴" /> }}>
            <AppBaseWrapper title={`탈퇴 전, 해지되는 서비스를\n확인해주세요.`}>
                <form onSubmit={handleOnSubmit}>
                    <StyledServiceConfirmationContainer>
                        {terminatedServiceList.map((item, index) => (
                            <li key={index}>
                                <label htmlFor={`service_${index}`}>
                                    {item}
                                    <input
                                        type="checkbox"
                                        id={`service_${index}`}
                                        checked={checkedServiceList.includes(item)}
                                        onChange={(e) => handleOnChangeCheckbox(e, item)}
                                    />
                                </label>
                            </li>
                        ))}
                    </StyledServiceConfirmationContainer>
                </form>
                <StyledServiceConfirmationMessage>
                    위 결제정보, 매입매출 정보, 직원 정보 서비스는 회원 탈퇴시
                    <br />
                    <span className="message_link">3년간 보관 후 파기됩니다.</span>
                </StyledServiceConfirmationMessage>
            </AppBaseWrapper>

            <AppBaseWrapper title="탈퇴하는 이유를 선택해주세요.">
                <StyledSelectBoxContainer>
                    <StyledSelectBox onClick={() => setShowOptions((prev) => !prev)}>
                        <StyledLabel>{selectedValue}</StyledLabel>
                        <StyledSelectOptions show={showOptions}>
                            {selectList.map((item) => (
                                <StyledOption
                                    key={item.value}
                                    value={item.value}
                                    onClick={handleOnChangeSelectValue}
                                >
                                    {item.name}
                                </StyledOption>
                            ))}
                        </StyledSelectOptions>
                    </StyledSelectBox>
                    {selectedValue === "기타" && (
                        <InquiryTextField
                            maxLength={300}
                            placeholder="탈퇴 이유 직접 입력"
                            isTextArea
                        />
                    )}
                </StyledSelectBoxContainer>
            </AppBaseWrapper>

            <StyleButtonContainer>
                <EnabledButton title="취소" className="cancel_btn"></EnabledButton>
                <EnabledButton
                    title="탈퇴하기"
                    className="withdraw_btn"
                    // disabled={selectedValue === "기타" && }
                ></EnabledButton>
            </StyleButtonContainer>
        </AppLayout>
    );
};

export default Delete;

const StyledServiceConfirmationMessage = styled.p`
    margin-top: 0.8rem;
    margin-bottom: calc(3rem - 1rem);
    color: ${Styles.colors.natural60};
    font-size: ${Styles.font.size.fontsize13};
    font-weight: ${Styles.font.weight.regular};
    & .message_link {
        text-decoration-line: underline;
    }
`;
const StyledServiceConfirmationContainer = styled.ul`
    display: flex;
    padding: 1.2rem 0;
    flex-direction: column;
    gap: 1.2rem;
    border-radius: 0.4rem;
    border: 0.05rem solid ${Styles.colors.natural10};
    margin-top: 1.5rem;

    li {
        padding: 0 0.8rem;
    }
    label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: ${Styles.colors.natural90};
        text-align: right;
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
    }
    input {
        width: 1rem;
        height: 1rem;
        background: url(${CheckboxOff}) no-repeat center;
        background-size: 1rem 1rem;
        appearance: none;
        &:checked {
            background: url(${CheckboxOn}) no-repeat center;
            background-size: 1rem 1rem;
        }
    }
`;

const StyledSelectBoxContainer = styled.section`
    margin: 0.8rem 0;
`;

// select box
interface SelectOptionsProps {
    show: boolean;
}
const StyledSelectBox = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 2.3rem;
    padding: 0.55rem 0.8rem;
    gap: 0.4rem;
    border-radius: 0.4rem;
    background-color: ${Styles.colors.systemBackground};
    justify-content: space-between;
    color: ${Styles.colors.natural90};
    font-size: ${Styles.font.size.fontsize15};
    font-weight: ${Styles.font.weight.regular};
    appearance: none;
    background: ${Styles.colors.systemBackground} url(${ArrowDownIcon}) no-repeat right 0.8rem
        center;
    background-size: 1.2rem 1.2rem;
    border: none;
    cursor: pointer;
    &:focus {
        border: none;
        outline: none;
    }
`;
const StyledLabel = styled.label`
    color: ${Styles.colors.natural90};
    font-size: ${Styles.font.size.fontsize15};
    font-weight: ${Styles.font.weight.regular};
`;
const StyledSelectOptions = styled.ul<SelectOptionsProps>`
    display: ${(props) => (props.show ? "block" : "none")};
    position: absolute;
    bottom: 0;
    padding: 0.5rem 1rem 1.5rem 1rem;
    flex-direction: column;
    border-radius: 0.9rem 0.9rem 0 0;
    position: absolute;
    left: 0;
    width: 100%;
    z-index: 999;
    overflow: hidden;
    max-height: ${(props) => (props.show ? "none" : "0")};
    border-radius: 0.9rem 0.9rem 0 0;
    background-color: ${Styles.colors.systemWhite};
    color: ${Styles.colors.natural60};
    font-size: ${Styles.font.size.fontsize15};
    font-weight: ${Styles.font.weight.regular};
`;
const StyledOption = styled.li`
    height: 2.6rem;
    transition: background-color 3s ease-in;
    display: flex;
    align-items: center;
    &:hover {
        background-color: ${Styles.colors.primary10};
        transition: background-color 3s ease-in;
        border-radius: 0.6rem;
        color: ${Styles.colors.systemSuccess};
        background: url(${CheckedIcon}) no-repeat right 0.8rem center;
        background-size: 1.2rem 1.2rem;
    }
`;
const StyleButtonContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 0.65rem;
    position: absolute;
    bottom: 1rem;
    padding: 0 1rem;
    .cancel_btn {
        width: 50%;
        position: static;
        transform: translateX(0);
        background-color: ${Styles.colors.natural00};
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.semibold};
    }
    .withdraw_btn {
        width: 50%;
        position: static;
        transform: translateX(0);
        background-color: ${Styles.colors.systemError};
    }
`;
