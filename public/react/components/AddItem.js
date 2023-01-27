import React, { useState } from "react";
import apiURL from "../api";

const AddItem = ({ fetchItems }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: 0,
    category: "",
    image: "",
  });

  async function postItem() {
    try {
      await fetch(`${apiURL}/items/`, {
        //these are extra settings (default is method: GET)
        method: "POST",
        //what type of data are we expecting? json!
        headers: {
          "Content-Type": "application/json",
        },
        //objects aren't json, let's turn that form into json!
        body: JSON.stringify(form),
      });
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  function handleFormChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [key]: value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    postItem();
    fetchItems();
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Title:
          <input type="text" name="title" onChange={handleFormChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" onChange={handleFormChange} />
        </label>
        <label>
          Price:
          <input type="number" name="price" onChange={handleFormChange} />
        </label>
        <label>
          Category:
          <input type="text" name="category" onChange={handleFormChange} />
        </label>
        <label>
          Image Url:
          <input type="text" name="image" onChange={handleFormChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddItem;
