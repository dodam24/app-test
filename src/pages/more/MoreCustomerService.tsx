import { styled } from "styled-components";
import Notice from "@/assets/images/icons/icon_notice_c.png";
import Customer from "@/assets/images/icons/icon_customer_c.png";
import { Styles } from "@/style/Styles";
import { Link } from "react-router-dom";

interface MoreCustomerServiceProps {
    icon: string;
    alt: string;
    title: string;
    link: string;
}

const MoreCustomerService = () => {
    const CustomerServiceItem = ({ icon, alt, title, link }: MoreCustomerServiceProps) => {
        return (
            <Link to={link}>
                <div className="service_item">
                    <img src={icon} alt={alt}></img>
                    <h5>{title}</h5>
                </div>
            </Link>
        );
    };

    return (
        <StyledCustomerServiceContainer>
            <CustomerServiceItem
                icon={Notice}
                alt="공지사항"
                title="공지사항"
                link="/more/notice"
            />
            <CustomerServiceItem icon={Customer} alt="고객센터" title="고객센터" link="/more/faq" />
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
