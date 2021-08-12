import React ,{useState} from 'react'

const Home=()=> {
    const storage=()=>{
        if(JSON.parse(localStorage.getItem('cartCount'))===null){
            return 0
        }else{
            return JSON.parse(localStorage.getItem('cartCount'))
        }
        
    }
    const [cart_Count]=useState(storage)
    
    localStorage.setItem('cartCount',cart_Count)
    return (
        <div className="container">
            <h1>Home Page of RandoStore</h1>
            <p>this is a shopify website for selling different Items this is a shopify website for selling different Items this is a shopify website for selling different Items this is a shopify website for selling different Items this is a shopify website for selling different Items this is a shopify website for selling different Items this is a shopify website for selling different Items 
            </p>
            <p>this is a shopify website for selling different Items this is a shopify website for selling different Items this is a shopify website for selling different Items this is a shopify website for selling different Items this is a shopify website for selling different Items this is a shopify website for selling different Items this is a shopify website for selling different Items 
            </p>
            <p>this is a shopify website for selling different Items this is a shopify website for selling different Items this is a shopify website for selling different Items this is a shopify website for selling different Items this is a shopify website for selling different Items this is a shopify website for selling different Items this is a shopify website for selling different Items 
            </p>
            <p>this is a shopify website for selling different Items this is a shopify website for selling different Items this is a shopify website for selling different Items this is a shopify website for selling different Items this is a shopify website for selling different Items this is a shopify website for selling different Items this is a shopify website for selling different Items 
            </p>
        </div>
    )
}

export default Home
