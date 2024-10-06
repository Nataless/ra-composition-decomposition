/**
 * Функция, которая возвращает блок Меню
 * @returns {Menu} 
 */

import './Menu.css';
import MenuItem from './MenuItem';

function Menu({ items }: { items: string[] }) {
  return (
    <ul className="menu">
      { items.map((item, index) => <MenuItem item={item} key={index} /> ) }
    </ul>
  );
}

export default Menu;
