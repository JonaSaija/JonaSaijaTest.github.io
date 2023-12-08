function downloadDutchFile() {
    // Your existing download file code
    var anchor = document.createElement('a');
    anchor.href = 'assets/CV/JonaDutchCV.png';
    anchor.download = 'Copie-JonaDutchCV.png';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}
function downloadEnglishFile() {
    // Your existing download file code
    var anchor = document.createElement('a');
    anchor.href = 'assets/CV/JonaDutchCV.png';
    anchor.download = 'Copie-JonaDutchCV.png';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}
