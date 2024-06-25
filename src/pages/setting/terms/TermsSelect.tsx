import { Link } from "react-router-dom";
import styled from "styled-components";

import { Styles } from "@/style/Styles";
import { StyledList } from "@/pages/setting/_style/ListStyle";
import { RightArrow, CheckOff, CheckOn } from "@/pages/setting/_images/Icons";

const TermsSelect = () => {
    return (
        <StyledTermsSelect>
            <h4>선택동의</h4>
            <ul>
                <li>
                    <input type="checkbox" name="s_collection" id="service_collection" />
                    <label htmlFor="service_collection">소소상점 서비스 관련 수집·이용</label>
                    <Link to="/terms/service-collection">
                        <img src={RightArrow} alt="더보기" />
                    </Link>
                </li>
                <li>
                    <input type="checkbox" name="t_collection" id="transaction_collection" />
                    <label htmlFor="transaction_collection">거래정보 수집·이용</label>
                    <Link to="/terms/transaction-collection">
                        <img src={RightArrow} alt="더보기" />
                    </Link>
                </li>
            </ul>
        </StyledTermsSelect>
    );
};

export default TermsSelect;

const StyledTermsSelect = styled(StyledList)`
    margin-top: 2rem;
    padding: 0 1rem;
    border-bottom: 0.6rem solid ${Styles.colors.systemBackground};
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
    }
    a {
        img {
            display: block;
            width: 1.2rem;
            height: 1.2rem;
        }
    }
`;
