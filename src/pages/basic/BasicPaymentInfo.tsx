import { CheckOff, CheckOn } from "@/pages/setting/_images/Icons";
import { StyledList } from "@/pages/setting/_style/ListStyle";
import { Styles } from "@/style/Styles";
import styled from "styled-components";

const BasicPaymentInfo = () => {
    return (
        <StyledBasicPaymentInfo>
            <h4>수신희망 결제정보</h4>
            <ul>
                <li>
                    <input type="checkbox" name="payment_info" id="payment_info" />
                    <label htmlFor="payment_info">PG</label>
                </li>
            </ul>
        </StyledBasicPaymentInfo>
    );
};

export default BasicPaymentInfo;

const StyledBasicPaymentInfo = styled(StyledList)`
    border-bottom: 0.6rem solid ${Styles.colors.systemBackground};
    padding: 0 1rem;
    margin-top: 1.5rem;

    li {
        justify-content: space-between;
        input[type="checkbox"] {
            display: none;
        }
        label {
            display: block;
            background-image: url(${CheckOff});
            background-size: 1rem 1rem;
            background-position: left center;
            background-repeat: no-repeat;
            padding: 0.5rem 0 0.5rem 1.5rem;
            font-size: ${Styles.font.size.fontsize14};
            font-weight: ${Styles.font.weight.regular};
            color: ${Styles.colors.natural60};
        }
        input[type="checkbox"]:checked + label {
            background-image: url(${CheckOn});
        }
    }
`;
