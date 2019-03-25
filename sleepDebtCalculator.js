// Get sleep hours per day
const getSleepHours = day => {
    if (day === 'Monday') {
        return 8;
    } else if (day === 'Tuesday') {
        return 7;
    } else if (day === 'Wednesday') {
        return 6;
    } else if (day === 'Thursday') {
        return 6;
    } else if (day === 'Friday') {
        return 6;
    } else if (day === 'Saturday') {
        return 7;
    } else if (day === 'Sunday') {
        return 9.5;
    }
};
// Test
// console.log(getSleepHours('Thursday'));

// Get actual sleep hours
const getActualSleepHours = () =>
    getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday');
// Test
// console.log(getActualSleepHours())

// Get ideal sleep hours
const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7
};
// Test
// console.log(getIdealSleepHours())

// Calculate sleep debt
const calculateSleepDebt = () => {
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log(`Great, you slept ${actualSleepHours} hours! You get the perfect amount of sleep!`);
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`You slept ${actualSleepHours} hours! Maaan, it's too much! You should sleep around ${idealSleepHours} per week.`);
    } else if (actualSleepHours < idealSleepHours) {
        console.log(`You slept ${actualSleepHours} hours during the week. You should sleep more! Do yourself a favor and get some rest ;) You should sleep around ${idealSleepHours} per week.`);
    }
};
// Execute function to calculate sleep debt
calculateSleepDebt()