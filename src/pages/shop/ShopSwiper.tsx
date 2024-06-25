import { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

import { Styles } from "@/style/Styles";
import "swiper/css";
import "swiper/css/pagination";

import Banner from "@/assets/images/img/img_shop_banner_k.png";

const options: SwiperOptions = {
    modules: [Pagination],
    pagination: {
        clickable: true,
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
    },
    slidesPerView: 1,
    spaceBetween: 10,
};

const ShopSwiper = () => {
    const [index, setIndex] = useState({
        current: 0,
        total: 0,
    });

    const handleIndexChange = (swiper: SwiperClass) => {
        setIndex({
            current: swiper.activeIndex + 1,
            total: swiper.slides.length,
        });
    };

    return (
        <StyledBannerContainer>
            <StyledBanner
                {...options}
                onSwiper={(swiper) => handleIndexChange(swiper)}
                onSlideChange={(swiper) => handleIndexChange(swiper)}
            >
                <SwiperSlide>
                    <StyledBannerItem />
                </SwiperSlide>
                <SwiperSlide>
                    <StyledBannerItem />
                </SwiperSlide>
                <SwiperSlide>
                    <StyledBannerItem />
                </SwiperSlide>
                <SwiperSlide>
                    <StyledBannerItem />
                </SwiperSlide>
                <SwiperSlide>
                    <StyledBannerItem />
                </SwiperSlide>
                <StyledSwiperPagination>
                    <span className="custom_pagination_current">{index.current}</span> /{" "}
                    <span className="custom_pagination_total">{index.total}</span>
                </StyledSwiperPagination>
            </StyledBanner>
        </StyledBannerContainer>
    );
};

export default ShopSwiper;

const StyledBannerContainer = styled.div`
    margin: 0 0 1rem;
    filter: drop-shadow(0px 2px 12px 0px rgba(0, 0, 0, 0.06));
`;

const StyledBanner = styled(Swiper)`
    position: relative;
    border-radius: 0.4rem;
    .swiper-pagination {
        bottom: 0.6rem;
    }
    .swiper-pagination-bullet {
        width: 0.2rem;
        height: 0.2rem;
        background: rgba(30, 30, 32, 0.2);
        opacity: 1;
    }
    .swiper-pagination-bullet-active {
        background: ${Styles.colors.systemWhite};
    }
`;

const StyledBannerItem = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: calc(330 / 335 * 100%);
    background-image: linear-gradient(0deg, #e3e3e3 0%, rgba(217, 217, 217, 0) 30%), url(${Banner});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0.4rem;
    overflow: hidden;
`;

const StyledSwiperPagination = styled.div`
    position: absolute;
    right: 0.4rem;
    bottom: 0.4rem;
    padding: 0.15rem 0.6rem;
    border-radius: 99rem;
    background: rgba(30, 30, 32, 0.2);
    font-size: ${Styles.font.size.fontsize12};
    font-weight: ${Styles.font.weight.medium};
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.5);
    z-index: 500;
    display: flex;
    align-items: center;
    gap: 0.2rem;

    .custom_pagination_current {
        font-weight: ${Styles.font.weight.semibold};
        color: ${Styles.colors.systemWhite};
    }
`;
