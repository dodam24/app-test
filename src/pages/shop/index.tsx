import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";

import AppLayout from "@/components/layout/AppLayout";

import { Styles } from "@/style/Styles";

import {
    BabyIcon,
    ClothIcon,
    CosmeticIcon,
    DigitalIcon,
    FoodIcon,
    GloveIcon,
    InteriorIcon,
    SportIcon,
} from "./_images/shop";
import Banner from "@/assets/images/img/img_shop_banner_k.png";
import AppShoppingHeader, { SHOP_MAIN_URL } from "@/components/header/AppShoppingHeader";
import { IShopTabs, IShopTag } from "@/interface/shop/shop";
import ShopSwiper from "@/pages/shop/_component/ShopSwiper";

const shopTagData: IShopTag[] = [
    { id: 1, img: ClothIcon, title: "패션의류" },
    { id: 2, img: GloveIcon, title: "패션잡화" },
    { id: 3, img: CosmeticIcon, title: "화장품/미용" },
    { id: 4, img: DigitalIcon, title: "디지털/가전" },
    { id: 5, img: InteriorIcon, title: "인테리어" },
    { id: 6, img: BabyIcon, title: "출산/육아" },
    { id: 7, img: FoodIcon, title: "식품" },
    { id: 8, img: SportIcon, title: "스포츠/레저" },
];

const tabs: IShopTabs[] = [
    { id: "home", title: "홈" },
    { id: "donsa", title: "돈사임당" },
    { id: "holiday", title: "명절한정" },
    { id: "big-event1", title: "빅이벤트1" },
    { id: "big-event2", title: "빅이벤트2" },
];
const images = [Banner, Banner, Banner, Banner, Banner];

const Shop = () => {
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
                            <div
                                className={activeTab === index ? "active" : ""}
                                onClick={() => handleTabClick(index)}
                            >
                                {tab.title}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </StyledShopTapList>
            <StyledShopWrapper>
                <Swiper
                    onSwiper={(swiper) => (contentSwiperRef.current = swiper)}
                    onSlideChange={handleSlideChange}
                    allowTouchMove={false}
                >
                    <SwiperSlide>
                        <StyledShopInner>
                            <ShopSwiper images={images} />
                            <StyledShopTagList>
                                {shopTagData.map((item) => (
                                    <li key={item.id}>
                                        <Link to={`/shop/list/${item.id}`}>
                                            <div>
                                                <img src={item.img} alt={item.title} />
                                            </div>
                                            <p>{item.title}</p>
                                        </Link>
                                    </li>
                                ))}
                            </StyledShopTagList>
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
            </StyledShopWrapper>
        </AppLayout>
    );
};

const StyledShopWrapper = styled.div`
    width: 100%;
    padding: 1rem 0 0;
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

        div {
            display: block;
            padding: 0.5rem 0;
            color: ${Styles.colors.natural40};
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.regular};
            border: none;
            cursor: pointer;
            border-bottom: 0.1rem solid transparent;

            &.active {
                font-weight: ${Styles.font.weight.medium};
                color: ${Styles.colors.primary100};
                border-bottom: 0.1rem solid ${Styles.colors.primary100};
            }

            &:focus {
                outline: none;
            }
        }
    }
`;

const StyledShopTagList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem 1.2rem;
    padding: 0;
    margin: 0;

    li {
        align-items: center;

        a {
            display: block;
            text-decoration: none;
            color: inherit;
            width: 100%;
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 0.6rem;

            div {
                width: 100%;
                aspect-ratio: 1 / 1;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 1rem;
                border: 1px solid rgba(0, 0, 0, 0.05);
                background-color: #f8f8f8; /* 스타일 컬러에 없음 */
                padding: 0.5rem;

                img {
                    width: 1.5rem;
                    height: 1.5rem;
                }
            }

            p {
                color: ${Styles.colors.natural80};
                font-size: ${Styles.font.size.fontsize14};
                font-weight: ${Styles.font.weight.regular};
                margin: 0;
            }
        }
    }
`;

const StyledShopInner = styled.div`
    height: 100vh;
    padding: 0 1rem;
`;

export default Shop;
