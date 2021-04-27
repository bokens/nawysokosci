const textContainer = document.querySelector('#text');
const title = document.querySelector('.title');

title.innerHTML = aboutTitle;

// TEXT CONTAINER
aboutText.forEach((text, index) => {
    const div = document.createElement('div');
    const scale = Math.floor(12 / aboutText.length);

    div.innerHTML = text;
    index % 2 === 0
        ? div.classList.add('col-sm-12', `col-md-${scale}`)
        : div.classList.add('col-sm-12', `col-md-${scale}`, 'd-flex', 'align-items-end');
    textContainer.appendChild(div);
});
