import { styled } from "styled-components";
import Notice from "@/assets/images/icons/icon_notice_c.png";
import Customer from "@/assets/images/icons/icon_customer_c.png";
import { Styles } from "@/style/Styles";

const MoreCustomerService = () => {
    return (
        <StyledCustomerServiceContainer>
            <div className="service_item">
                <img src={Notice} alt="공지사항"></img>
                <h5>공지사항</h5>
            </div>
            <div className="service_item">
                <img src={Customer} alt="고객센터"></img>
                <h5>고객센터</h5>
            </div>
        </StyledCustomerServiceContainer>
    );
};

const StyledCustomerServiceContainer = styled.div`
    display: flex;
    gap: 0.65rem;
    margin-top: 1.6rem;

    .service_item {
        display: flex;
        flex: 1;
        padding: 0.6rem 2.5rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.2rem;
        border-radius: 0.4rem;
        background: ${Styles.colors.systemBackground};
        & > img {
            width: 2.2rem;
            height: 2.2rem;
        }
        & > h5 {
            color: ${Styles.colors.natural90};
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.regular};
        }
    }
`;

export default MoreCustomerService;
