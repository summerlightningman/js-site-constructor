import {row, col, css} from "./utils";

function title({value, options}) {
    const {tag = 'h1', styles} = options;
    return row(col(`<${tag}>${value}</${tag}>`), css(styles))
}

function text({value, options}) {
    const {styles} = options;
    return row(col(`<p>${value}</p>`), css(styles))
}

function columns({value, options}) {
    const {styles} = options;
    const columns = value.map(col).join('');
    return row(columns, css(styles))
}

function image({value, options}) {
    const {styles, alt = '', imageStyles} = options;
    return row(`<img src="${value}" alt="${alt}" style="${css(imageStyles)}"/>`, css(styles))
}

export const templates = {
    title,
    text,
    columns,
    image
}