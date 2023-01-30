import React, { useState, useEffect } from "react";
// import and prepend the api url to any fetch calls
import apiURL from "../api";
import { ItemsList } from "./ItemsList";
import { SingleItem } from "./SingleItem";


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
      <h1 id="main-title">Cory's Accoutrements</h1>
      <h2 id="main-description">A little of this, a little of that - this place is where it's at!</h2>
      {singleItemId ? (
        <SingleItem
          id={singleItemId}
          setSingleItemId={setSingleItemId}
          fetchItems={fetchItems}
        />
      ) : (
        <ItemsList
          items={items}
          fetchItems={fetchItems}
          setSingleItemId={setSingleItemId}
        />
      )}
    </main>
  );
};
