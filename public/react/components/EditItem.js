import React, { useState } from "react";
import apiURL from "../api";

export const EditItem = ({ item, fetchItem, setEditItemClicked }) => {
  const [form, setForm] = useState(item);

  async function updateItem() {
    try {
      await fetch(`${apiURL}/items/${item.id}`, {
        //these are extra settings (default is method: GET)
        method: "PUT",
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

  async function handleFormSubmit(e) {
    e.preventDefault();
    await updateItem();
    fetchItem();
    setEditItemClicked();
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Title:
          <input
            value={form.title}
            type="text"
            name="title"
            onChange={handleFormChange}
          />
        </label>
        <label>
          Description:
          <input
            value={form.description}
            type="text"
            name="description"
            onChange={handleFormChange}
          />
        </label>
        <label>
          Price:
          <input
            value={form.price}
            type="number"
            name="price"
            onChange={handleFormChange}
          />
        </label>
        <label>
          Category:
          <input
            value={form.category}
            type="text"
            name="category"
            onChange={handleFormChange}
          />
        </label>
        <label>
          Image Url:
          <input
            value={form.image}
            type="text"
            name="image"
            onChange={handleFormChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
