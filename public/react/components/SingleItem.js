import React, { useState, useEffect } from "react";
import apiURL from "../api";
import { Item } from "./Item";
import { Form } from "./Form";

export const SingleItem = ({ id, setSingleItemId, fetchItems }) => {
  const [item, setItem] = useState({});
  const [editItemClicked, setFormClicked] = useState(false);

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

  async function handleBack() {
    await fetchItems();
    setSingleItemId(null);
  }

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <>
      <button onClick={handleBack}>Back</button>
      <button onClick={deleteItem}>Delete</button>
      <button onClick={() => setFormClicked(true)}>Edit</button>
      {editItemClicked ? (
        <Form
          item={item}
          fetchItem={fetchItem}
          setFormClicked={setFormClicked}
        />
      ) : (
        <Item item={item} />
      )}
    </>
  );
};
