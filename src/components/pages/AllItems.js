import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AllItems.css"

const All_Items = () => {
  const cartCount=localStorage.getItem('cartCount')
  const storage=()=>{
    if(JSON.parse(localStorage.getItem('cartCount'))===null){
        return 0
    }else{
        return JSON.parse(localStorage.getItem('cartCount'))
    }   
}

const storage_cart=()=>{
  if(JSON.parse(localStorage.getItem('cartList'))===null){
      return []
  }else{
      return JSON.parse(localStorage.getItem('cartList'))
  }   
}
  const [items, setItems] = useState([]);
  const [cart_List,setCartList]=useState(storage_cart)
  const [cart_Count,setCartCount]=useState(storage)
  localStorage.setItem('cartCount',cart_Count)

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const result = await axios.get("http://localhost:3003/items");
    setItems(result.data);
  };

  const deleteItem = async id => {
    await axios.delete(`http://localhost:3003/items/${id}`);
    loadItems();
  };

  const countHandler=(item)=>{
            setCartCount(cart_Count+1)
            cart_List.push({
              id:item.id,
              name:item.name,
              price:item.price,
              img:item.img
            })
            setCartList(cart_List)
            localStorage.setItem('cartList',JSON.stringify(cart_List))
            console.log(item)
            
  }

  return (
    <div className="container">
      <div className="py-4">
        <h1>All Items</h1>
        <p className="bg-primary d-inline-block p-4 text-white fw-bold">Items in Cart :   {cartCount}</p>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                <th scope="row">{index+1}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><img style={{borderRadius:'20px'}} src={item.img} width="50px" height="50px" alt="img"/></td>
                <td>
                  <Link className="btn btn-primary mar" to={`/item/${item.id}`}>
                    View
                  </Link>
                  <button
                    className="btn btn-outline-primary mar"
                    onClick={()=>countHandler(item)}
                  >
                    Add to Cart
                  </button>
                  <Link
                    className="btn btn-danger"
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete Item
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default All_Items;
