function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function addHours(date, hours) {
    date.setTime(date.getTime() + (hours*60*60*1000));
    return date;
}

export {addDays, addHours}