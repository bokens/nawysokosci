const slideContainer = document.querySelector('#slides');
const textContainer = document.querySelector('#text');
const slide = document.querySelector('.offer-container').cloneNode(true);
const title = document.querySelector('.title');

// clear #slides containter after copy
document.querySelector('#slides').innerHTML = '';

title.innerHTML = aboutTitle;

// OFFER CONTAINER
slidesBody.forEach(body => {
    const slideClone = slide.cloneNode(true);

    body.title ? slideClone.querySelector('.offer-title-text').innerHTML = body.title : null;

    slideContainer.appendChild(slideClone);
});