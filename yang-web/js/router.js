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
            window.scrollTo(0, 0); // 新內容載入後，滾動到頁面頂部
        })
        .catch(error => console.error('Error loading:', error));
}
