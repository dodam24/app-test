import { Link } from "react-router-dom";
import { Styles } from "@/style/Styles";
import styled from "styled-components";
import Email from "@/assets/images/icons/icon_email_c.png";
import Phone from "@/assets/images/icons/icon_phone_c.png";

const FaqCustomerService = () => {
    return (
        <>
            <StyledFaqCustomerService>
                <Link to="/more/emailConsultation">
                    <StyledCustomerServiceItem>
                        <div>
                            <h3>E-mail 상담</h3>
                            <p>영업일 기준 3일 이상 소요</p>
                        </div>
                        <img src={Email} alt="이메일" />
                    </StyledCustomerServiceItem>
                </Link>
                <StyledCustomerServiceItem>
                    <div>
                        <div>
                            <h3>소소상점 고객센터</h3>
                            <span>1833-4854</span>
                        </div>
                        <p>오전 9시~ 오후 6시 (주말/공휴일 휴무)</p>
                    </div>
                    <img src={Phone} alt="전화번호" />
                </StyledCustomerServiceItem>
            </StyledFaqCustomerService>
        </>
    );
};

export default FaqCustomerService;

const StyledFaqCustomerService = styled.section`
    padding: 1.8rem 1rem 2.4rem 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    left: 0;
    gap: 0.6rem;
    border-top: 0.6rem solid ${Styles.colors.systemBackground};
    background: ${Styles.colors.systemWhite};
    z-index: 9999;
`;
const StyledCustomerServiceItem = styled.div`
    display: flex;
    width: 100%;
    padding: 1.2rem 1rem;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.4rem;
    background: ${Styles.colors.systemBackground};

    & > div {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;

        h3 {
            color: ${Styles.colors.natural90};
            font-size: ${Styles.font.size.fontsize18};
            font-weight: ${Styles.font.weight.semibold};
        }
        span {
            color: ${Styles.colors.primary100};
            font-size: ${Styles.font.size.fontsize18};
            font-weight: ${Styles.font.weight.medium};
        }
        p {
            color: ${Styles.colors.natural50};
            font-size: ${Styles.font.size.fontsize13};
            font-weight: ${Styles.font.weight.regular};
        }
    }

    & > img {
        display: flex;
        align-items: center;
        width: 2.2rem;
        height: 2.2rem;
        flex-shrink: 0;
    }
`;
