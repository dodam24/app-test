import styled from "styled-components";
import { Styles } from "@/style/Styles";
import { StyledList } from "@/pages/setting/_style/ListStyle";

const MeBuisnessInfo = () => {
    return (
        <StyledBuisnessInfo>
            <h4>사업자정보</h4>
            <ul>
                <li>
                    <h6>상호명</h6>
                    <span>활빈당</span>
                </li>
                <li>
                    <h6>사업자번호</h6>
                    <span>123-45-67890</span>
                </li>
            </ul>
        </StyledBuisnessInfo>
    );
};

export default MeBuisnessInfo;

const StyledBuisnessInfo = styled(StyledList)`
    margin-top: 2rem;
    padding: 0 1rem 0.5rem;
    border-bottom: 0.6rem solid ${Styles.colors.systemBackground};
`;
