const galleryContainer = document.querySelector('#gallery');
const title = document.querySelector('.title');

title.innerHTML = galleryTitle;

// GALLERY CONTAINER
galleryImages.forEach((images, rowIndex) => {
    const imgRow = document.createElement('div');

    imgRow.classList.add('row');

    images.src.forEach((url, index) => {
        const imgContainer = document.createElement('div');
        const scale = Math.floor(12 / images.src.length);
        const margin = 'mb-4';
        let img;

        imgContainer.classList.add(
            'col-sm-12',
            images.colClass ? images.colClass[index] ? images.colClass[index] : null : `col-md-${scale}`,
            margin);

        if (typeof url === 'string') {
            if (url) {
                img = document.createElement('img');
                img.src = url;
                img.loading = "lazy";
                img.classList.add('slide-body-img-src', images.imgClass ? images.imgClass[index] ? images.imgClass[index] : null : null);
                img.dataset.aos = index % 2 === 0 ? "fade-up-right" : "fade-up-left";
            } else {
                img = document.createElement('div');
                img.classList.add('d-none', 'd-md-block');
                imgContainer.classList.remove(margin);
            }
            imgContainer.appendChild(img);
            imgRow.appendChild(imgContainer);
        } else if (typeof url === 'object' && url !== null && url.text) {
            img = document.createElement('div');
            img.innerHTML = url.text;
            img.classList.add('slide-body-text', 'align-self-center');
            imgContainer.classList.add('d-flex', 'justify-content-center');
            imgContainer.appendChild(img);
            imgRow.appendChild(imgContainer);
        }
    });
    
    galleryContainer.appendChild(imgRow);
});