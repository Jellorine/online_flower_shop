import '../assets/CSS/layout.css';
import {useState} from 'react';
export default function Product({ pd, onAddToCart }){

    const [qty,setQty] = useState(0);
    const addToCart = () => {
        if (qty > 0) {
          const product = {
            name: pd.name,
            quantity: parseInt(qty, 10),
            price: pd.price,
          };
          onAddToCart(product); // Send product to parent
        } else {
          alert('Please enter a valid quantity.');
        }
      };

    return(
        <div className="grid-item">

            <div class="card">
                <img  src ={require('../assets/image/'+props.pd.img)} alt="flower"/>
                <div class="card-body">
                    <h5 class="card-title">Price:{props.pd.price}</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity"  value={qty} onChange={(e)=>{setQty(e.target.value)}}/>
                    </div>
                    <button value={product} class="card-button" onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}