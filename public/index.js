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
        if (out_to_console()) {
            form.reset();
        }
    }
    // если нажата кнопка "Очистить", очищаем форму
    if (class_list.contains(clear_button)) {
        form.reset();
    }
}

// функция вывода данных из формы в консоль
function out_to_console() {
    const formElement = document.getElementById('form');
    const formData = new FormData(formElement);

    // извлекаем данные из формы:
    let s_tower = formData.get('select_tower');
    let s_floor = formData.get('select_floor');
    let s_room = formData.get('select_room');
    let s_date = formData.get('select_date');
    let s_time = formData.get('select_time');
    let s_comment = formData.get('comment');

    // проверка, заполнены ли все обязательные поля
    // если все данные заполнены, то данные обрабатываются
    if (s_tower !== '' && s_floor !== '' && s_room !== '' && s_date !== '' && s_time !== '') {
        // комментарий в данном случае - необязательный параметр, поэтому
        // если это поле не заполнено, в объект данный ключ не добавится
        if (s_comment !== '') {
            // объект, со всеми данными из формы, для преобразования в json
            const info_obj = {
                'башня': s_tower,
                'этаж': s_floor,
                'переговорная №': s_room,
                'дата': s_date,
                'время': s_time,
                'комментарий': s_comment
            }
            console.log(JSON.stringify(info_obj));  // вывод данных в формате json
        }
        else {
            // объект, со всеми данными из формы, для преобразования в json
            const info_obj = {
                'башня': s_tower,
                'этаж': s_floor,
                'переговорная №': s_room,
                'дата': s_date,
                'время': s_time
            }
            console.log(JSON.stringify(info_obj));  // вывод данных в формате json
        }
        return true
    }
    else {
        alert("Заполните пустые поля!");
        return false
    }
}

const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', actions);