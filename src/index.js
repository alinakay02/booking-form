import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const page_to = document.getElementById('to_tower')
const navRoot = createRoot(page_to);
navRoot.render(<App />);
//ReactDOM.render(<App />, document.getElementById('to_tower'));

