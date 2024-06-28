import styled from "styled-components";
import { Styles } from "@/style/Styles";

const paymentListData = [
    {
        id: 1,
        name: "홍길동",
        paymentType: "월급",
        expectedPayment: "2,000,000원",
        actualPayment: "2,000,000원",
        startDate: "2023.02.01",
        endDate: "2023.02.28",
    },
    {
        id: 2,
        name: "이순신",
        paymentType: "시급",
        expectedPayment: "926,000원",
        actualPayment: "926,000원",
        startDate: "2023.02.01",
        endDate: "2023.02.28",
    },
];

const ManagePaymentList = () => {
    return (
        <StyledPaymentListWrapper>
            {paymentListData.map((payment) => (
                <li key={payment.id}>
                    <StyledPaymentItemTop>
                        <div>
                            <h3>{payment.name}</h3>
                            <span>{payment.paymentType}</span>
                        </div>
                        <div>
                            <h4>예상급여</h4>
                            <p>{payment.expectedPayment}</p>
                        </div>
                        <div>
                            <h4>지급급여</h4>
                            <p>{payment.actualPayment}</p>
                        </div>
                    </StyledPaymentItemTop>
                    <StyledPaymentItemBottom>
                        <p>근무기간</p>
                        <p>{`${payment.startDate} ~ ${payment.endDate}`}</p>
                    </StyledPaymentItemBottom>
                </li>
            ))}
        </StyledPaymentListWrapper>
    );
};

export default ManagePaymentList;

const StyledPaymentListWrapper = styled.ul`
    margin-top: 1.85rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    li {
        border-radius: 0.4rem;
        border: 1px solid ${Styles.colors.natural10};
    }
`;
const StyledPaymentItemTop = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem 0.5rem;
    gap: 0.5rem;
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3 {
            color: ${Styles.colors.natural90};
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.medium};
        }
        span {
            color: ${Styles.colors.primary100};
            font-size: ${Styles.font.size.fontsize12};
            font-weight: ${Styles.font.weight.regular};
            line-height: 1.4;
            padding: 0.15rem 0.4rem;
            border: 1px solid ${Styles.colors.primary100};
            border-radius: 0.4rem;
        }
        h4 {
            color: ${Styles.colors.natural60};
            font-size: ${Styles.font.size.fontsize14};
            font-weight: ${Styles.font.weight.regular};
        }
        p {
            color: ${Styles.colors.natural80};
            font-size: ${Styles.font.size.fontsize14};
            font-weight: ${Styles.font.weight.regular};
        }
    }
`;
const StyledPaymentItemBottom = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.6rem 1rem;
    background-color: ${Styles.colors.systemBackground};
    p {
        color: ${Styles.colors.natural50};
        font-size: ${Styles.font.size.fontsize13};
        font-weight: ${Styles.font.weight.regular};
    }
`;
