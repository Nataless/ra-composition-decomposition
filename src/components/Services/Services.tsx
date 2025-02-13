import { ReactElement } from "react";
import './Services.css';

/**
 * Функция, которая описывает отдельный Сервис
 * @returns {Services} 
 */

function Services({ children }: {children: ReactElement | ReactElement[]}) {
  return (
    <div className="services block">
      <h2>Services block</h2>
      <div className="services_content">
        { children }
      </div>
    </div>
  );
}

export default Services;