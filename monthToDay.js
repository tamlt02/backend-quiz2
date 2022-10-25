var moment = require('moment-timezone');
function findMonthToDay(input, timezone) {
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
    // set moment().date(1).hours(0).minutes(0).seconds(0).milliseconds(0);
    let firstDay = moment.tz(moment(date).startOf('month'), timezone).format();
    // set the moment to 23:59:59.999 this day
    let lastDay = moment.tz(moment(date).endOf('day'), timezone).format();
    return { 
        firstDay, 
        lastDay,
    };
}
// Asia/Ho_Chi_Minh UTC+7  Africa/Abidjan UTC+0 Africa/Asmera UTC+3 America/Asuncion UTC-4
console.log(findMonthToDay('2022-10-24T00:00:00.000', 'Asia/Ho_Chi_Minh'))