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

// вычисление максимально возможной даты для календаря
const max_date = () => {
    let max_day = new Date();
    let m_day = max_day.getDate();
    let max_month = max_day.getMonth() + 1;
    let year = max_day.getFullYear();

    // перед увеличением текущего месяца проверим его номер, для 3-х месяцев надо изменять номер вручную
    const month_days = (max_month) => {
        let num = 0;
        switch (max_month){
            case 1:
            case 3:
            case '5':
            case 7:
            case 9:
            case 10:
            case 12:
                num = 31;
                break;
            case 4:
            case 6:
            case 8:
            case 11:
                num = 30;
                break;
            case 2:
                num = 28;
                break;
            default:
                num = max_month;
        }
        return num;
    }

    const days_in_month = month_days();

    // перед увеличением текущей даты проверим на корректность данные,
    // для последних дней в месяце надо изменять дату вручную
    if (m_day > (days_in_month - 4)) {
        m_day = m_day + 5 - days_in_month;
        max_month += 1;
    }
    else {
        m_day += 4;
    }

    m_day = correct_data(m_day);
    max_month = correct_data(max_month);

    max_day = year + '-' + max_month + '-' + m_day;

    return max_day;
}

export {min_date, max_date};
