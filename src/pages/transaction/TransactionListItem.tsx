import { Styles } from "@/style/Styles";
import { formatHourMinute } from "@/utils/formatDateTime";
import styled from "styled-components";

interface TransactionProps {
    transaction: {
        id: string; // 매입매출 key(UUID
        category: "PAYROLL" | "PURCHASE" | "SALE"; // 매입매출내용( PAYROLL:급여, PURCHASE:매입, SALE:매출) )
        description: string; // 내용(설명)
        amount: number; // 금액
        status: "PENDING" | "CONFIRMED"; // 확정여부 (PENDING:대기, CONFIRMED:확정)
        created_at: string; // 생성일
    };
    index: number;
}

const TransactionListItem = ({ transaction }: TransactionProps) => {
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

    return (
        <StyledTransactionListItem>
            <div className={`infoContainer`}>
                <ul>
                    <li className="time">{formatHourMinute(transaction.created_at)}</li>
                    <li className="category">{getCategory(transaction.category)}</li>
                    <li className="description">{transaction.description}</li>
                </ul>
                <ul>
                    <li className="amount">{transaction.amount.toLocaleString()}원</li>
                    <li
                        className={`status ${transaction.status === "CONFIRMED" ? "confirmed" : "pending"}`}
                    >
                        {getStatus(transaction.status)}
                    </li>
                </ul>
            </div>
        </StyledTransactionListItem>
    );
};

export default TransactionListItem;

const StyledTransactionListItem = styled.div`
    padding: 0 1rem;
    margin-bottom: 1rem;

    div.infoContainer {
        padding-top: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &.fixed {
            padding-top: 3rem;
        }

        > ul:nth-child(1) {
            flex: 0.55;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            font-weight: ${Styles.font.weight.regular};
            font-size: ${Styles.font.size.fontsize14};
            gap: 0.8rem;

            li {
                text-align: center;
            }
            li.time {
                color: ${Styles.colors.natural40};
                font-size: ${Styles.font.size.fontsize13};
            }
            li.category {
                color: ${Styles.colors.natural70};
            }
            li.description {
                width: 4.2rem;
                color: ${Styles.colors.natural40};
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        > ul:nth-child(2) {
            flex: 0.4;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.regular};
            gap: 0.5rem;

            li {
                text-align: center;
            }
            li.amount {
                color: ${Styles.colors.natural90};
                letter-spacing: -0.02rem;
            }
            li.status.pending {
                color: ${Styles.colors.systemError};
                font-size: ${Styles.font.size.fontsize14};
                letter-spacing: -0.02rem;
            }
            li.status.confirmed {
                color: ${Styles.colors.systemSuccess};
                font-size: ${Styles.font.size.fontsize14};
                letter-spacing: -0.02rem;
            }
        }

        strong {
            color: ${Styles.colors.natural90};
            font-size: ${Styles.font.size.fontsize16};
            font-weight: ${Styles.font.weight.regular};

            &.minus {
                color: ${Styles.colors.systemError};
            }
        }
    }
`;
