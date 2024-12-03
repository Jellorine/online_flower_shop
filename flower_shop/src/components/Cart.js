export default function Cart({cartItems}) {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    
    return (
        <div className="table-container">
            <h4 className="card-title">Cart</h4>
            <table>
                <thead>

                    <td>Product</td>
                    <td>QTY</td>
                    <td>Price</td>

                </thead>
                {
                    
                        cartItems.map((item, index) => (
                            <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>${item.quantity * item.price}</td>
                            </tr>
                    ))
                    
                }
                <tr>
                    <td >Grand Total : </td>
                    <td colSpan={2}>${totalPrice}</td>
                </tr>
            </table>
           
        </div>
    );
}