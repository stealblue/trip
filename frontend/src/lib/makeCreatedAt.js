export const makeCreatedAt = (time) => {
    const yaerMonthDay = time.substr(0, 10);
    const hourMinuteSeconds = time.substr(11, 8);
    const editedTime = yaerMonthDay + " / " + hourMinuteSeconds;
    return editedTime;
};