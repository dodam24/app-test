import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import { useState } from "react";
import { Styles } from "@/style/Styles";
import styled from "styled-components";
import Button from "@/components/button/Button";
import DeleteAccountService from "@/pages/setting/me/deleteAccount/DeleteAccountService";
import { DeleteAccountProps } from "@/interface/setting/DeleteAccount";
import DeleteAccountReason from "@/pages/setting/me/deleteAccount/DeleteAccountReason";

const DeleteAccount = () => {
    const [total, setTotal] = useState<DeleteAccountProps>({
        agreed_to_payment_cancellation: false,
        agreed_to_purchase_sales_cancellation: false,
        agreed_to_employee_cancellation: false,
        reason: 0,
        reason_detail: "",
        accepted_all: false,
    });

    // 버튼 활성화 조건 (모든 값이 다 입력됐을 때)
    const isButtonEnabled = () => {
        if (
            total.agreed_to_payment_cancellation &&
            total.agreed_to_purchase_sales_cancellation &&
            total.agreed_to_employee_cancellation &&
            total.reason
        ) {
            return true;
        } else if (
            total.agreed_to_payment_cancellation &&
            total.agreed_to_purchase_sales_cancellation &&
            total.agreed_to_employee_cancellation &&
            total.reason === 0 &&
            total.reason_detail !== ""
        ) {
            return true;
        }
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="회원탈퇴" /> }}>
            <DeleteAccountService setTotal={setTotal} />
            <DeleteAccountReason setTotal={setTotal} />
            <StyleButtonContainer>
                <Button size="sub" className="cancel_btn">
                    취소
                </Button>
                <Button
                    size="sub"
                    className="delete_account_btn"
                    disabled={!isButtonEnabled()}
                    onClick={() => alert("탈퇴가 완료되었습니다.")}
                >
                    탈퇴하기
                </Button>
            </StyleButtonContainer>
        </AppLayout>
    );
};

export default DeleteAccount;

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
        &:disabled {
            background-color: #fcaeab;
        }
    }
`;
