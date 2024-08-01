import { useState, useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import OptionInput from "@/components/input/OptionInput";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import FixedButton from "@/components/button/FixedButton";
import Input from "@/components/input/Input";
import useDateOverlay from "@/hooks/useDateOverlay";
import DatePickerOverlay from "@/components/overlay/DatePickerOverlay";
import { parseDate2 } from "@/utils/formatDateTime";
import { IManagePaymentInfo } from "@/interface/manage/payment/managePaymentRegister";

import { Styles } from "@/style/Styles";

const ManagePaymentInfo = () => {
    const { overlayState, setOverlayState, hideOverlay } = useDateOverlay();

    const [payment, setPayment] = useState<IManagePaymentInfo>({
        id: 1,
        name: "홍길동",
        paymentType: "월급",
        expectedPayment: 2000000,
        actualPayment: 2000000,
        startDate: "20230201",
        endDate: "20230228",
    });

    useEffect(() => {
        setOverlayState({
            ...overlayState,
            startDate: overlayState.startDate ?? payment.startDate,
            endDate: overlayState.endDate ?? payment.endDate,
        });
    }, []);

    useEffect(() => {
        setPayment({
            ...payment,
            startDate: overlayState.startDate ?? payment.startDate,
            endDate: overlayState.endDate ?? payment.endDate,
        });
    }, [overlayState]);

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
        console.log(payment);
        return;
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
                            readOnly
                            className="readonly"
                        />
                        <div className="date">
                            <p>근무기간</p>
                            <div>
                                <Input
                                    type="text"
                                    name="startDate"
                                    id="startDate"
                                    onClick={() => {
                                        setOverlayState({
                                            ...overlayState,
                                            isActive: true,
                                            isStartDate: true,
                                            isEndDate: false,
                                        });
                                    }}
                                    value={parseDate2(payment.startDate)}
                                    readOnly
                                />
                                <span>-</span>
                                <Input
                                    type="text"
                                    name="endDate"
                                    id="endDate"
                                    onClick={() => {
                                        setOverlayState({
                                            ...overlayState,
                                            isActive: true,
                                            isStartDate: false,
                                            isEndDate: true,
                                        });
                                    }}
                                    value={parseDate2(payment.endDate)}
                                    readOnly
                                />
                            </div>
                        </div>

                        <OptionInput
                            type="text"
                            name="paymentType"
                            id="paymentType"
                            value={payment.paymentType}
                            label="급여유형"
                            readOnly
                            className="readonly"
                        />
                        <OptionInput
                            type="text"
                            name="expectedPayment"
                            id="expectedPayment"
                            value={payment.expectedPayment.toLocaleString()}
                            label="예상급여"
                            readOnly
                            className="readonly"
                        />
                        <OptionInput
                            type="text"
                            name="actualPayment"
                            id="actualPayment"
                            value={payment.actualPayment.toLocaleString()}
                            label="지급 금액"
                            onChange={handleInputChange}
                        />
                        <Link to="/manage/payment/register">
                            <FixedButton type="button" onClick={handleUpdatePayment}>
                                수정
                            </FixedButton>
                        </Link>
                        <DatePickerOverlay
                            overlayState={overlayState}
                            setOverlayState={setOverlayState}
                            hideOverlay={hideOverlay}
                        />
                    </StyledManagePayListWrapper>
                    <StyledBottmText>
                        ※ 수정가능범위 : 근무 기간과 지급 금액만 수정가능합니다.
                    </StyledBottmText>
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
    .date {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
        div {
            display: flex;
            align-items: center;
            span {
                color: ${Styles.colors.natural40};
                margin: 0 0.05rem;
            }
        }
    }
`;

const StyledBottmText = styled.p`
    color: ${Styles.colors.natural50};
    font-size: ${Styles.font.size.fontsize13};
    font-weight: ${Styles.font.weight.regular};
    position: fixed;
    bottom: 5.2rem;
`;
