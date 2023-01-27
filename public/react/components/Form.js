import React, { useEffect, useState } from "react";
import apiURL from "../api";

export const Form = ({ item, fetchItem, setFormClicked, fetchItems }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: 0,
    category: "",
    image: "",
  });

  const method = item ? "PUT" : "POST";
  const fetchUrl = item ? `${apiURL}/items/${item.id}` : `${apiURL}/items/`;

  async function updateOrPostItem() {
    try {
      await fetch(fetchUrl, {
        //these are extra settings (default is method: GET)
        method,
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
    await updateOrPostItem();
    if (method === "PUT") {
      fetchItem();
      setFormClicked();
    } else {
      fetchItems();
      setForm({
        title: "",
        description: "",
        price: 0,
        category: "",
        image: "",
      });
    }
  }

  useEffect(() => {
    if (item) {
      setForm(item);
    }
  }, []);

  return (
    <div id="create-item">
      <h2>{item ? "Edit Item" : "Create a New Item"}</h2>
      <form>
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
      </form>
      <button onClick={handleFormSubmit}>
        {item ? "Edit Item" : "Create a New Item"}
      </button>
    </div>
  );
};
