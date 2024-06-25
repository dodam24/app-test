import { Link } from "react-router-dom";
import styled from "styled-components";

import { Styles } from "@/style/Styles";
import { StyledList } from "@/pages/setting/_style/ListStyle";
import { RightArrow } from "@/pages/setting/_images/Icons";

const TermsRequired = () => {
    return (
        <StyledTermsRequired>
            <h4>필수동의</h4>
            <ul>
                <li>
                    <Link to="/terms/soso">
                        <h6>소소상점 이용약관</h6>
                        <img src={RightArrow} alt="더보기" />
                    </Link>
                </li>
                <li>
                    <Link to="/terms/agree">
                        <h6>개인정보 수집·이용 동의</h6>
                        <img src={RightArrow} alt="더보기" />
                    </Link>
                </li>
                <li>
                    <Link to="/terms/personal">
                        <h6>개인정보 제공 동의</h6>
                        <img src={RightArrow} alt="더보기" />
                    </Link>
                </li>
            </ul>
        </StyledTermsRequired>
    );
};

export default TermsRequired;

const StyledTermsRequired = styled(StyledList)`
    margin-top: 1rem;
    padding: 0 1rem;
    border-bottom: 0.6rem solid ${Styles.colors.systemBackground};
    a {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
            display: block;
            width: 1.2rem;
            height: 1.2rem;
        }
    }
`;
