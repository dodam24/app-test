// 날짜(문자열)를 Date 객체로 변환 (2023 03 22 09:00:00)
export const parseDate = (dateStr: string) => {
    const year = parseInt(dateStr.substring(0, 4), 10);
    const month = parseInt(dateStr.substring(4, 6), 10) - 1;
    const day = parseInt(dateStr.substring(6, 8), 10);
    const hour = parseInt(dateStr.substring(8, 10), 10);
    const minute = parseInt(dateStr.substring(10, 12), 10);
    const second = parseInt(dateStr.substring(12, 14), 10);

    // date: Wed Mar 15 2023 09:00:00 GMT+0900 (한국 표준시)
    const date = new Date(year, month, day, hour, minute, second);
    return { date, hour };
};

// 현재 month의 모든 날짜 받아오기
export const currentMonth = new Date();
export const curMonthStartDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
export const curMonthEndDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);

export const getAllDatesInMonth = (): Date[] => {
    const dates: Date[] = [];
    const startDate = curMonthStartDate.getDate();
    const endDate = curMonthEndDate.getDate();

    for (let i = startDate; i <= endDate; i++) {
        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
        dates.push(date);
    }
    return dates;
};

// 날짜 형식 변환 (2023-03-22)
export const formatDate = (dateStr: string): string => {
    const { date } = parseDate(dateStr);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
};
// 날짜 형식 변환 (2023.02.23 (목))
export const formatDateWithDay = (date: Date): string => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const dayOfWeek = daysOfWeek[date.getDay()];
    return `${year}.${month}.${day} (${dayOfWeek})`;
};

// 시간 형식 변환 (09:00:00 또는 09 : 00 : 00)
export const formatTime = (dateOrString: string | Date, withSpace: boolean = false): string => {
    let date: Date;
    let originalHour: number;

    if (typeof dateOrString === "string") {
        const { date: parsedDate, hour } = parseDate(dateOrString);
        date = parsedDate;
        originalHour = hour;
    } else {
        date = dateOrString;
        originalHour = date.getHours();
    }

    let hours = originalHour.toString().padStart(2, "0");
    if (originalHour >= 24) {
        hours = originalHour.toString();
    } else {
        hours = date.getHours().toString().padStart(2, "0");
    }
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const separator = withSpace ? " : " : ":";
    return `${hours}${separator}${minutes}${separator}${seconds}`;
};

// 요일 반환
export const getDayOfWeek = (dateStr: string): string => {
    const { date } = parseDate(dateStr);
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    return daysOfWeek[date.getDay()];
};

// 근무 시간 계산: work_time(초) 받아와서 '시간' 단위로 표시
export const getWorkTime = (checkedInAt: string, checkedOutAt: string): number => {
    const { date: checkedInTime } = parseDate(checkedInAt);
    const { date: checkedOutTime } = parseDate(checkedOutAt);
    const diff = checkedOutTime.getTime() - checkedInTime.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));

    const breakTime = hours > 8 ? 1 : 0;
    const realWorkTime = hours - breakTime;
    return realWorkTime;
};

// 퇴근 시간이 24시를 초과할 경우
export const calcOvertime = (checkedOutAt: string) => {
    const checkedOutHour = parseInt(checkedOutAt.substring(8, 10));
    const isOvertime = checkedOutHour >= 24;
    return { checkedOutHour, isOvertime };
};

// 퇴근 시간이 24시를 초과할 경우 (근무시간 초과 표시)
// const yoilList = [
//     { day: 0, yoli: "일" },
//     { day: 1, yoli: "월" },
//     { day: 2, yoli: "화" },
//     { day: 3, yoli: "수" },
//     { day: 4, yoli: "목" },
//     { day: 5, yoli: "금" },
//     { day: 6, yoli: "토" },
// ];

// 2024-04-30T16:08:09.306371+09:00 -> 2024. 04. 30.
export const formatDateOnly = (date: string): string => {
    return new Date(date)
        .toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        })
        .replace(/.$/, "");

    // const getDate = new Date(date);
    // const year = getDate.getFullYear();
    // const month = getDate.getMonth() < 10 ? "0" + (getDate.getMonth() + 1) : getDate.getMonth() + 1;
    // const day = getDate.getDate() < 10 ? "0" + getDate.getDate() : getDate.getDate();

    // return `${year}. ${month}. ${day}`;
};

// 2024-04-30T16:08:09.306371+09:00 -> 2024. 04. 30. (화)
export const formatDateWithYoil = (date: string): string => {
    return new Date(date).toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        weekday: "short",
    });
    // const getDate = new Date(date);
    // const year = getDate.getFullYear();
    // const month = getDate.getMonth() < 10 ? "0" + (getDate.getMonth() + 1) : getDate.getMonth() + 1;
    // const day = getDate.getDate() < 10 ? "0" + getDate.getDate() : getDate.getDate();
    // const yoli = yoilList.find((yoli) => yoli.day === getDate.getDay())?.yoli;

    // return `${year}. ${month}. ${day}(${yoli})`;
};

// 2024-04-30T16:08:09.306371+09:00 -> 2024. 04. 30. 16:08:09
export const formatDateTime = (date: string): string => {
    return new Date(date).toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h24",
    });
    // const getDate = new Date(date);
    // const year = getDate.getFullYear();
    // const month = getDate.getMonth() < 10 ? "0" + (getDate.getMonth() + 1) : getDate.getMonth() + 1;
    // const day = getDate.getDate() < 10 ? "0" + getDate.getDate() : getDate.getDate();
    // const hour = getDate.getHours() < 10 ? "0" + getDate.getHours() : getDate.getHours();
    // const minute = getDate.getMinutes() < 10 ? "0" + getDate.getMinutes() : getDate.getMinutes();
    // const second = getDate.getSeconds() < 10 ? "0" + getDate.getSeconds() : getDate.getSeconds();

    // return `${year}. ${month}. ${day} ${hour}:${minute}:${second}`;
};

// (new Date() (Fri Jun 28 2024 15:55:01 GMT+0900 (한국 표준시)), 6) ->
// {
//     startDate: 20240628,
//     endDate: 20231228
// }
export const getPeriodDate = (
    date: Date,
    period: number,
): {
    // startYear: number;
    // startMonth: number;
    // startDay: number;
    // endYear: number;
    // endMonth: number;
    // endDay: number;
    startDate: string;
    endDate: string;
} => {
    let year = date.getFullYear();
    let month = date.getMonth();
    const day = date.getDate();

    const startDate = `${year}${month < 10 ? "0" + (month + 1) : month + 1}${day < 10 ? "0" + day : day}`;
    // const startYear = year;
    // const startMonth = month;
    // const startDay = day;

    if (month - period === 0) {
        year--;
        month = 12;
    } else if (month - period < 0) {
        year--;
        month = 12 - period;
    } else {
        month -= period;
    }

    const endDate = `${year}${month < 10 ? "0" + (month + 1) : month + 1}${day < 10 ? "0" + day : day}`;
    // const endYear = year;
    // const endMonth = month;
    // const endDay = day;

    return { startDate, endDate };
    // return { startYear, startMonth, startDay, endYear, endMonth, endDay, startDate, endDate };
};

// 20230321 -> 2023. 03. 21
export const parseDate2 = (dateStr?: string): string | undefined => {
    if (dateStr) {
        const year = parseInt(dateStr.substring(0, 4), 10);
        const month = parseInt(dateStr.substring(4, 6), 10) - 1;
        const day = parseInt(dateStr.substring(6, 8), 10);

        // replace(/.$/, "") : 제일 끝 문자열 삭제
        return new Date(year, month, day)
            .toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            })
            .replace(/.$/, "");
    }

    return undefined;
};

// 20230321 -> { 2023, 03, 21 }
export const spreadDate = (dateStr: string): { year: number; month: number; day: number } => {
    const year = parseInt(dateStr.substring(0, 4), 10);
    const month = parseInt(dateStr.substring(4, 6), 10);
    const day = parseInt(dateStr.substring(6, 8), 10);

    return { year, month, day };
};

export const yearList = [
    2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016,
    2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032,
    2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048,
    2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064,
    2065, 2066, 2067, 2068, 2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080,
    2081, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2092, 2093, 2094, 2095, 2096,
    2097, 2098, 2099, 2100,
];

export const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const dayList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 31,
];

// 2024-04-30T16:08:09.306371+09:00 -> 16:08
export const formatHourMinute = (date: string): string => {
    return new Date(date).toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h24",
    });
};

export const formatNewDate = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}${month}${day}`;
};
