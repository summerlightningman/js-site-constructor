import {block} from "../utils";
import {ColumnsBlock, ImageBlock, TextBlock, TitleBlock} from "./blocks";

export class Sidebar {
    constructor(selector, updateCallback) {
        this.update = updateCallback;
        this.element = document.querySelector(selector);

        this.init();

        this.types = {
            'text': TextBlock,
            'title': TitleBlock,
            'columns': ColumnsBlock,
            'image': ImageBlock
        }
    }

    init() {
        this.element.insertAdjacentHTML('afterbegin', this.template);
        this.element.addEventListener('submit', this.add.bind(this))
    }

    get template() {
        return [block('text'), block('title')].join('')
    }

    add(event) {
        event.preventDefault();

        const type = event.target.name;
        const value = event.target.value.value;
        const styles = event.target.styles.value;
        
        const newBlock = new this.types[type](value, {styles})
        this.update(newBlock);

        event.target.value.value = '';
        event.target.styles.value = '';
    }
}

