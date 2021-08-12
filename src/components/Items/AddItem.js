import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import "./AddItem.css"

const AddItem = () => {
  const [name,setName]=useState("")
  const [price,setPrice]=useState("")
  const [img]=useState("")
  const [item, setItem] = useState({
    name: "",
    price: "",
    id: "",  
    img: "",
  });

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    let base64 = await convertBase64(file);
    setItem({...item,[e.target.name]:base64})
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  let history = useHistory();
  const onNameChange=(e)=>{
       setName(e.target.value)
       setItem({...item,[e.target.name]:e.target.value})
  }
  const onPriceChange=(e)=>{
    setPrice(e.target.value)
    setItem({...item,[e.target.name]:e.target.value})
}
  const onSubmit = async e => {
    e.preventDefault();
    if(item.name==='' && item.price===''){
      return false
    }
    await axios.post("http://localhost:3003/items", item);
    history.push("/item");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add an Item</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mar"
              placeholder="Enter Item Name"
              name="name"
              value={name}
              onChange={e => onNameChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mar"
              placeholder="Enter Item Price"
              name="price"
              value={price}
              onChange={e => onPriceChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="file"
              className="form-control form-control-lg mar"
              placeholder="Upload Image"
              name="img"
              value={img}
              onChange={(e) => {
                uploadImage(e)
              }}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
