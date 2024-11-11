document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const submenu = item.querySelector('.submenu');
      if (submenu) {
        submenu.classList.toggle('open');
      }
    });
  });
});
