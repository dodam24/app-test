import { Swiper, SwiperSlide } from "swiper/react";
import Button from "@/components/button/Button";
import OverlayLayout from "@/components/layout/OverlayLayout";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { dayList, monthList, spreadDate, yearList } from "@/utils/formatDateTime";
import { DateOverlayState } from "@/hooks/useDateOverlay";
import styled from "styled-components";
import { Styles } from "@/style/Styles";
import "swiper/css";
import { SwiperOptions } from "swiper/types";

const swiperOptions: SwiperOptions = {
    direction: "vertical",
    autoHeight: true,
    slidesPerView: 4,
    spaceBetween: -50,
    centeredSlides: true,
    slideToClickedSlide: true,
    cssMode: false,
};

interface DatePickerOverlayProps {
    overlayState: DateOverlayState;
    setOverlayState: Dispatch<SetStateAction<DateOverlayState>>;
    hideOverlay: () => void;
}

const DatePickerOverlay = ({
    overlayState,
    setOverlayState,
    hideOverlay,
}: DatePickerOverlayProps) => {
    const [pickDate, setPickDate] = useState({
        initSelectedYear: 0,
        initSelectedMonth: 0,
        initSelectedDay: 0,
        selectedYear: 0,
        selectedMonth: 0,
        selectedDay: 0,
        yearIndex: 0,
        monthIndex: 0,
        dayIndex: 0,
    });

    useEffect(() => {
        if (overlayState.isStartDate && overlayState.startDate) {
            const { year, month, day } = spreadDate(overlayState.startDate);
            setPickDate({
                ...pickDate,
                initSelectedYear: year,
                initSelectedMonth: month,
                initSelectedDay: day,
                selectedYear: year,
                selectedMonth: month,
                selectedDay: day,
                yearIndex: Number(year.toString().substring(1, 4)) - 1,
                monthIndex: month - 1,
                dayIndex: day - 1,
            });
        } else if (overlayState.isEndDate && overlayState.endDate) {
            const { year, month, day } = spreadDate(overlayState.endDate);
            setPickDate({
                ...pickDate,
                initSelectedYear: year,
                initSelectedMonth: month,
                initSelectedDay: day,
                selectedYear: year,
                selectedMonth: month,
                selectedDay: day,
                yearIndex: Number(year.toString().substring(1, 4)) - 1,
                monthIndex: month - 1,
                dayIndex: day - 1,
            });
        }

        return () => {
            setPickDate({
                initSelectedYear: 0,
                initSelectedMonth: 0,
                initSelectedDay: 0,
                selectedYear: 0,
                selectedMonth: 0,
                selectedDay: 0,
                yearIndex: 0,
                monthIndex: 0,
                dayIndex: 0,
            });
        };
    }, [overlayState]);

    const handleFilterInactive = () => {
        if (overlayState.isStartDate) {
            setOverlayState({
                ...overlayState,
                startDate: `${pickDate.initSelectedYear}${pickDate.initSelectedMonth < 10 ? "0" + pickDate.initSelectedMonth : pickDate.initSelectedMonth}${pickDate.initSelectedDay < 10 ? "0" + pickDate.initSelectedDay : pickDate.initSelectedDay}`,
                isActive: false,
                isStartDate: false,
                isEndDate: false,
            });
        } else {
            setOverlayState({
                ...overlayState,
                endDate: `${pickDate.initSelectedYear}${pickDate.initSelectedMonth < 10 ? "0" + pickDate.initSelectedMonth : pickDate.initSelectedMonth}${pickDate.initSelectedDay < 10 ? "0" + pickDate.initSelectedDay : pickDate.initSelectedDay}`,
                isActive: false,
                isStartDate: false,
                isEndDate: false,
            });
        }
    };

    const handleSelect = () => {
        if (overlayState.isStartDate) {
            setOverlayState({
                ...overlayState,
                startDate: `${pickDate.selectedYear.toString()}${pickDate.selectedMonth < 10 ? "0" + pickDate.selectedMonth : pickDate.selectedMonth.toString()}${pickDate.selectedDay < 10 ? "0" + pickDate.selectedDay : pickDate.selectedDay.toString()}`,
                isActive: false,
                isStartDate: false,
                isEndDate: false,
            });
        } else {
            setOverlayState({
                ...overlayState,
                endDate: `${pickDate.selectedYear.toString()}${pickDate.selectedMonth < 10 ? "0" + pickDate.selectedMonth : pickDate.selectedMonth.toString()}${pickDate.selectedDay < 10 ? "0" + pickDate.selectedDay : pickDate.selectedDay.toString()}`,
                isActive: false,
                isStartDate: false,
                isEndDate: false,
            });
        }
    };

    return (
        <OverlayLayout
            isActive={overlayState.isActive}
            height={50}
            isHeader={false}
            hideOverlay={hideOverlay}
        >
            <StyledDatePickerBody>
                {pickDate.initSelectedYear &&
                    pickDate.initSelectedMonth &&
                    pickDate.initSelectedDay && (
                        <>
                            <Swiper
                                {...swiperOptions}
                                onRealIndexChange={(swiper) => {
                                    if (overlayState.isStartDate) {
                                        const startYear = Number(
                                            swiper?.slides[swiper.activeIndex]
                                                ?.querySelector("div")
                                                ?.innerText.replace(/.$/, ""),
                                        );
                                        setPickDate({
                                            ...pickDate,
                                            selectedYear: Number.isNaN(startYear)
                                                ? pickDate.selectedYear
                                                : startYear,
                                        });
                                    } else {
                                        const endYear = Number(
                                            swiper?.slides[swiper.activeIndex]
                                                ?.querySelector("div")
                                                ?.innerText.replace(/.$/, ""),
                                        );
                                        setPickDate({
                                            ...pickDate,
                                            selectedYear: Number.isNaN(endYear)
                                                ? pickDate.selectedYear
                                                : endYear,
                                        });
                                    }
                                }}
                                onInit={(swiper) => swiper.slideTo(pickDate.yearIndex)}
                            >
                                {yearList.map((year, index) => {
                                    if (year <= new Date().getFullYear()) {
                                        return (
                                            <SwiperSlide key={index} className="year">
                                                <div>{year}년</div>
                                            </SwiperSlide>
                                        );
                                    }
                                })}
                            </Swiper>
                            <Swiper
                                {...swiperOptions}
                                onRealIndexChange={(swiper) => {
                                    if (overlayState.isStartDate) {
                                        const startMonth = Number(
                                            swiper?.slides[swiper.activeIndex]
                                                ?.querySelector("div")
                                                ?.innerText.replace(/.$/, ""),
                                        );
                                        setPickDate({
                                            ...pickDate,
                                            selectedMonth: Number.isNaN(startMonth)
                                                ? pickDate.selectedMonth
                                                : startMonth,
                                        });
                                    } else {
                                        const endMonth = Number(
                                            swiper?.slides[swiper.activeIndex]
                                                ?.querySelector("div")
                                                ?.innerText.replace(/.$/, ""),
                                        );
                                        setPickDate({
                                            ...pickDate,
                                            selectedMonth: Number.isNaN(endMonth)
                                                ? pickDate.selectedMonth
                                                : endMonth,
                                        });
                                    }
                                }}
                                onInit={(swiper) => swiper.slideTo(pickDate.monthIndex)}
                            >
                                {monthList.map((month, index) => (
                                    <SwiperSlide key={index} className="month">
                                        <div>{month}월</div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <Swiper
                                {...swiperOptions}
                                onRealIndexChange={(swiper) => {
                                    if (overlayState.isStartDate) {
                                        const startDay = Number(
                                            swiper?.slides[swiper.activeIndex]
                                                ?.querySelector("div")
                                                ?.innerText.replace(/.$/, ""),
                                        );
                                        setPickDate({
                                            ...pickDate,
                                            selectedDay: Number.isNaN(startDay)
                                                ? pickDate.selectedDay
                                                : startDay,
                                        });
                                    } else {
                                        const endDay = Number(
                                            swiper?.slides[swiper.activeIndex]
                                                ?.querySelector("div")
                                                ?.innerText.replace(/.$/, ""),
                                        );
                                        setPickDate({
                                            ...pickDate,
                                            selectedDay: Number.isNaN(endDay)
                                                ? pickDate.selectedDay
                                                : endDay,
                                        });
                                    }
                                }}
                                onInit={(swiper) => swiper.slideTo(pickDate.dayIndex)}
                            >
                                {dayList.map((day, index) => (
                                    <SwiperSlide key={index} className="day">
                                        <div>{day}일</div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </>
                    )}
                <div className="central_active"></div>
            </StyledDatePickerBody>
            <StyledDatePickerButtonGroup>
                <Button className="cancel" onClick={handleFilterInactive}>
                    취소
                </Button>
                <Button onClick={handleSelect}>확인</Button>
            </StyledDatePickerButtonGroup>
        </OverlayLayout>
    );
};

export default DatePickerOverlay;

const StyledDatePickerBody = styled.div`
    position: relative;
    height: calc(100% - 3rem);
    display: flex;
    overflow-y: hidden;
    padding: 0.7rem 0 1.25rem 0;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.8) 70%,
            rgba(255, 255, 255, 0.5) 90%,
            rgba(255, 255, 255, 0) 100%
        );
        width: 100%;
        height: 13.5%;
        z-index: 999;
        pointer-events: none;
    }

    &::after {
        content: "";
        position: absolute;
        bottom: 0.55rem;
        left: 0;
        background: linear-gradient(
            to top,
            rgba(255, 255, 255, 0.8) 10%,
            rgba(255, 255, 255, 0.5) 70%,
            rgba(255, 255, 255, 0) 100%
        );
        width: 100%;
        height: 14%;
        z-index: 999;
        pointer-events: none;
    }

    div.central_active {
        position: absolute;
        top: calc(100% / 2 - 5px - 1.25rem);
        left: 0;
        width: 100%;
        height: 2.5rem;
        background-color: #f3f8ff;
        border-radius: 0.4rem;
    }

    .swiper-autoheight,
    .swiper-autoheight .swiper-slide {
        width: 100%;
        clip-path: border-box;

        &.swiper-slide-active {
            div {
                color: ${Styles.colors.natural100};
                font-size: ${Styles.font.size.fontsize16};
                font-weight: ${Styles.font.weight.semibold};
            }
        }

        div {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            color: ${Styles.colors.natural60};
            font-size: ${Styles.font.size.fontsize16};
            font-weight: ${Styles.font.weight.regular};
            height: 2.5rem;
        }
    }
`;

const StyledDatePickerButtonGroup = styled.div`
    display: flex;
    gap: 0.45rem;

    button {
        flex: 1;

        &.cancel {
            color: ${Styles.colors.natural60};
            background: ${Styles.colors.natural00};
        }
    }
`;
