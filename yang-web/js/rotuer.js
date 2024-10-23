// 載入 header
fetch('header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('portfolio_menu').innerHTML = data;
})
.catch(error => console.error('Error loading header:', error));

// 載入 footer
fetch('footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer').innerHTML = data;
})
.catch(error => console.error('Error loading footer:', error));