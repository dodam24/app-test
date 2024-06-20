import { Link } from "react-router-dom";
import styled from "styled-components";

import { Styles } from "@/style/Styles";

import RightArrow from "@/assets/images/icons/icon_right_arrow_g.png";

const MainNotice = () => {
    return (
        <StyledNoticeContainer>
            <div className="title">
                <h4>공지를 확인해주세요 :)</h4>
                <Link to="/notice">
                    더보기
                    <img src={RightArrow} alt="더보기" />
                </Link>
            </div>
            <StyledNotice>
                <strong>new</strong>
                <span>소소상점이 새로 출시됬어요!</span>
            </StyledNotice>
        </StyledNoticeContainer>
    );
};

export default MainNotice;

const StyledNoticeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    .title {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & > h4 {
            font-size: ${Styles.font.size.fontsize18};
            font-weight: ${Styles.font.weight.medium};
            color: ${Styles.colors.natural90};
        }

        & > a {
            display: inline-flex;
            align-items: center;
            font-size: ${Styles.font.size.fontsize12};
            font-weight: ${Styles.font.weight.regular};
            color: ${Styles.colors.natural60};

            img {
                display: block;
                width: 0.8rem;
                height: 0.8rem;
                transform: translateY(-0.05rem);
            }
        }
    }
`;
const StyledNotice = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 1rem 0.8rem;
    border-radius: 0.4rem;
    background: ${Styles.colors.systemWhite};
    box-shadow: 0px 0.1rem 0.6rem 0px rgba(0, 0, 0, 0.06);

    strong {
        display: block;
        padding: 0.05rem 0.4rem 0.1rem;
        border-radius: 99rem;
        background: ${Styles.colors.brandGreen};
        font-size: ${Styles.font.size.fontsize10};
        font-weight: ${Styles.font.weight.medium};
        color: ${Styles.colors.systemWhite};
    }
    span {
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
        color: ${Styles.colors.natural60};
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
    }
`;
