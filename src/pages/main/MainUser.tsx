import { Link } from "react-router-dom";
import styled from "styled-components";

import { Styles } from "@/style/Styles";
import Dummy from "@/assets/images/dummy/dummy_profile.png";
import RightArrow from "@/assets/images/icons/icon_right_arrow.png";

const MainUser = () => {
    return (
        <StyledMainUser to={"/mypage"}>
            <div className="user_info">
                <img src={Dummy} alt="프로필 이미지" />
                <div className="user_detail">
                    <span>basic 회원</span>
                    <strong>홍길동님(hong)</strong>
                </div>
            </div>
            <img src={RightArrow} alt="마이페이지" />
        </StyledMainUser>
    );
};

export default MainUser;

const StyledMainUser = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem 0.8rem 0.6rem 1rem;
    background: ${Styles.colors.systemWhite};
    border-radius: 0.4rem;
    box-shadow: 0px 0.1rem 0.6rem 0px rgba(0, 0, 0, 0.06);
    & > img {
        display: block;
        width: 1.2rem;
        height: 1.2rem;
    }
    .user_info {
        display: flex;
        align-items: center;
        gap: 0.4rem;

        & > img {
            display: block;
            width: 2.1rem;
            height: 2.1rem;
            border-radius: 50%;
            overflow: hidden;
        }

        .user_detail {
            display: flex;
            flex-direction: column;
            gap: 0.15rem;
            span {
                font-size: ${Styles.font.size.fontsize13};
                font-weight: ${Styles.font.weight.medium};
                color: ${Styles.colors.natural50};
            }
            strong {
                font-size: ${Styles.font.size.fontsize18};
                font-weight: ${Styles.font.weight.medium};
                color: ${Styles.colors.natural80};
            }
        }
    }
`;
