import React, { useState, useEffect } from "react";
import apiURL from "../api";
import { Item } from "./Item";

const SingleItem = ({ id, setSingleItemId, fetchItems }) => {
  const [item, setItem] = useState({});
  async function fetchItem() {
    try {
      const response = await fetch(`${apiURL}/items/${id}`);
      const itemData = await response.json();
      setItem(itemData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  async function deleteItem() {
    try {
      await fetch(`${apiURL}/items/${id}`, {
        method: "DELETE",
      });
      fetchItems();
      setSingleItemId(null);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <>
      <button onClick={() => setSingleItemId(null)}>Back</button>
      <button onClick={deleteItem}>Delete</button>
      <Item item={item} />
    </>
  );
};

export default SingleItem;
