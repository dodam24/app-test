import FixedButton from "@/components/button/FixedButton";
import ImgFileInput from "@/components/input/ImgFileInput";
import OptionInput from "@/components/input/OptionInput";
import AppHeader, { MAIN_URL } from "@/components/header/AppHeader";
import AppLayout from "@/components/layout/AppLayout";
import { useInputHandler } from "@/hooks/useInputHandler";
import { StyledTransactionTabContainer } from "@/pages/transaction/TransactionContainer";
import { StyledTransactionWrap } from "@/pages/transaction/[id]/TransactionDetailEdit";
import { Styles } from "@/style/Styles";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface ITransactionPurchase {
    category: "PAYROLL" | "PURCHASE" | "SALE"; // 매입매출내용( PAYROLL:급여, PURCHASE:매입, SALE:매출) )
    description: string; // 내용(설명)
    amount: number; // 금액
}

const TransactionPurchaseAdd = () => {
    const [currentLength, setCurrentLength] = useState(0);
    const { values, setValues, handleInputChange } = useInputHandler<ITransactionPurchase>({
        category: "PURCHASE", // 매입매출내용( PAYROLL:급여, PURCHASE:매입, SALE:매출) )
        description: "식재료 충남상회 대금결제", // 내용(설명)
        amount: 0, // 금액
    });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleLength = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentLength(e.target.value.length);
    };

    useEffect(() => {
        setValues({
            ...values,
            ...{
                category: "PURCHASE",
                description: "식재료 충남상회 대금결제",
                amount: 20000,
            },
        });
        setCurrentLength(values.description.length);
    }, []);

    const tabRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        console.log(tabRef.current?.getBoundingClientRect().top);

        return () => {};
    }, []);

    const navigate = useNavigate();

    const handleNavi = (idx: number) => {
        if (idx === 0) {
            navigate("/transaction");
        } else if (idx === 1) {
            navigate("/transaction/purchase/add");
        } else {
            navigate("/transaction/sale/add");
        }
    };

    return (
        <AppLayout props={{ header: <AppHeader url={MAIN_URL} title="매입매출관리" /> }}>
            <StyledTransactionTabContainer className={`fixed`}>
                <button onClick={() => handleNavi(0)}>전체내역</button>
                <button className="active" onClick={() => handleNavi(1)}>
                    매입등록
                </button>
                <button onClick={() => handleNavi(2)}>매출등록</button>
            </StyledTransactionTabContainer>
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
                        handleInputChange={handleInputChange}
                        name="file"
                    />
                </div>
                <FixedButton type="submit">매입등록</FixedButton>
            </StyledTransactionWrap>

            <>매입등록</>
        </AppLayout>
    );
};

export default TransactionPurchaseAdd;

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
