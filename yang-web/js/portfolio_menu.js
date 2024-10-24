


document.addEventListener('DOMContentLoaded', () => {
  // 取得當前頁面的 URL
  const currentPage = window.location.pathname;

  // 桌面版按鈕處理
  const desktopButtons = document.querySelectorAll('#btn-area .btn-box, #btn-area .btn-box-now');
  desktopButtons.forEach(button => {
      const link = button.querySelector('a');
      if (link && currentPage.includes(link.getAttribute('href'))) {
          button.classList.add('btn-box-now');
          button.innerHTML = link.textContent;  // 移除 <a> 並保持文字
      }
  });

  // 手機版按鈕處理
  const mobileButtons = document.querySelectorAll('#btn-area-m .btn-box-m, #btn-area-m .btn-box-now-m');
  mobileButtons.forEach(button => {
      const link = button.querySelector('a');
      if (link && currentPage.includes(link.getAttribute('href'))) {
          button.classList.add('btn-box-now-m');
          button.innerHTML = link.textContent;  // 移除 <a> 並保持文字
      }
  });
});
