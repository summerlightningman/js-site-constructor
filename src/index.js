import {Site} from "./classes/site";
import './styles/style.css';
import {model} from "./model";

const site = new Site('#site');
site.render(model);