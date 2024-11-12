document.querySelectorAll('.btn-box').forEach(button => {
    button.addEventListener('click', () => {
        const page = button.getAttribute('data-page');
        loadContent(page);
    });
});

function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('portfolio-area').innerHTML = data;
        })
        .catch(error => console.error('Error loading:', error));
}
