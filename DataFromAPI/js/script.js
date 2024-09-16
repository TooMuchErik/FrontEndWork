function createCards(imageData) {
    const buttonContainer = document.getElementById('grid');
    buttonContainer.innerHTML = '';

    imageData.forEach((image) => {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = image.download_url;
        img.alt = image.author;
        img.className = 'image';

        const h = document.createElement('h3');
        h.textContent = image.author;

        const p = document.createElement('p');
        p.textContent = 'Photo by ' + image.author;

        card.appendChild(img);
        card.appendChild(h);
        card.appendChild(p);

        buttonContainer.appendChild(card);
    });
}

async function fetchImageData() {
    try {
        const response = await fetch('https://picsum.photos/v2/list');
        const imageData = await response.json();
        createCards(imageData);
    } catch (error) {
        console.error('Error fetching image data:', error);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    fetchImageData();
});
