import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Item = () => {
  const [item, setItem] = useState({
    name: "",
    price: "",
    id: "",
    img: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadItems();
  });
  const loadItems = async () => {
    const res = await axios.get(`http://localhost:3003/items/${id}`);
    setItem(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Item Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Item Id : {item.id}</li>
        <li className="list-group-item">Item name : {item.name}</li>
        <li className="list-group-item">Item Price : {item.price}</li>
      </ul> 
    </div>
  );
};

export default Item;
