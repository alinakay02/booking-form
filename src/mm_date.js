// корректировка формата вывода
const correct_data = (day) => {
    if (day < 10)
        return '0' + day;
    else
        return day;
}

// вычисление минимально возможной даты для календаря
const min_date = () => {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    day = correct_data(day);
    month = correct_data(month);

    today = year + '-' + month + '-' + day;

    return today;
}

// вычисление максимально возможной даты для календаря (на 1 месяц больше текущей даты)
const max_date = () => {
    let max_day = new Date();
    let m_day = max_day.getDate();
    let max_month = max_day.getMonth() + 1;
    let year = max_day.getFullYear();

    if (max_month === 12) {
        max_month = 1;
        year +=1;
    }
    else {
        max_month += 1;
    }

    m_day = correct_data(m_day);
    max_month = correct_data(max_month);

    max_day = year + '-' + max_month + '-' + m_day;

    return max_day;
}

export {min_date, max_date};
