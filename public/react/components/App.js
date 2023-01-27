import React, { useState, useEffect } from "react";
// import and prepend the api url to any fetch calls
import apiURL from "../api";
import AddItem from "./AddItem";
import { ItemsList } from "./ItemsList";
import SingleItem from "./SingleItem";

export const App = () => {
  const [items, setItems] = useState([]);
  const [singleItemId, setSingleItemId] = useState(null);

  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();
      setItems(itemsData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <main>
      <h1>Item Store</h1>
      <h2>All things 🔥</h2>
      <AddItem />
      {singleItemId ? (
        <SingleItem id={singleItemId} setSingleItemId={setSingleItemId} />
      ) : (
        <ItemsList items={items} setSingleItemId={setSingleItemId} />
      )}
    </main>
  );
};
