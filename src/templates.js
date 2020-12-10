import {row, col} from "./utils";

function title({value}) {
    return row(col(`<h1>${value}</h1>`))
}

function text({value}) {
    return row(col(`<p>${value}</p>`))
}

function columns({value}) {
    const columns = value.map(col).join('');
    return row(columns)
}

function image({value}) {
    return row(`<img src="${value}" alt="Image not found :("/>`)
}

export const templates = {
    title,
    text,
    columns,
    image
}