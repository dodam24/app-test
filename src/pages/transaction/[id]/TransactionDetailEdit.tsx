import FixedButton from "@/components/button/FixedButton";
import AppBackHeader from "@/components/header/AppBackHeader";
import ImgFileInput from "@/components/input/ImgFileInput";
import OptionInput from "@/components/input/OptionInput";
import AppLayout from "@/components/layout/AppLayout";
import { useInputHandler } from "@/hooks/useInputHandler";
import { Styles } from "@/style/Styles";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styled from "styled-components";

export interface ITransactionDetailEdit {
    id: string; // 매입매출 key(UUID
    category: "PAYROLL" | "PURCHASE" | "SALE"; // 매입매출내용( PAYROLL:급여, PURCHASE:매입, SALE:매출) )
    description: string; // 내용(설명)
    amount: number; // 금액
    status: "PENDING" | "CONFIRMED"; // 확정여부 (PENDING:대기, CONFIRMED:확정)
    created_at: string; // 생성일
}

const TransactionDetailEdit = () => {
    const [currentLength, setCurrentLength] = useState(0);
    const { values, setValues, handleInputChange } = useInputHandler<ITransactionDetailEdit>({
        id: "", // 매입매출 key(UUID
        category: "PURCHASE", // 매입매출내용( PAYROLL:급여, PURCHASE:매입, SALE:매출) )
        description: "식재료 충남상회 대금결제", // 내용(설명)
        amount: 0, // 금액
        status: "PENDING", // 확정여부 (PENDING:대기, CONFIRMED:확정)
        created_at: "", // 생성일
    });

    useEffect(() => {
        setValues({
            ...values,
            ...{
                id: "1",
                category: "PURCHASE",
                description: "식재료 충남상회 대금결제",
                amount: 20000,
                status: "PENDING",
                created_at: "2023-03-24T15:00:23.000000+09:00",
            },
        });
        setCurrentLength(values.description.length);

        return () => {};
    }, []);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleLength = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentLength(e.target.value.length);
    };

    return (
        <AppLayout props={{ header: <AppBackHeader title="매입수정" /> }}>
            <StyledTransactionWrap onSubmit={handleSubmit}>
                <div className="form">
                    <OptionInput
                        type="text"
                        name="description"
                        value={values.description}
                        label="내용"
                        id="description"
                        options={{ isRequired: true }}
                        onChange={(e) => {
                            handleLength(e);
                            handleInputChange(e);
                        }}
                        maxLength={20}
                        required
                    />
                    <StyledTextLimit>
                        <span>{currentLength}</span>
                        <span>/ 20자</span>
                    </StyledTextLimit>
                </div>
                <div className="form">
                    <OptionInput
                        type="tel"
                        name="amount"
                        value={values.amount.toLocaleString()}
                        label="금액"
                        id="amount"
                        options={{
                            isRequired: true,
                            isFloatingLabel: <span className="floatingLabel">원</span>,
                        }}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form fileContainer">
                    <ImgFileInput
                        label="파일 업로드"
                        isDescription
                        isReset
                        imgSrc="https://i.ytimg.com/vi/TfAA1L5TXrk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWWQ0mKqi-kR2iX2ama_r1w1d0uA"
                        handleInputChange={handleInputChange}
                        name="file1"
                    />
                </div>
                <FixedButton type="submit">수정</FixedButton>
            </StyledTransactionWrap>
        </AppLayout>
    );
};

export default TransactionDetailEdit;

export const StyledTransactionWrap = styled.form`
    position: relative;
    padding: 1rem;

    & > div.form {
        padding: 0.2rem 0;

        &.fileContainer {
            padding-top: 2rem;
        }
    }

    .floatingLabel {
        color: ${Styles.colors.natural40};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
    }
`;

const StyledTextLimit = styled.div`
    display: flex;
    padding: 0.1rem 0.8rem 0;
    align-items: center;
    align-self: stretch;
    justify-content: end;
    gap: 0.1rem;

    span {
        text-align: right;
        color: ${Styles.colors.natural40};
        font-size: ${Styles.font.size.fontsize12};
        font-weight: ${Styles.font.weight.regular};
        line-height: 1.4;
    }
`;
