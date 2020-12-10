export function title({value}) {
    return `
        <div class="row">
            <div class="col-sm">
                <h1>${value}</h1>
            </div>
        </div>
    `
}

export function text({value}) {
    return `
        <div class="row">
            <div class="col-sm">
                <p>${value}</p>
            </div>
        </div>
    `
}

export function columns({value}) {
    const columns = value.reduce((acc, val) => acc + `<div class="col-sm"><p>${val}</p></div>`, '');
    return `<div class="row">${columns}</div>`
}

export function image({value}) {
    return `
        <div class="row">
            <img src="${value}" alt="Image not found :("/>
        </div>
    `
}