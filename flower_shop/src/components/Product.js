import '../assets/CSS/layout.css';
import {useState} from 'react';
export default function Product(props){

    const [qty,setQty] = useState(0);
    
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
                    <button class="card-button">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}