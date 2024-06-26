import { useState } from "react";
import styled from "styled-components";

import AppHeader from "@/components/header/AppHeader";
import AppLayout from "@/components/layout/AppLayout";

import { Styles } from "@/style/Styles";

import { ArrowDownIcon, FoodImg1, FoodImg2, FoodImg3, FoodImg4 } from "@/pages/shop/_images/shop";

const ShopListData = [
    {
        id: 1,
        img: FoodImg1,
        title: "[오늘의 특가] 돈사임당 뼈갈비 목심 스테이크",
        cost: "26,800",
        sale: "52",
        price: "13,200",
    },
    {
        id: 2,
        img: FoodImg2,
        title: "[오늘의 특가] 돈사임당 목심 스테이크",
        cost: "15,600",
        sale: "22",
        price: "9,900",
    },
    {
        id: 3,
        img: FoodImg3,
        title: "[오늘의 특가] 돈사임당 통오겹살",
        cost: "15,800",
        sale: "12",
        price: "12,700",
    },
    {
        id: 4,
        img: FoodImg4,
        title: "[오늘의 특가] 돈사임당 매콤 불백",
        cost: "15,600",
        sale: "22",
        price: "9,900",
    },
];

const ShopList = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <AppLayout props={{ header: <AppHeader /> }}>
            <StyledShopListWrapper>
                <StyledButtonItem>
                    <StyledButtonMenu>
                        <button onClick={toggleMenu}>전체</button>
                        {showMenu && (
                            <ul>
                                <li>MD 추천순</li>
                                <li>인기순</li>
                                <li>리뷰 많은순</li>
                            </ul>
                        )}
                    </StyledButtonMenu>
                    <span onClick={toggleMenu}>
                        <img src={ArrowDownIcon} alt="Arrow Down Icon" />
                    </span>
                </StyledButtonItem>
                <StyledShopListInner>
                    {ShopListData.map((shop) => (
                        <StyledShopItemInner key={shop.id}>
                            <img src={shop.img} alt="" />
                            <h3>{shop.title}</h3>
                            <h4>{shop.cost}원</h4>
                            <p>
                                <span>{shop.sale}%</span>
                                {shop.price}원
                            </p>
                        </StyledShopItemInner>
                    ))}
                </StyledShopListInner>
            </StyledShopListWrapper>
        </AppLayout>
    );
};

const StyledShopListWrapper = styled.div`
    width: 100%;
    padding: 0 1rem;
`;

const StyledButtonItem = styled.div`
    width: 49.6%; /* 임시 */
    position: relative;
    display: flex;
    align-items: center;
    margin: 0.6rem 0;
    margin-left: auto;
    button {
        width: 100%;
        background: ${Styles.colors.systemBackground};
        border: none;
        border-radius: 0.4rem;
        height: 2.3rem;
        padding: 0.55rem 0.8rem;
        caret-color: ${Styles.colors.primary100};
        text-align: left;
        cursor: pointer;
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
    }

    span {
        position: absolute;
        top: 50%;
        right: 0.6rem;
        transform: translateY(-50%);
        cursor: pointer;
        display: flex;
        justify-content: end;
        align-items: center;

        img {
            width: 1.2rem;
            height: 1.2rem;
            margin: 0;
        }
    }
`;

const StyledButtonMenu = styled.div`
    position: relative;
    width: 100%;

    ul {
        /* 임시 설정 */
        position: absolute;
        top: 2.7rem;
        left: 0;
        width: 100%;
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
        background-color: ${Styles.colors.systemBackground};
        border-radius: 0.4rem;
        z-index: 1;

        li {
            cursor: pointer;
            padding: 0.55rem 0.8rem;
            &:hover {
                background-color: ${Styles.colors.natural00};
            }
        }
    }
`;

const StyledShopListInner = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
`;

const StyledShopItemInner = styled.li`
    width: 100%;
    img {
        width: 8rem;
        height: 8rem;
        border-radius: 0.5rem;
    }
    h3 {
        color: #000; /* system black */
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
        margin: 0.8rem 0 0.45rem;
    }
    h4 {
        color: ${Styles.colors.natural30};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
        margin-bottom: 0.2rem;
        text-decoration: line-through;
    }
    p {
        color: ${Styles.colors.natural90};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.medium};
        span {
            color: ${Styles.colors.systemError};
            padding-right: 0.2rem;
        }
    }
`;

export default ShopList;
