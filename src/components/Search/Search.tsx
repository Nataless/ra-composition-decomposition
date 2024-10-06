import Menu from "../Menu/Menu";

/** 
 * Функция, которая возвращает блок Поиска
 * @returns {Search}  
 */

function Search() {
  return (
    <div className="search block">
      <h2>Search block</h2>
      <form className="search_form block">
        <h3>Search form</h3>
        <Menu items={['Opt1', 'Opt2', 'Opt3', 'Opt4', 'Opt5', 'Opt6', 'Opt7', 'Opt8']} />
        <input className="search-input" />
        <button className="search-btn">Найти</button>
      </form>
    </div>
  );
}

export default Search;