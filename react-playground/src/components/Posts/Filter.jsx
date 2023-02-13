import React from "react";
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";

const Filter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        placeholder="Поиск..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />

      <MySelect
        value={filter.sort}
        onChange={(selected) => setFilter({ ...filter, sort: selected })}
        defaultValue="Сортировка"
        options={[
          {
            name: "По названию",
            value: "title",
          },
          {
            name: "По описанию",
            value: "body",
          },
        ]}
      />
    </div>
  );
};

export default Filter;
