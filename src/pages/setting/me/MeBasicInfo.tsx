import styled from "styled-components";

import { StyledList } from "@/pages/setting/_style/ListStyle";

import { Styles } from "@/style/Styles";
import { Link } from "react-router-dom";

const MeBasicInfo = () => {
    return (
        <StyledMeBasicInfo>
            <h4>기본정보</h4>
            <ul>
                <li>
                    <h6>이름</h6>
                    <span>홍길동</span>
                </li>
                <li>
                    <h6>휴대폰번호</h6>
                    <div>
                        <span>010-9090-5678</span>
                        <Link to="/setting/me/phone">수정</Link>
                    </div>
                </li>
                <li>
                    <h6>이메일</h6>
                    <div>
                        <span>soso123@gmail.com</span>
                        <Link to="/setting/me/email">수정</Link>
                    </div>
                </li>
                <li>
                    <h6>회원유형</h6>
                    <span>대기회원</span>
                </li>
            </ul>
        </StyledMeBasicInfo>
    );
};

export default MeBasicInfo;

const StyledMeBasicInfo = styled(StyledList)`
    margin-top: 1rem;
    padding: 0 1rem;
    border-bottom: 0.6rem solid ${Styles.colors.systemBackground};
    li > div {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 0.6rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: fit-content;
            font-size: ${Styles.font.size.fontsize12};
            font-weight: ${Styles.font.weight.medium};
            color: ${Styles.colors.primary100};
            background: ${Styles.colors.systemWhite};
            border: 0.05rem solid ${Styles.colors.primary100};
            border-radius: 0.4rem;
            padding: 0.4rem 0.8rem;
        }
    }
`;
