import React from "react";
import {useState} from "react";
import {min_date, max_date} from "./mm_date";

function ToTower() {
    let tower = React.createRef();

    const arr_towers = ['', 'А', 'Б'];
    const [value, setValue] = useState('');
    const options = arr_towers.map((text, index) => {
        return <option value={text} key={index}>{text}</option>;
    });

    return (
        <select name="select_tower" id="tower" value={value} ref={tower} onChange={(event) =>
            setValue(event.target.value)}>
            {options}
        </select>
  );
}

class Tower extends React.Component {

    render() {
        return (
            <>
                <div className="content1">
                    <label htmlFor="select_tower">Выберите башню</label>
                </div>
                <div className="content">
                    <ToTower />
                </div>
            </>
        );
    }
}
function ToFloor() {
    const arr_floors = ['']
    let i = 3;
    while (i <= 27) {
        arr_floors.push(i);
        i++;
    }

    const [value, setValue] = useState('');
    const options = arr_floors.map((text, index) => {
        return <option value={text} key={index}>{text}</option>;
    });

    return (
        <select name="select_floor" value={value} onChange={(event) =>
        setValue(event.target.value)}>
            {options}
        </select>
    );
}

class Floor extends React.Component {
    render() {
        return (
            <>
                <div className="content1">
                    <label htmlFor="select_floor">Выберите этаж</label>
                </div>

                <div className="content">
                    <ToFloor />
                </div>
            </>
        );
    }
}

function ToRoom() {
    const arr_rooms = [''];
    let i = 1;
    while (i <= 10) {
        arr_rooms.push(i);
        i++;
    }
    const [value, setValue] = useState('');
    const options = arr_rooms.map((text, index) => {
        return <option value={text} key={index}>{text}</option>;
    });

    return (
        <select name="select_room" value={value} onChange={(event) =>
        setValue(event.target.value)}>
            {options}
        </select>
    );
}

class Room extends React.Component {
    render() {
        return (
            <>
                <div className="content1">
                    <label htmlFor="select_room">Выберите переговорную</label>
                </div>

                <div className="content">
                    <ToRoom />
                </div>
            </>
        );
    }
}

function ToDate() {
    const minDay = min_date();
    const maxDay = max_date();
    return <input type="date" className="select_date" id="select_date" name="select_date" min={minDay} max={maxDay} />;
}

class Date extends React.Component {
    render() {
        return (
            <>
                <div className="content1">
                    <label htmlFor="select_date">Выберите дату</label>
                </div>

                <div className="content">
                    <ToDate />
                </div>
            </>
        );
    }
}

function ToTime() {
    const arr_time = ['', '10.00-11.00', '11.00-12.00', '12.00-13.00', '14.00-15.00', '15.00-16.00', '16.00-17.00'];
    const [value, setValue] = useState('');
    const options = arr_time.map((text, index) => {
        return <option value={text} key={index}>{text}</option>;
    });

    return (
        <select name="select_time" id="time" value={value} onChange={(event) =>
        setValue(event.target.value)}>
            {options}
        </select>
    )
}

class Time extends React.Component {
    render() {
        return (
            <>
                <div className="content1">
                    <label htmlFor="select_time">Выберите время</label>
                </div>

                <div className="content">
                    <ToTime />
                </div>
            </>
        );
    }
}

export {Tower, Floor, Room, Date, Time};