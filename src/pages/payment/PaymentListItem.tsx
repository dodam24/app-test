import { Styles } from "@/style/Styles";
import styled from "styled-components";

interface PaymentProps {
    payment: {
        id: string;
        payment_provider_type: string;
        amount: number;
        transaction_at: string;
    };
    index: number;
}

const PaymentListItem = ({ payment }: PaymentProps) => {
    const transFormTime = (date: string): string => {
        return new Date(date).toLocaleTimeString("en-US", {
            hour12: false,
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        });
    };

    const transFormAmount = (amount: number): string => {
        return amount.toLocaleString() + " 원";
    };

    return (
        <StyledPaymentListItem>
            <div className={`infoContainer`}>
                <div className="info">
                    <div className="logo">{payment.payment_provider_type}</div>
                    <div>
                        <h3>{payment.payment_provider_type}</h3>
                        <span className="time">{transFormTime(payment.transaction_at)}</span>
                    </div>
                </div>
                <strong className={payment.amount >= 0 ? "" : "minus"}>
                    {transFormAmount(payment.amount)}
                </strong>
            </div>
        </StyledPaymentListItem>
    );
};

export default PaymentListItem;

const StyledPaymentListItem = styled.div`
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

        > div.info {
            display: flex;
            gap: 0.6rem;
            align-items: center;

            > div.logo {
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

            > div {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 0.1rem;

                h3 {
                    color: ${Styles.colors.natural90};
                    font-size: ${Styles.font.size.fontsize15};
                    font-weight: ${Styles.font.weight.medium};
                }

                > span.time {
                    color: ${Styles.colors.natural40};
                    font-size: ${Styles.font.size.fontsize13};
                    font-weight: ${Styles.font.weight.regular};
                }
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
