let cachedImageData = []; 

function createCards(imageData, selectedAuthor = '') {
    const buttonContainer = document.getElementById('grid');
    buttonContainer.innerHTML = '';

    const filteredData = selectedAuthor
        ? imageData.filter(image => image.author === selectedAuthor)
        : imageData;

    filteredData.forEach((image) => {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = image.download_url;
        img.alt = image.author;
        img.className = 'image';
        img.loading = 'lazy'; 

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

function populateDropdown(authors) {
    const select = document.getElementById('author-select');
    select.innerHTML = '';

    const allOption = document.createElement('option');
    allOption.value = '';
    allOption.textContent = 'All Authors';
    select.appendChild(allOption);

    const uniqueAuthors = [...new Set(authors)];
    uniqueAuthors.forEach(author => {
        const option = document.createElement('option');
        option.value = author;
        option.textContent = author;
        select.appendChild(option);
    });
}

async function fetchImageData() {
    try {
        if (cachedImageData.length === 0) { 
            const response = await fetch('https://picsum.photos/v2/list');
            const imageData = await response.json();
            cachedImageData = imageData; 
        }

        const authors = cachedImageData.map(image => image.author);
        populateDropdown(authors);
        createCards(cachedImageData);

        const select = document.getElementById('author-select');
        select.addEventListener('change', () => {
            const selectedAuthor = select.value;
            createCards(cachedImageData, selectedAuthor);
        });
    } catch (error) {
        console.error('Error fetching image data:', error);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    fetchImageData();
});
