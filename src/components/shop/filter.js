import React from "react";
import { Filteritem } from "./filteritem";

export const Filter = () => {
  const names = [
    {
      name: "All",
      active: true
    },
    {
      name: "Vegetables",
      active: false
    },
    {
      name: "Fruits",
      active: false
    },
    {
      name: "Juice",
      active: false
    },
    {
      name: "Dried",
      active: false
    }
  ];

  return (
    <div className="row justify-content-center">
      <div className="col-md-10 mb-5 text-center">
        <Filteritem names={names} />
      </div>
    </div>
  );
};
