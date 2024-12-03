
import '../assets/CSS/layout.css';
import Product from './Product';
import Cart from './Cart';
import { useState } from 'react';

export default function Products({ products }){
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.name === product.name);
        if (existingItem) {
            return prevCart.map((item) =>
            item.name === product.name
                ? { ...item, quantity: item.quantity + product.quantity }
                : item
            );
        } else {
            return [...prevCart, product];
        }
        });
    };
   
    return(
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                    {
                        products.map((pd)=>
                            <Product key={pd.id} pd={pd} onAddToCart={addToCart} />
                        )
                    }
                </div>

            </div>
            <div className="item3">
                {
                <Cart cartItems={cart} />
                }
            </div>
        </>
    );

}