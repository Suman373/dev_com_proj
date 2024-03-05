export const TimeGap = (date) => {
		
    const postTime = new Date(date);
    const currTime = new Date();

    // year ago
    let yearsGap = currTime.getFullYear() - postTime.getFullYear();
    if (yearsGap > 0) {
    return `${yearsGap} year${yearsGap > 1 ? "s" : ""} ago`;
    }

    // months ago
    let monthsGap = currTime.getMonth() - postTime.getMonth();
    if (monthsGap > 0) {
    return `${monthsGap} month${monthsGap > 1 ? "s" : ""} ago`;
    }

    // weeks ago
    let daysGap = currTime.getDate() - postTime.getDate();
    if (daysGap > 7) {
    return `${Math.round(daysGap / 7)} week${
        Math.round(daysGap / 7) > 1 ? "s" : ""
    } ago`;
    }

    // days ago
    if (daysGap > 0) {
    return `${daysGap} day${daysGap > 1 ? "s" : ""} ago`;
    }

    // hours ago
    let hoursGap = currTime.getHours() - postTime.getHours();
    if (hoursGap > 0) {
    return `${hoursGap} hour${hoursGap > 1 ? "s" : ""} ago`;
    }

    // minutes ago
    let minutesGap = currTime.getMinutes() - postTime.getMinutes();
    if (minutesGap > 0) {
    return `${minutesGap} minute${minutesGap > 1 ? "s" : ""} ago`;
    }

    // seconds ago
    let secondsGap = currTime.getSeconds() - postTime.getSeconds();
    return `${secondsGap} second${secondsGap > 1 ? "s" : ""} ago`;
};