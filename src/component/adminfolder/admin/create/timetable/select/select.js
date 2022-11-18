import React, { useState } from "react";

const Select = ({ state, name, params, onChangeFunction }) => {
  return (
    <select
      onChange={(e) => {
        onChangeFunction(e);
      }}
      name={name}
      id="class"
      value={params || "DEFAULT"}
    >
      <option value="DEFAULT"> select </option>

      {state.map((clas, index) => {
        const { name, _id } = clas;

        return (
          <option key={index} value={_id}>
            {name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
