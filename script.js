function generateRandomColor() {
    const colorBox = document.getElementById('colorBox');
    const colorCodeInput = document.getElementById('colorCode');

    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    colorBox.style.backgroundColor = randomColor;
    colorCodeInput.value = randomColor;
}

function applyCustomColor() {
    const colorPicker = document.getElementById('colorPicker');
    const colorBox = document.getElementById('colorBox');
    const colorCodeInput = document.getElementById('colorCode');

    const customColor = colorPicker.value;
    colorBox.style.backgroundColor = customColor;
    colorCodeInput.value = customColor;
}

function copyColorCode() {
    const colorCodeInput = document.getElementById('colorCode');
    colorCodeInput.select();
    document.execCommand('copy');
    alert('Color code copied to clipboard!');
}
