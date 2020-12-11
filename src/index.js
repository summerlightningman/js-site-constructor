import {Site} from "./classes/site";
import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {model} from "./model";
import {Sidebar} from "./classes/sidebar";

const site = new Site('#site');
site.render(model);

const updateCallback = newBlock => {
    model.push(newBlock);
    site.render(model);
};

new Sidebar('#panel', updateCallback);
