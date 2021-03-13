const slideContainer = document.querySelector('#slides');
const textContainer = document.querySelector('#text');
const slide = document.querySelector('.slide-container').cloneNode(true);
const title = document.querySelector('.title');

// clear #slides containter after copy
document.querySelector('#slides').innerHTML = '';

title.innerHTML = aboutTitle;

// TEXT CONTAINER
aboutText.forEach((text, index) => {
    const div = document.createElement('div');
    const scale = Math.floor(12 / aboutText.length);

    div.appendChild(document.createTextNode(text));
    index % 2 === 0
        ? div.classList.add('col-sm-12', `col-md-${scale}`)
        : div.classList.add('col-sm-12', `col-md-${scale}`, 'd-flex', 'align-items-end');;
    textContainer.appendChild(div);
});

// SLIDES CONTAINER
slidesBody.forEach(body => {
    const slideClone = slide.cloneNode(true);

    body.number ? slideClone.querySelector('.slide-number').innerHTML = body.number : null;
    body.title ? slideClone.querySelector('.slide-title-text').innerHTML = body.title : null;
    body.text ? slideClone.querySelector('.slide-body-text').appendChild(document.createTextNode(body.text)) : null;
    body.class
        ? body.class.length > 0 ? slideClone.querySelector('.slide-body-img').classList.add(...body.class) : null
        : null;

    // IMAGE
    if (body.src) {
        const img = document.createElement('img');

        img.classList.add('slide-body-img-src');
        img.src = body.src;
        img.loading = "lazy";
        img.dataset.aos = body.aos ? body.aos : "fade-up-right";
        slideClone.querySelector('.slide-body-img').appendChild(img);
    }

    // LIST COLUMNS
    if (body.list1 || body.list2) {
        const list1 = document.createElement('ul');
        const list2 = document.createElement('ul');

        list1.classList.add('col-sm-12', 'col-lg-6');
        list2.classList.add('col-sm-12', 'col-lg-6');

        body.list1.forEach(text => {
            const li = document.createElement('li');

            li.innerHTML = text;
            list1.appendChild(li);
        });

        body.list2.forEach(text => {
            const li = document.createElement('li');

            li.innerHTML = text;
            list2.appendChild(li);
        });

        slideClone.querySelector('.slide-body').innerHTML = '';
        slideClone.querySelector('.slide-body').appendChild(list1);
        slideClone.querySelector('.slide-body').appendChild(list2);
    }

    slideContainer.appendChild(slideClone);
});