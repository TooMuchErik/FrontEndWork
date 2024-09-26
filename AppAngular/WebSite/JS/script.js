function createButtons(n) {
    const buttonContainer = document.getElementById('buttonVek');
    buttonContainer.innerHTML = ''; // Clear existing buttons if any

    for (let i = n; i >= 0; i--) {
        const button = document.createElement('button');
        button.className = 'button';
        button.textContent = i;
        buttonContainer.appendChild(button);
    }
}

createButtons(10);
