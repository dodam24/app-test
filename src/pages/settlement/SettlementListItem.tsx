import { Styles } from "@/style/Styles";
import styled from "styled-components";

interface SettlementProps {
    settlement: {
        id: string;
        payment_provider_type: string;
        transaction_amount: number;
        fee_amount: number;
        settlement_amount: number;
        payment_transaction_at?: string;
        settlement_completed_at: string;
    };
    index: number;
}

const SettlementListItem = ({ settlement }: SettlementProps) => {
    return (
        <StyledSettlementListItem>
            <div className={`infoContainer`}>
                <ul>
                    <li className="logo">{settlement.payment_provider_type}</li>
                    <li className="transaction_amount">
                        {settlement.transaction_amount.toLocaleString()}원
                    </li>
                    <li className="fee_amount">{settlement.fee_amount.toLocaleString()}원</li>
                </ul>
                <ul>
                    <li className="settlement_amount">
                        {settlement.settlement_amount.toLocaleString()}원
                    </li>
                </ul>
            </div>
        </StyledSettlementListItem>
    );
};

export default SettlementListItem;

const StyledSettlementListItem = styled.div`
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
            flex: 0.6;
            display: flex;
            align-items: center;
            justify-content: space-between;

            li.logo {
                background-color: ${Styles.colors.brandGreen};
                border: 1px solid ${Styles.colors.natural10};
                padding: 0.6rem 0.35rem;
                width: 2.2rem;
                height: 2.2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                color: ${Styles.colors.systemWhite};
                font-size: ${Styles.font.size.fontsize14};
                font-weight: ${Styles.font.weight.medium};
            }
            li.transaction_amount {
                color: ${Styles.colors.natural70};
                font-size: ${Styles.font.size.fontsize15};
                font-weight: ${Styles.font.weight.regular};
            }
            li.fee_amount {
                color: ${Styles.colors.natural40};
                font-size: ${Styles.font.size.fontsize15};
                font-weight: ${Styles.font.weight.regular};
            }
        }
        > ul:nth-child(2) {
            flex: 0.2;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            li.settlement_amount {
                color: ${Styles.colors.natural90};
                font-size: ${Styles.font.size.fontsize16};
                font-weight: ${Styles.font.weight.regular};
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
