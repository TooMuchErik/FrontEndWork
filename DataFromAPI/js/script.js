function createCards(n) {
    const buttonContainer = document.getElementById('grid');
    buttonContainer.innerHTML = ''; // Clear existing cards if any

    for (let i = 0; i < n; i++) { // Changed to go from 0 to n-1
        const card = document.createElement('div');
        card.className = 'card';

        const imageP = document.createElement('div');
        imageP.className = 'image-placeholder'; // Fixed typo

        const h = document.createElement('h3');
        h.textContent = 'Title ' + (i + 1); // Unique title for each card

        const p = document.createElement('p');
        p.textContent = 'Description for card ' + (i + 1); // Unique description

        // Append elements to the card
        card.appendChild(imageP);
        card.appendChild(h);
        card.appendChild(p);

        // Append the card to the container
        buttonContainer.appendChild(card);
    }
}


