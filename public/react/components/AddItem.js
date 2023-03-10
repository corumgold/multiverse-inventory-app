// import React, { useState } from "react";
// import apiURL from "../api";

// const AddItem = ({ fetchItems }) => {
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     price: 0,
//     category: "",
//     image: "",
//   });

//   async function postItem() {
//     try {
//       await fetch(`${apiURL}/items/`, {
//         //these are extra settings (default is method: GET)
//         method: "POST",
//         //what type of data are we expecting? json!
//         headers: {
//           "Content-Type": "application/json",
//         },
//         //objects aren't json, let's turn that form into json!
//         body: JSON.stringify(form),
//       });
//     } catch (err) {
//       console.log("Oh no an error! ", err);
//     }
//   }

//   function handleFormChange(e) {
//     const key = e.target.name;
//     const value = e.target.value;
//     setForm({ ...form, [key]: value });
//   }

//   function handleFormSubmit(e) {
//     e.preventDefault();
//     postItem();
//     fetchItems();
//     setForm({
//       title: "",
//       description: "",
//       price: 0,
//       category: "",
//       image: "",
//     });
//   }

//   return (
//     <div id="create-item">
//       <h2>Create a New Item</h2>
//       <form>
//         <label>
//           Title:
//           <input
//             value={form.title}
//             type="text"
//             name="title"
//             onChange={handleFormChange}
//           />
//         </label>
//         <label>
//           Description:
//           <input
//             value={form.description}
//             type="text"
//             name="description"
//             onChange={handleFormChange}
//           />
//         </label>
//         <label>
//           Price:
//           <input
//             value={form.price}
//             type="number"
//             name="price"
//             onChange={handleFormChange}
//           />
//         </label>
//         <label>
//           Category:
//           <input
//             value={form.category}
//             type="text"
//             name="category"
//             onChange={handleFormChange}
//           />
//         </label>
//         <label>
//           Image Url:
//           <input
//             value={form.image}
//             type="text"
//             name="image"
//             onChange={handleFormChange}
//           />
//         </label>
//       </form>
//       <button onClick={handleFormSubmit}>Create Item</button>
//     </div>
//   );
// };

// export default AddItem;
