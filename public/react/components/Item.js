import React from "react";

export const Item = (props) => {
  return (
    <>
      <h3>{props.item.title}</h3>
      <h4>${props.item.price}</h4>
      <p>{props.item.category}</p>
      <p>{props.item.description}</p>
      <img src={props.item.image} alt={props.item.title} />
    </>
  );
};
