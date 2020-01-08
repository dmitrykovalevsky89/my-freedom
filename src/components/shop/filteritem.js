import React from "react";

export const Filteritem = ({ names }) => {
  return (
    <ul className="product-category">
      {names.map((item, index) => (
        <li key={index}>
          <a href="#" className={item.active ? "active" : ""}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
