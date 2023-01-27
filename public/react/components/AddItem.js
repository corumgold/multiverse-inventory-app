import React from "react";
import { useState } from "react";

const AddItem = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: 0,
    category: "",
    image: "",
  });

  function handleFormChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [key]: value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleFormChange} />
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
