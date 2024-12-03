import '../assets/CSS/layout.css';
export default function Product(props){
    
    return(
        <div className="grid-item">

            <div class="card">
                <img  src ={require('../assets/image/'+props.pd.img)} alt="flower"/>
                <div class="card-body">
                    <h5 class="card-title">Price:{props.pd.price}</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" />
                    </div>
                    <button class="card-button">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}