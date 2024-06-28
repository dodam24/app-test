import { Styles } from "@/style/Styles";
import styled from "styled-components";

const WithdrawServiceConfirmation = () => {
    // const WithdrawServiceList = [
    //     {}, {}, {}
    // ];
    return (
        <StyledWithdrawServiceConfirmation>
            <h4>
                탈퇴 전, 해지되는 서비스를
                <br />
                확인해주세요.
            </h4>
            <ul>
                <li>
                    <h6>결제 정보</h6>
                    <input type="radio" name="" />
                </li>
                <li>
                    <h6>매입/매출 정보</h6>
                    <input type="radio" name="" />
                </li>
                <li>
                    <h6>직원 정보</h6>
                    <input type="radio" name="" />
                </li>
            </ul>
        </StyledWithdrawServiceConfirmation>
    );
};

export default WithdrawServiceConfirmation;

const StyledWithdrawServiceConfirmation = styled.section`
    h6 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.medium};
    }
    ul {
        display: flex;
        flex-direction: column;
        padding: 1.2rem;
        li {
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
        }
    }
`;
