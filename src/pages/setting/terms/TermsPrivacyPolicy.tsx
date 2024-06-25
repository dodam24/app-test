import { RightArrow } from "@/pages/setting/_images/Icons";
import { Styles } from "@/style/Styles";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TermsPrivacyPolicy = () => {
    return (
        <StyledTermsPrivacyPolicy>
            <Link to="/terms/privacy-policy">
                <h6>개인정보처리방침</h6>
                <img src={RightArrow} alt="더보기" />
            </Link>
        </StyledTermsPrivacyPolicy>
    );
};

export default TermsPrivacyPolicy;

const StyledTermsPrivacyPolicy = styled.div`
    padding: 0 1rem;
    margin-top: 2rem;
    a {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h6 {
            min-width: 5rem;
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.regular};
            color: ${Styles.colors.natural80};
        }
        img {
            display: block;
            width: 1.2rem;
            height: 1.2rem;
        }
    }
`;
