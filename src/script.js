import {model} from './model';
import {templates} from "./templates";
import './styles/style.css';

const site = document.querySelector('#site');

model.forEach(block => {
    const toHTML = templates[block.type];
    if (toHTML)
        site.insertAdjacentHTML('beforeend', toHTML(block));
});

