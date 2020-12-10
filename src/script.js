const model = [
    {type: 'title', value: 'Hello World from JS'},
    {type: 'text', value: 'Here text'},
    {type: 'columns', value: ['111', '11', '1111']},
    {type: 'image', value: 'assets/image.png'}
];

const site = document.querySelector('#site');

model.forEach(block => {
    let html = '';
    if (block.type === 'title')
        html = title(block);
    else if (block.type === 'text')
        html = text(block);
    else if (block.type === 'columns')
        html = columns(block)
    else if (block.type === 'image')
        html = image(block);

    site.insertAdjacentHTML('beforeend', html);
});

function title({value}) {
    return `
        <div class="row">
            <div class="col-sm">
                <h1>${value}</h1>
            </div>
        </div>
    `
}

function text({value}) {
    return `
        <div class="row">
            <div class="col-sm">
                <p>${value}</p>
            </div>
        </div>
    `
}

function columns({value}) {
    const columns = value.reduce((acc, val) => acc + `<div class="col-sm"><p>${val}</p></div>`, '');
    return `<div class="row">${columns}</div>`
}

function image({value}) {
    return `
        <div class="row">
            <img src="${value}" alt="Image not found :("/>
        </div>
    `
}