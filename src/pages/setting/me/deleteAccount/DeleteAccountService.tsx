import AppBaseWrapper from "@/components/layout/AppBaseWrapper";
import { Styles } from "@/style/Styles";
import styled from "styled-components";
import CheckboxOff from "@/assets/images/icons/icon_delete_checkbox_off_c.png";
import CheckboxOn from "@/assets/images/icons/icon_delete_checkbox_on_c.png";
import { DeleteAccount, DeleteAccountServiceProps } from "@/interface/setting/DeleteAccount";

const Service: DeleteAccountServiceProps[] = [
    {
        id: 1,
        title: "결제 정보",
        service_id: "agreed_to_payment_cancellation",
        checked: false,
    },
    {
        id: 2,
        title: "매입/매출 정보",
        service_id: "agreed_to_purchase_sales_cancellation",
        checked: false,
    },
    {
        id: 3,
        title: "결제 정보",
        service_id: "agreed_to_employee_cancellation",
        checked: false,
    },
];

const DeleteAccountService = ({ setTotal }: DeleteAccount) => {
    return (
        <AppBaseWrapper title={`탈퇴 전, 해지되는 서비스를\n확인해주세요.`}>
            <StyledServiceConfirmationContainer>
                {Service.map((service) => (
                    <li key={service.id}>
                        <label htmlFor={service.service_id}>{service.title}</label>
                        <input
                            type="checkbox"
                            id={service.service_id}
                            onChange={(e) =>
                                setTotal((prev) => {
                                    if (!prev) return prev;
                                    return {
                                        ...prev,
                                        [service.service_id]: e.target.checked,
                                    };
                                })
                            }
                        />
                    </li>
                ))}
            </StyledServiceConfirmationContainer>
            <StyledServiceConfirmationMessage>
                위 결제정보, 매입매출 정보, 직원 정보 서비스는 회원 탈퇴시
                <br />
                <span className="message_link">3년간 보관 후 파기됩니다.</span>
            </StyledServiceConfirmationMessage>
        </AppBaseWrapper>
    );
};

export default DeleteAccountService;

const StyledServiceConfirmationContainer = styled.ul`
    display: flex;
    padding: 1.2rem 0;
    flex-direction: column;
    gap: 1.2rem;
    border-radius: 0.4rem;
    border: 0.05rem solid ${Styles.colors.natural10};
    margin-top: 1.5rem;

    li {
        display: flex;
        justify-content: space-between;
        padding: 0 0.8rem;
        label {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: ${Styles.colors.natural90};
            text-align: right;
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.regular};
        }
        input {
            width: 1rem;
            height: 1rem;
            background: url(${CheckboxOff}) no-repeat center;
            background-size: 1rem 1rem;
            appearance: none;
            &:checked {
                background: url(${CheckboxOn}) no-repeat center;
                background-size: 1rem 1rem;
            }
        }
    }
`;
const StyledServiceConfirmationMessage = styled.p`
    margin-top: 0.8rem;
    margin-bottom: calc(3rem - 1rem);
    color: ${Styles.colors.natural60};
    font-size: ${Styles.font.size.fontsize13};
    font-weight: ${Styles.font.weight.regular};
    & .message_link {
        text-decoration-line: underline;
    }
`;
