import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";

import { FoodImg1, FoodImg2, FoodImg3, FoodImg4 } from "@/pages/shop/_images/shop";
import ButtonMenu from "@/pages/shop/_component/ButtonMenu";
import AppLayout from "@/components/layout/AppLayout";
import AppShoppingHeader, { SHOP_MAIN_URL } from "@/components/header/AppShoppingHeader";
import { IShopList } from "@/interface/shop/shop";

import { Styles } from "@/style/Styles";

const ShopListData: IShopList[] = [
    {
        id: 1,
        img: FoodImg1,
        title: "[오늘의 특가] 돈사임당 뼈갈비 목심 스테이크",
        cost: 26800,
        sale: "52",
        price: 13200,
    },
    {
        id: 2,
        img: FoodImg2,
        title: "[오늘의 특가] 돈사임당 목심 스테이크",
        cost: 15600,
        sale: "22",
        price: 9900,
    },
    {
        id: 3,
        img: FoodImg3,
        title: "[오늘의 특가] 돈사임당 통오겹살",
        cost: 15800,
        sale: "12",
        price: 12700,
    },
    {
        id: 4,
        img: FoodImg4,
        title: "[오늘의 특가] 돈사임당 매콤 불백",
        cost: 15600,
        sale: "22",
        price: 9900,
    },
];
const tabs = [
    { id: "home", title: "전체" },
    { id: "best", title: "Best 50!" },
    { id: "new", title: "신규입점특가!" },
    { id: "big-event1", title: "빅이벤트1" },
    { id: "big-event2", title: "빅이벤트2" },
];
const menuOptions = [
    { id: 1, title: "MD 추천순" },
    { id: 2, title: "인기순" },
    { id: 3, title: "리뷰 많은순" },
];

const ShopList = () => {
    const [activeTab, setActiveTab] = useState(0);
    const contentSwiperRef = useRef<SwiperCore | null>(null);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
        if (contentSwiperRef.current) {
            contentSwiperRef.current.slideTo(index);
        }
    };

    const handleSlideChange = (swiper: SwiperCore) => {
        setActiveTab(swiper.activeIndex);
    };

    return (
        <AppLayout props={{ header: <AppShoppingHeader url={SHOP_MAIN_URL} /> }}>
            <StyledShopTapList>
                <Swiper slidesPerView="auto" spaceBetween={36} freeMode={true}>
                    {tabs.map((tab, index) => (
                        <SwiperSlide key={tab.id}>
                            <button
                                className={activeTab === index ? "active" : ""}
                                onClick={() => handleTabClick(index)}
                            >
                                {tab.title}
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </StyledShopTapList>
            <StyledShopListWrapper>
                <Swiper
                    onSwiper={(swiper) => (contentSwiperRef.current = swiper)}
                    onSlideChange={handleSlideChange}
                    allowTouchMove={false}
                >
                    <SwiperSlide>
                        <StyledShopInner>
                            <ButtonMenu options={menuOptions} title="전체" />
                            <StyledShopListInner>
                                {ShopListData.map((shop) => (
                                    <StyledShopItemInner key={shop.id}>
                                        <Link to={`/shop/info/${shop.id}`}>
                                            <img src={shop.img} alt="" />
                                            <h3>{shop.title}</h3>
                                            <h4>{shop.cost.toLocaleString()}원</h4>
                                            <p>
                                                <span>{shop.sale}%</span>
                                                {shop.price.toLocaleString()}원
                                            </p>
                                        </Link>
                                    </StyledShopItemInner>
                                ))}
                            </StyledShopListInner>
                        </StyledShopInner>
                    </SwiperSlide>
                    <SwiperSlide>
                        <StyledShopInner>
                            <p>돈사임당 내용</p>
                        </StyledShopInner>
                    </SwiperSlide>
                    <SwiperSlide>
                        <StyledShopInner>
                            <p>명절한정 내용</p>
                        </StyledShopInner>
                    </SwiperSlide>
                    <SwiperSlide>
                        <StyledShopInner>
                            <p>빅이벤트1 내용</p>
                        </StyledShopInner>
                    </SwiperSlide>
                    <SwiperSlide>
                        <StyledShopInner>
                            <p>빅이벤트2 내용</p>
                        </StyledShopInner>
                    </SwiperSlide>
                </Swiper>
            </StyledShopListWrapper>
        </AppLayout>
    );
};

const StyledShopListWrapper = styled.div`
    width: 100%;
`;
const StyledShopTapList = styled.div`
    border-bottom: 0.05rem solid ${Styles.colors.natural10};
    padding: 0.4rem 0;
    .swiper {
        width: 100%;
        padding: 0 1rem;
    }

    .swiper-slide {
        width: auto;
    }

    button {
        display: block;
        padding: 0.5rem 0;
        color: ${Styles.colors.natural40};
        font-size: ${Styles.font.size.fontsize15};
        font-weight: ${Styles.font.weight.regular};
        border: none;
        cursor: pointer;
        border-bottom: 0.1rem solid transparent;
    }

    button.active {
        font-weight: ${Styles.font.weight.medium};
        color: ${Styles.colors.primary100};
        border-bottom: 0.1rem solid ${Styles.colors.primary100};
    }

    button:focus {
        outline: none;
    }
`;

const StyledShopListInner = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem 0.75rem;
`;

const StyledShopItemInner = styled.li`
    width: 100%;
    img {
        width: 100%;
        aspect-ratio: 1 / 1;
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

const StyledShopInner = styled.div`
    height: 100vh;
    padding: 0 1rem;
`;

export default ShopList;
