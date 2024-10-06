import { ReactElement } from "react";

/**
 * Функция, которая возвращает Блок Сервисов
 * @returns {Service} 
 */

function Service({title, children}: { title: string, children: ReactElement | ReactElement[]}) {
  return (
    <div className="service block">
      <h4>{title}</h4>
      <div className="service_content">
        {children}
      </div>
    </div>
  );
}

export default Service;