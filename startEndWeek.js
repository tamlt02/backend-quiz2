var moment = require('moment-timezone');
function findStartEndWeek(input, timezone) {
    if (typeof timezone !== 'string') {
        console.log(">>> timezone not string, set timezone 'Asia/Ho_Chi_Minh'")
        timezone = "Asia/Ho_Chi_Minh";
    }
    if (moment.tz.zone(timezone) === null) {
        console.log(">>> timezone null, set timezone 'Asia/Ho_Chi_Minh'")
        timezone = "Asia/Ho_Chi_Minh";
    }
    if (!moment(input, 'YYYY-MM-DDTHH:mm:ss.sss', true).isValid()) {
        console.log(">>> input false, set day 01-01-2022");
        input = '2022-01-01T00:00:00.000';
    }
    let date = new Date(input);
    let firstDay = moment.tz(moment(date).startOf('isoweek'), timezone).format();
    let lastDay = moment.tz(moment(date).endOf('isoweek'), timezone).format();

    return {
        firstDay,
        lastDay,
    };
};
// Asia/Ho_Chi_Minh UTC+7  Africa/Abidjan UTC+0 Africa/Asmera UTC+3 America/Asuncion UTC-4
console.log(findStartEndWeek('2022-10-23T00:00:00.000', 'America/Asuncion'))