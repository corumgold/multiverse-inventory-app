import React from "react";
import { Item } from "./Item";

export const ItemsList = ({ items, setSingleItemId }) => {
  return (
    <>
      {items.map((item) => {
        return (
          <div onClick={() => setSingleItemId(item.id)} key={item.id}>
            <Item item={item} />
          </div>
        );
      })}
    </>
  );
};
