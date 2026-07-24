const openMenuListItems = document.querySelector(".header-menu-list-item");
const blockText = document.querySelector(".chapter-block-text");
const iconBasketPurchase = document.querySelector(".basket-purchase");

function updateMenuState() {
  const isMobile = window.innerWidth <= 509;
  
  // Проверяем, что меню открыто
  if (openMenuListItems.open) {
    if (isMobile) {
      // На мобилках добавляем отступ
      blockText.style.marginTop = "320px";
      iconBasketPurchase.style.display = "none";
    } else {
      // На десктопе убираем
      blockText.style.marginTop = "";
      iconBasketPurchase.style.display = "";
    }
  } else {
    // Если меню закрыто - всегда убираем
    blockText.style.marginTop = "";
    iconBasketPurchase.style.display = "";
  }
}

// Событие при открытии/закрытии меню
openMenuListItems.addEventListener("toggle", updateMenuState);

// Обновляем при изменении размера окна
window.addEventListener("resize", function() {
  updateMenuState();
});


