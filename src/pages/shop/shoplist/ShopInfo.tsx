import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";
import styled from "styled-components";
import { Styles } from "@/style/Styles";
import EnabledButton from "@/components/button/EnabledButton";
import { FoodImg1, StarIcon } from "@/pages/shop/_images/shop";

const ShopInfo = () => {
    return (
        <AppLayout props={{ header: <AppBackHeader title="상세설명" /> }}>
            <StyledShopInfoWrapper>
                <img src={FoodImg1} alt="" /> {/* 원래 스와이퍼임 이미지도 임시임 */}
                <StyledShopInfoInner>
                    <div>
                        <h3>[오늘의 특가] 돈사임당 뼈갈비 목심 스테이크</h3>
                        <StyledShopStarContainer>
                            <StyledShopStar>
                                <img src={StarIcon} alt="" />
                                <img src={StarIcon} alt="" />
                                <img src={StarIcon} alt="" />
                                <img src={StarIcon} alt="" />
                                <img src={StarIcon} alt="" />
                            </StyledShopStar>
                            <span>5 ㅣ리뷰 2</span>
                        </StyledShopStarContainer>
                    </div>
                    <div>
                        <h4>26,800원</h4>
                        <p>
                            <span>52%</span>
                            13,200원
                        </p>
                    </div>
                    <em>프리미엄 회원가</em>
                </StyledShopInfoInner>
                <EnabledButtonInner>
                    <EnabledButton className="firstBtn" title="장바구니" />
                    <EnabledButton className="secondBtn" title="바로구매" />
                </EnabledButtonInner>
            </StyledShopInfoWrapper>
        </AppLayout>
    );
};

const StyledShopInfoWrapper = styled.div`
    width: 100%;
    padding: 1rem 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    img {
        width: 16.75rem;
        height: 16.7rem;
    }
`;
const StyledShopInfoInner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.06);
    h3 {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize20};
        font-weight: ${Styles.font.weight.medium};
        margin-bottom: 0.5rem;
    }
    h4 {
        color: ${Styles.colors.natural30};
        font-size: ${Styles.font.size.fontsize18};
        font-weight: ${Styles.font.weight.regular};
        margin-bottom: 0.2rem;
        text-decoration: line-through;
    }
    p {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize24};
        font-weight: ${Styles.font.weight.medium};
        span {
            color: ${Styles.colors.systemError};
        }
    }
    em {
        display: inline-block;
        max-width: fit-content;
        background-color: ${Styles.colors.primary20};
        border-radius: 1.5rem;
        padding: 0.2rem 0.5rem;
        font-style: normal;
        color: ${Styles.colors.primary100};
        font-size: ${Styles.font.size.fontsize11};
        font-weight: ${Styles.font.weight.regular};
    }
`;

const StyledShopStarContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize13};
        font-weight: ${Styles.font.weight.regular};
    }
`;
const StyledShopStar = styled.div`
    img {
        width: 0.8rem;
        height: 0.8rem;
    }
`;
const EnabledButtonInner = styled.div`
    display: flex;
    gap: 0.75rem;
    width: 100%;
    position: fixed;
    bottom: 0.6rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 1rem;
    .firstBtn {
        width: 50%;
        position: static;
        left: initial;
        transform: translateX(0);
        background-color: ${Styles.colors.systemWhite};
        color: ${Styles.colors.primary100};
        border: 1px solid ${Styles.colors.primary100};
    }
    .secondBtn {
        position: static;
        width: 50%;
        right: initial;
        transform: translateX(0);
    }
`;
export default ShopInfo;
