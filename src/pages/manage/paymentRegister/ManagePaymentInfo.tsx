import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, FormEvent } from "react";
import { paymentListData } from "@/pages/manage/paymentRegister/_data/ManagePaymetData";
import OptionInput from "@/components/input/OptionInput";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import FixedButton from "@/components/button/FixedButton";
import styled from "styled-components";
import { Styles } from "@/style/Styles";

interface Payment {
    id: number;
    name: string;
    paymentType: string;
    expectedPayment: string;
    actualPayment: string;
    startDate: string;
    endDate: string;
}

const ManagePaymentInfo = () => {
    const { id = "" } = useParams();
    const [payment, setPayment] = useState<Payment | undefined>(undefined);

    useEffect(() => {
        const selectedPayment = paymentListData.find((item) => item.id === parseInt(id));
        if (selectedPayment) {
            setPayment(selectedPayment);
        }
    }, [id]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPayment((prevPayment) => ({
            ...prevPayment!,
            [name]: value,
        }));
    };

    const handleUpdatePayment = () => {
        console.log("지급 정보가 수정되었습니다:", payment);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="지급등록 수정" /> }}>
            {payment ? (
                <AppBaseWrapper>
                    <StyledManagePayListWrapper onSubmit={handleSubmit}>
                        <OptionInput
                            type="text"
                            name="name"
                            id="name"
                            value={payment.name}
                            label="직원"
                            disabled
                        />
                        <StyledDateContainer>
                            <OptionInput
                                type="text"
                                name="startDate"
                                id="startDate"
                                value={payment.startDate}
                                label="근무기간"
                                onChange={handleInputChange}
                            />
                            <span>-</span>
                            <OptionInput
                                type="text"
                                name="endDate"
                                id="endDate"
                                value={payment.endDate}
                                onChange={handleInputChange}
                            />
                        </StyledDateContainer>
                        <OptionInput
                            type="text"
                            name="paymentType"
                            id="paymentType"
                            value={payment.paymentType}
                            label="급여유형"
                            disabled
                        />
                        <OptionInput
                            type="text"
                            name="expectedPayment"
                            id="expectedPayment"
                            value={payment.expectedPayment}
                            label="예상급여"
                            disabled
                        />
                        <OptionInput
                            type="text"
                            name="actualPayment"
                            id="actualPayment"
                            value={payment.actualPayment}
                            label="지급 금액"
                            onChange={handleInputChange}
                        />

                        <Link to="/manage/payment/register">
                            <FixedButton type="button" onClick={handleUpdatePayment}>
                                수정
                            </FixedButton>
                        </Link>
                    </StyledManagePayListWrapper>
                </AppBaseWrapper>
            ) : (
                <p>Loading...</p>
            )}
        </AppLayout>
    );
};

export default ManagePaymentInfo;

const StyledManagePayListWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-bottom: 4rem;
`;

const StyledDateContainer = styled.div`
    display: flex;
    align-items: end;
    span {
        margin-bottom: 1rem;
        color: ${Styles.colors.natural40};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
    }
`;
