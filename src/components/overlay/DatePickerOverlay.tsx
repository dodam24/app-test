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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                <div className="topBlur" />
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
    height: calc(100% - 3rem);
    display: flex;
    overflow-y: hidden;
    padding: 0.7rem 0 1.25rem 0;

    .swiper-autoheight,
    .swiper-autoheight .swiper-slide {
        width: 100%;
        clip-path: border-box;

        &.year {
            border-top-left-radius: 0.4rem;
            border-bottom-left-radius: 0.4rem;
        }
        &.day {
            border-top-right-radius: 0.4rem;
            border-bottom-right-radius: 0.4rem;
        }

        &.swiper-slide-active {
            div {
                background-color: ${Styles.colors.primary10};
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

    .topBlur {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 3.5rem;
        background: linear-gradient(
            to top,
            rgba(255, 255, 255, 0) 10%,
            rgba(255, 255, 255, 0.25) 25%,
            rgba(255, 255, 255, 0.5) 50%,
            rgba(255, 255, 255, 0.75) 75%,
            rgba(255, 255, 255, 1) 100%
        );
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
