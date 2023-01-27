import React, { useState, useEffect } from "react";
import apiURL from "../api";
import { Item } from "./Item";

const SingleItem = ({ id }) => {
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
    
  useEffect(() => {
    fetchItem();
  }, []);

  return <Item item={item} />;
};

export default SingleItem;