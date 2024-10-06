/**
 * Функция, которая возвращает отдельный элемент блока Меню
 * @returns {MenuItem} 
 */

function MenuItem({ item }: {item: string}) {
  return (
    <li className="menu_item">
      <a href="#">{item}</a>
    </li>
  );
}

export default MenuItem;