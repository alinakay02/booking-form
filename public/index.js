// функция извлечения данных из формы
function get_from_form() {
    const formElement = document.getElementById('form');
    const formData = new FormData(formElement);
    let form_info = {};
    // извлекаем данные из формы:
    const s_tower = formData.get('select_tower');
    const s_floor = formData.get('select_floor');
    const s_room = formData.get('select_room');
    const s_date = formData.get('select_date');
    const s_time = formData.get('select_time');
    const s_comment = formData.get('comment');

    // проверка, заполнены ли все обязательные поля
    // если все данные заполнены, то данные обрабатываются
    if (s_tower !== '' && s_floor !== '' && s_room !== '' && s_date !== '' && s_time !== '') {
        // комментарий в данном случае - необязательный параметр, поэтому
        // если это поле не заполнено, в объект данный ключ не добавится
        if (s_comment !== '') {
            form_info = {
                tower: s_tower,
                floor: s_floor,
                room: s_room,
                date: s_date,
                time: s_time,
                comment: s_comment
            }
        }
        else {
            form_info = {
                tower: s_tower,
                floor: s_floor,
                room: s_room,
                date: s_date,
                time: s_time
            }
        }
        return form_info;
    }
    else {
        return '';
    }
}

// функция вывода данных из формы в консоль
function checking_for_emptiness(form_info) {
    return form_info !== '';
}

// функция, срабатывающая по нажатию на кнопки.
// по e.target определяет какое событие произошло и
// в зависимости от этого выполняет действия
function actions(event) {
    event.preventDefault();
    const form = document.querySelector('form');
    const class_list = event.target.classList;
    const send_button = 'send';       // распознавание нажатия на кнопку Отправить
    const clear_button = 'clear';     // распознавание нажатия на кнопку Очистить
    // если нажата кнопка "Отправить", выводим данные на консоль
    if (class_list.contains(send_button)) {
        const current_booked = JSON.parse(window.localStorage.getItem('booked'));
        const new_info = get_from_form();
        if (checking_for_emptiness(new_info)) {
            if (checking_for_reservations(new_info, current_booked) === false) {
                console.log(JSON.stringify(new_info));  // вывод данных в формате json
                add_to_LocalStorage(new_info, current_booked);
                alert(`Переговорная № ${new_info.room} на ${new_info.floor} этаже башни ${new_info.tower} успешно забронирована на ${new_info.time} ${new_info.date} `);
                form.reset();
            }
            else {
                alert('Переговорная уже забронирована. Выберите другую');
            }
        }
        else {
            alert('Заполните пустые поля!');
        }
    }
    // если нажата кнопка "Очистить", очищаем форму
    if (class_list.contains(clear_button)) {
        form.reset();
    }
}

// ищет все совпадения по ключу [key]
function found_booked(new_info, current_booked, key) {
    return current_booked.filter(e => e[key] === new_info[key]);
}

// функция выполняет проверку на то, свободна ли комната, которую хотят забронировать
// true - комната уже занята
function checking_for_reservations(new_info, current_booked) {
    const f_tower = found_booked(new_info, current_booked, 'tower');
    if (f_tower.length > 0) {
        const f_floor = found_booked(new_info, f_tower, 'floor');
        if (f_floor.length > 0) {
            const f_room = found_booked(new_info, f_floor, 'room');
            if (f_room.length > 0) {
                const f_date = found_booked(new_info, f_room, 'date');
                if (f_date.length > 0) {
                    const f_time = found_booked(new_info, f_date, 'time');
                    return f_time.length !== 0;
                }
                else
                    return false;
            }
            else
                return false;
        }
        else
            return false;
    }
    else
        return false;
}

// добавление в локальное хранилище (необходимо для того, чтобы в дальнейшем
// проверить, свободна ли комната, которую хотят забронировать
function add_to_LocalStorage(new_info, current_booked) {
    const updated_booked = [...current_booked, new_info];
    window.localStorage.setItem('booked', JSON.stringify(updated_booked));
}

const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', actions);

window.localStorage.setItem('booked', JSON.stringify([]));