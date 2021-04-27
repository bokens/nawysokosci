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

ez_consent.init(
  {
    is_always_visible: false,       // Always shows banner on load, default: false
    texts: {
      main: "Używamy plików cookies, aby ułatwić Ci korzystanie z naszego serwisu oraz do celów statystycznych. " +
          "Korzystając z naszej strony wyrażasz zgodę na wykorzystywanie przez nas plików cookies. " +
          "Jeśli nie blokujesz tych plików, to zgadzasz się na ich użycie oraz zapisanie w pamięci urządzenia. " +
          "Pamiętaj, że możesz samodzielnie zarządzać cookies, zmieniając ustawienia przeglądarki.",       // The text that's shown on the banner, default: "This website uses cookies & similar."
      buttons:
      {
        ok: "ok",                   // OK button to hide the text, default: "ok"
        more: ""                // More button that shows the privacy policy, default "more"
      }
    }
  });