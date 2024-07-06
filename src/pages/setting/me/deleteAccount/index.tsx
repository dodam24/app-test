import AppBackHeader from "@/components/header/AppBackHeader";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import AppLayout from "@/components/layout/AppLayout";
import { useState, useCallback, useEffect } from "react";
import InquiryTextField from "@/pages/more/component/InquiryTextField";
import { Styles } from "@/style/Styles";
import styled from "styled-components";
import { ArrowDownIcon } from "@/pages/insurance/_images/insurance";
import CheckboxOff from "@/assets/images/icons/icon_delete_checkbox_off_c.png";
import CheckboxOn from "@/assets/images/icons/icon_delete_checkbox_on_c.png";
import CheckedIcon from "@/assets/images/icons/icon_delete_checked_c.png";
import Button from "@/components/button/Button";

interface DeleteAccountProps {
    agreed_to_payment_cancellation: boolean;
    agreed_to_purchase_sales_cancellation: boolean;
    agreed_to_employee_cancellation: boolean;
    reason: DeleteAccountReason;
    reason_detail: string;
    accepted_all: boolean;
}

enum DeleteAccountReason {
    기타 = 0,
    보안불안 = 1,
    앱불편 = 2,
    푸시알림과다 = 3,
    앱미사용 = 4,
}

// data
const terminatedServiceList = ["결제 정보", "매입/매출 정보", "직원 정보"];

const DeleteAccount = () => {
    const [deleteAccountData, setDeleteAccountData] = useState<DeleteAccountProps>({
        agreed_to_payment_cancellation: true,
        agreed_to_purchase_sales_cancellation: true,
        agreed_to_employee_cancellation: true,
        reason: DeleteAccountReason.기타,
        reason_detail: "개인 정보 유출 우려",
        accepted_all: false,
    });

    useEffect(() => {
        setDeleteAccountData({
            ...deleteAccountData,
            ...{
                agreed_to_payment_cancellation: true,
                agreed_to_purchase_sales_cancellation: true,
                agreed_to_employee_cancellation: true,
                reason: DeleteAccountReason.기타,
                reason_detail: "개인 정보 유출 우려",
                accepted_all: false,
            },
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // checkbox
    const [checkedServiceList, setCheckedServiceList] = useState<string[]>([]);
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleCheckedService = (value: string, isChecked: boolean) => {
        if (isChecked) {
            setCheckedServiceList([...checkedServiceList, value]);
        }
        if (!isChecked && checkedServiceList.includes(value)) {
            setCheckedServiceList(checkedServiceList.filter((item) => item !== value));
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

    // bottom pop up (모달 useState 합치기)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleSelectBoxClick = () => {
        setIsModalOpen(true);
    };
    // 선택 값 반영
    const [selectedReason, setSelectedReason] = useState<string>("탈퇴 이유 선택");

    const handleSelectReason = (reason: string) => {
        setSelectedReason(reason);
        setIsModalOpen(false);
    };

    if (isModalOpen) {
        setTimeout(() => {
            document.body.style.overflow = "hidden";
        }, 100);
    } else {
        document.body.style.overflow = "unset";
    }

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
                    <StyledSelectBox>
                        <button onClick={handleSelectBoxClick}>
                            <p>{selectedReason}</p>
                        </button>
                    </StyledSelectBox>

                    {/* {isModalOpen && ( */}
                    <StyledOverlay
                        $isModalOpen={isModalOpen}
                        onClick={() => setIsModalOpen(false)}
                    />
                    <StyledSelectModal $isModalOpen={isModalOpen}>
                        <h3>탈퇴 이유 선택</h3>
                        <ul>
                            <li onClick={() => handleSelectReason("보안 불안")}>보안 불안</li>
                            <li onClick={() => handleSelectReason("앱 불편")}>앱 불편</li>
                            <li onClick={() => handleSelectReason("푸시알림과다")}>푸시알림과다</li>
                            <li onClick={() => handleSelectReason("앱미사용")}>앱미사용</li>
                            <li onClick={() => handleSelectReason("기타")}>기타</li>
                        </ul>
                    </StyledSelectModal>
                    {/* )} */}

                    {selectedReason === "기타" && (
                        <InquiryTextField
                            maxLength={300}
                            placeholder="탈퇴 이유 직접 입력"
                            isTextArea
                        />
                    )}
                </StyledSelectBoxContainer>
            </AppBaseWrapper>

            <StyleButtonContainer>
                <Button size="sub" className="cancel_btn">
                    취소
                </Button>
                <Button size="sub" className="delete_account_btn" disabled>
                    탈퇴하기
                </Button>
            </StyleButtonContainer>
        </AppLayout>
    );
};

export default DeleteAccount;

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

    & > button {
        width: 100%;
        height: 2.3rem;
        display: flex;
        align-items: center;
    }
`;

const StyledOverlay = styled.div<{ $isModalOpen: boolean }>`
    /* display: ${({ $isModalOpen }) => ($isModalOpen ? "block" : "none")}; */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: 9999;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    opacity: ${({ $isModalOpen }) => ($isModalOpen ? "1" : "0")};
    visibility: ${({ $isModalOpen }) => ($isModalOpen ? "visible" : "hidden")};
`;
const StyledSelectModal = styled.div<{ $isModalOpen: boolean }>`
    display: flex;
    position: fixed;
    left: 0;
    bottom: ${({ $isModalOpen }) => ($isModalOpen ? "0" : "-100%")};
    padding: 0.5rem 1rem 1.5rem 1rem;
    flex-direction: column;
    border-radius: 0.9rem 0.9rem 0 0;
    width: 100%;
    z-index: 9999;
    overflow: hidden;
    background-color: ${Styles.colors.systemWhite};
    transition:
        bottom 0.3s,
        opacity 0.3s;
    opacity: ${({ $isModalOpen }) => ($isModalOpen ? "1" : "0")};

    h3 {
        display: flex;
        align-items: center;
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize16};
        font-weight: ${Styles.font.weight.medium};
        height: 2.6rem;
    }
    ul > li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
        display: flex;
        padding: 0 0.7rem;
        height: 2.6rem;

        &:hover {
            background-color: ${Styles.colors.primary10};
            border-radius: 0.6rem;
            color: ${Styles.colors.systemSuccess};
            &::after {
                content: "";
                background: url(${CheckedIcon}) no-repeat;
                background-size: 1.2rem 1.2rem;
                width: 1.2rem;
                height: 1.2rem;
                margin-left: 0.8rem;
            }
        }
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
    .delete_account_btn {
        width: 50%;
        position: static;
        transform: translateX(0);
        background-color: ${Styles.colors.systemError};
    }
`;
