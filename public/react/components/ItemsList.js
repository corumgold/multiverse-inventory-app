import React from "react";
import AddItem from "./AddItem";
import { Form } from "./Form";
import { Item } from "./Item";

export const ItemsList = ({ items, setSingleItemId, fetchItems }) => {
  return (
    <>
      <div className="items">
        {items.map((item) => {
          return (
            <div
              className="item"
              onClick={() => setSingleItemId(item.id)}
              key={item.id}
            >
              <Item item={item} />
            </div>
          );
        })}
      </div>
      <Form fetchItems={fetchItems} />
    </>
  );
};
