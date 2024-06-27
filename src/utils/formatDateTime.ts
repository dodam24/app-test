// 입력된 날짜(문자열)를 Date 객체로 변환 (2023 03 22 09:00:00)
export const parseDate = (dateStr: string) => {
    const year = parseInt(dateStr.substring(0, 4), 10);
    const month = parseInt(dateStr.substring(4, 6), 10) - 1;
    let day = parseInt(dateStr.substring(6, 8), 10);
    let hour = parseInt(dateStr.substring(8, 10), 10);
    const minute = parseInt(dateStr.substring(10, 12), 10);
    const second = parseInt(dateStr.substring(12, 14), 10);

    if (hour >= 24) {
        hour -= 24;
        day += 1;
    }

    const date = new Date(year, month, day, hour, minute, second);
    const originalHour = parseInt(dateStr.substring(8, 10), 10);

    return {
        date,
        originalHour,
    };
};

// 근무 시간 계산 (휴게시간 예외처리 안 되어 있음 (ex. 4시간인 경우 30분, 8시간인 경우 1시간 이상))
// 근무시간 직접 계산하는 것 대신에 work_time 값을 가져와야 하는지 확인 후 코드 수정
export const getWorkTime = (checkedInAt: string, checkedOutAt: string): number => {
    const { date: checkedInTime } = parseDate(checkedInAt);
    const { date: checkedOutTime } = parseDate(checkedOutAt);

    const diff = checkedOutTime.getTime() - checkedInTime.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    return hours;
};

// 시간 형식 변환 (09:00:00)
export const formatTime = (dateStr: string): string => {
    const { date, originalHour } = parseDate(dateStr);
    const hours = originalHour.toString().padStart(2, "0");
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
