import React from "react";

const Cart = () => {
  const storageCart=()=>{
        if(JSON.parse(localStorage.getItem('cartList'))===null){
          return []
        }else{
          return JSON.parse(localStorage.getItem('cartList'))
        }
  }
  

  const cartCount=localStorage.getItem('cartCount')
  let local=storageCart()
  console.log(local)
  return (
    <div className="container">   
      {cartCount<=0 ? <p className="bg-primary d-inline-block p-4 text-white fw-bold m-1">Cart is Empty</p>:<p className="bg-primary d-inline-block p-4 text-white fw-bold m-1">Items in Cart :   {cartCount}</p>}
      <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
            </tr>
          </thead>
          <tbody>
            {local.map((item, index) => (
              <tr key={item.id}>
                <th scope="row">{index+1}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><img style={{borderRadius:'20px'}} src={item.img} width="50px" height="50px" alt="img"/></td>
              </tr>
            ))}
          </tbody>
        </table>  
    </div>
  );
};

export default Cart;
