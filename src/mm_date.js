// вычисление минимально возможной даты для календаря
const min_date = () => {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    if (day < 10) {
        day ='0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    today = year + '-' + month + '-' + day;

    return today;
}

// вычисление максимально возможной даты для календаря
const max_date = () => {
    let max_day = new Date();
    let day = max_day.getDate();
    let max_month = max_day.getMonth() + 1;
    let year = max_day.getFullYear();

    // перед увеличением текущего месяца проверим его номер, для 3-х месяцев надо изменять номер вручную
    const max_m = (max_month) => {
        return max_month + 3 - 12;
    }

    if (max_month >= 10) {
        max_month = max_m(max_month);   // корректируем месяц
        year += 1;                      // корректируем год
    }
    else {
        max_month += 3;
    }

    if (day < 10) {
        day ='0' + day;
    }

    if (max_month < 10) {
        max_month = '0' + max_month;
    }
    max_day = year + '-' + max_month + '-' + day;

    return max_day;
}

export {min_date, max_date};
