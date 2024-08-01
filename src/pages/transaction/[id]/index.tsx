import FixedButton from "@/components/button/FixedButton";
import AppBackHeader from "@/components/header/AppBackHeader";
import ImgFileInput from "@/components/input/ImgFileInput";
import AppLayout from "@/components/layout/AppLayout";
import { StyleDoubleFixedButton } from "@/style/ButtonSytle";
import { Styles } from "@/style/Styles";
import { formatDateTime } from "@/utils/formatDateTime";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface TransactionDetail {
    id: string; // 매입매출 key(UUID
    category: "PAYROLL" | "PURCHASE" | "SALE"; // 매입매출내용( PAYROLL:급여, PURCHASE:매입, SALE:매출) )
    description: string; // 내용(설명)
    amount: number; // 금액
    status: "PENDING" | "CONFIRMED"; // 확정여부 (PENDING:대기, CONFIRMED:확정)
    created_at: string; // 생성일
}

const TransactionDetail = () => {
    const [detail, setDetail] = useState<TransactionDetail>({
        id: "", // 매입매출 key(UUID
        category: "PURCHASE", // 매입매출내용( PAYROLL:급여, PURCHASE:매입, SALE:매출) )
        description: "", // 내용(설명)
        amount: 0, // 금액
        status: "PENDING", // 확정여부 (PENDING:대기, CONFIRMED:확정)
        created_at: "", // 생성일
    });

    useEffect(() => {
        setDetail({
            ...detail,
            ...{
                id: "1",
                category: "PURCHASE",
                description: "식재료 충남상회 대금결제",
                amount: 20000,
                status: "PENDING",
                created_at: "2023-03-24T15:00:23.000000+09:00",
            },
        });

        return () => {};
    }, []);

    const getCategory = (category: "PAYROLL" | "PURCHASE" | "SALE"): string => {
        if (category === "PAYROLL") {
            return "급여";
        } else if (category === "PURCHASE") {
            return "매입";
        }
        return "매출";
    };

    const getStatus = (status: "PENDING" | "CONFIRMED"): string => {
        return status === "CONFIRMED" ? "확정" : "대기";
    };

    const navigate = useNavigate();

    const handleEdit = (id: string): void => {
        navigate(`/transaction/${id}/edit`);
    };

    const handleCheck = () => {
        navigate(-1);
    };

    const handleRemove = () => {};

    return (
        <AppLayout props={{ header: <AppBackHeader title="매입매출 상세내역" /> }}>
            <StyledTransactionWrap>
                <section>
                    <div className="row">
                        <span className="title">등록일시</span>
                        <span>{formatDateTime(detail.created_at)}</span>
                    </div>
                    <div className="row">
                        <span className="title">구분</span>
                        <span>{getCategory(detail.category)}</span>
                    </div>
                    <div className="row">
                        <span className="title">내용</span>
                        <span>{detail.description}</span>
                    </div>
                </section>
                <section>
                    <div className="row">
                        <span className="title">금액</span>
                        <span>{detail.amount.toLocaleString()}원</span>
                    </div>
                    <div className="row">
                        <span className="title">확정여부</span>
                        <span
                            className={`status ${detail.status === "CONFIRMED" ? "confirmed" : "pending"}`}
                        >
                            {getStatus(detail.status)}
                        </span>
                    </div>
                </section>
                {detail.status === "CONFIRMED" ? (
                    <ImgFileInput imgSrc="https://i.ytimg.com/vi/TfAA1L5TXrk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWWQ0mKqi-kR2iX2ama_r1w1d0uA" />
                ) : null}
                {detail.status === "CONFIRMED" ? (
                    <FixedButton onClick={() => handleCheck()}>확인</FixedButton>
                ) : (
                    <StyleDoubleFixedButtonContainer>
                        <FixedButton className="edit" onClick={() => handleEdit(detail.id)}>
                            수정
                        </FixedButton>
                        <FixedButton onClick={() => handleRemove()}>삭제</FixedButton>
                    </StyleDoubleFixedButtonContainer>
                )}
            </StyledTransactionWrap>
        </AppLayout>
    );
};

export default TransactionDetail;

const StyledTransactionWrap = styled.div`
    padding: 1rem;

    section {
        border-bottom: 1px solid ${Styles.colors.natural10};

        div.row {
            display: flex;
            justify-content: space-between;
            gap: 1rem;
            color: ${Styles.colors.natural80};
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.regular};
            padding: 0.8rem 0;

            span {
                word-break: break-all;

                &.title {
                    color: ${Styles.colors.natural60};
                    word-break: keep-all;
                }

                &.status.pending {
                    color: ${Styles.colors.systemError};
                }

                &.status.confirmed {
                    color: ${Styles.colors.primary100};
                }
            }
        }

        &:last-child {
            border-bottom: 0;
        }
    }
`;

const StyleDoubleFixedButtonContainer = styled(StyleDoubleFixedButton)`
    button.edit {
        color: ${Styles.colors.primary100};
        background-color: ${Styles.colors.systemWhite};
        border: 1px solid ${Styles.colors.primary100};
    }
`;
