// 입력된 날짜(문자열)를 Date 객체로 변환 (2023 03 22 09:00:00)
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
// export const currentMonth = new Date();
// export const curMonthStartDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
// export const curMonthEndDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);

// export const getAllDatesInMonth = (): Date[] => {
//     const dates: Date[] = [];
//     const startDate = curMonthStartDate.getDate();
//     const endDate = curMonthEndDate.getDate();

//     for (let i = startDate; i <= endDate; i++) {
//         const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
//         dates.push(date);
//     }
//     return dates;
// };

// 더보기 기능 구현 test
// 특정 달의 모든 날짜를 가져오는 함수
export const getAllDatesInMonth = (year: number, month: number): Date[] => {
    const dates: Date[] = [];
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);

    for (let i = startDate.getDate(); i <= endDate.getDate(); i++) {
        const date = new Date(year, month, i);
        dates.push(date);
    }
    return dates;
};

// 현재 달의 데이터를 가져오는 함수
export const getCurrentMonthDates = (): Date[] => {
    const currentMonth = new Date();
    return getAllDatesInMonth(currentMonth.getFullYear(), currentMonth.getMonth());
};
// 더 보기 버튼 클릭 시, 이전 달의 데이터를 가져오는 함수
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

export const getPreviousMonthDates = (): Date[] => {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    return getAllDatesInMonth(currentYear, currentMonth);
};

// month 비교
// export const isSameMonth = (date1: Date, date2: Date): boolean => {
//     return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth();
// };
// console.log(isSameMonth(new Date(), new Date()));

// 날짜 형식 변환 (2023-03-22)
export const formatDate = (dateStr: string): string => {
    const { date } = parseDate(dateStr);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
};

// 시간 형식 변환 (09:00:00)
export const formatTime = (dateStr: string): string => {
    const { date, hour } = parseDate(dateStr);
    const hours = hour.toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
};

// 요일 반환
export const getDayOfWeek = (dateStr: string): string => {
    const { date } = parseDate(dateStr);
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    return daysOfWeek[date.getDay()];
};

// 근무 시간 계산 (work_time 구할 때)
export const getWorkTime = (checkedInAt: string, checkedOutAt: string): number => {
    const { date: checkedInTime } = parseDate(checkedInAt);
    const { date: checkedOutTime } = parseDate(checkedOutAt);
    const diff = checkedOutTime.getTime() - checkedInTime.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    // 휴게 시간 처리
    const intervals = Math.floor(hours / 4);
    const breakTime = intervals * 0.5;
    const realWorkTime = hours - breakTime;
    return realWorkTime;
};

// 퇴근 시간이 24시를 초과할 경우 (근무시간 초과 표시)
export const calcOvertime = (checkedOutAt: string) => {
    const checkedOutHour = parseInt(checkedOutAt.substring(8, 10));
    const isOvertime = checkedOutHour >= 24;
    return { checkedOutHour, isOvertime };
};
