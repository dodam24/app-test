import { Link } from "react-router-dom";
import styled from "styled-components";
import { Styles } from "@/style/Styles";
import { StyledList } from "@/pages/setting/_style/ListStyle";
import { CheckOff, CheckOn, RightArrow } from "@/pages/setting/_images/Icons";

const BasicCompanyInfoConsent = () => {
    const temp = [
        {
            title: "개인(신용)정보 수집·이용·제공 동의",
            link: "/",
            name: "personal_info",
            id: "personal_info",
        },
        {
            title: "금융거래정보 제공 동의",
            link: "/",
            name: "transaction_info",
            id: "transaction_info",
        },
        {
            title: "사업자정보 처리방침 동의",
            link: "/",
            name: "business_info_processing",
            id: "business_info_processing",
        },
        {
            title: "사업자정보 입력 위임 동의",
            link: "/",
            name: "business_info_delegation",
            id: "business_info_delegation",
        },
    ];
    return (
        <StyledBasicConsent>
            <h4>사업자 정보동의</h4>
            <ul>
                {temp.map((item, index) => (
                    <li key={index}>
                        <input type="checkbox" name={item.name} id={item.id} />
                        <label htmlFor={item.id}>{item.title}</label>
                        <Link to={item.link}>
                            <img src={RightArrow} alt="더보기" />
                        </Link>
                    </li>
                ))}
            </ul>
            <p>
                ※ 신청정보를 바탕으로 안내 메일이 발송됩니다. 안내사항에 따라 가입절차를 진행하시기
                바랍니다.
            </p>
        </StyledBasicConsent>
    );
};

export default BasicCompanyInfoConsent;

const StyledBasicConsent = styled(StyledList)`
    margin-top: 1.5rem;
    padding: 0 1rem;
    margin-bottom: 4.3rem;

    li {
        justify-content: space-between;
        input[type="checkbox"] {
            display: none;
        }
        label {
            display: block;
            background-position: left center;
            background-repeat: no-repeat;
            background-size: 1rem 1rem;
            background-image: url(${CheckOff});
            padding: 0.5rem 0 0.5rem 1.5rem;
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.regular};
            color: ${Styles.colors.natural80};
        }
        input[type="checkbox"]:checked + label {
            background-image: url(${CheckOn});
        }
        a {
            img {
                display: block;
                width: 1.2rem;
                height: 1.2rem;
            }
        }
    }
    p {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize13};
        font-weight: ${Styles.font.weight.regular};
    }
`;
