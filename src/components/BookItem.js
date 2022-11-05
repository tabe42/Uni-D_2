import React from "react";

export const BookItem = (props) => {
  return <div>{((props.book.length>20)?props.book.substring(0,20):props.book.name)}</div>;
};
