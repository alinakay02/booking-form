import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {Tower, Floor, Room, Date, Time} from './App';

const tower = document.getElementById('select_tower')
const towerRoot = createRoot(tower);
towerRoot.render(<Tower />);

const floor = document.getElementById('select_floor')
const floorRoot = createRoot(floor);
floorRoot.render(<Floor />);

const room = document.getElementById('select_room')
const roomRoot = createRoot(room);
roomRoot.render(<Room />);

const date = document.getElementById('selectDate')
const dateRoot = createRoot(date);
dateRoot.render(<Date />);

const time = document.getElementById('select_time')
const timeRoot = createRoot(time);
timeRoot.render(<Time />);