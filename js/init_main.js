const spinnerContainer = document.querySelector('#spinner-container');
const logos = document.querySelectorAll('.name');
const menu = document.querySelector('#top-menu');
const menuContainer = document.createElement('ul');
const footerTextContainer = document.querySelector('.footer-text');
const footerAddressContainer = document.querySelector('.footer-address');

// LOGO / NAME
logos.forEach(elName => {
    const logo = document.createElement('img');

    logo.src = logoUrl;
    elName.appendChild(logo)
});

// INIT MENU ITEMS
menuContainer.classList.add('d-flex', 'align-items-center', 'justify-content-end');
menuItems.forEach(el => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.appendChild(document.createTextNode(el.name));
    a.href = el.url;
    li.appendChild(a);
    menuContainer.appendChild(li)
});

menu.appendChild(menuContainer);

// FOOTER
footerTextContainer ? footerTextContainer.innerHTML = footerText : null;
for (const key in footerAddress) {
    const body = document.createElement('div');

    body.innerHTML = footerAddress[key];
    footerAddressContainer.appendChild(body);
};

window.addEventListener('load', () => {
    typeof AOS !== 'undefined' ? AOS.init() : null;
    spinnerContainer.remove();
});