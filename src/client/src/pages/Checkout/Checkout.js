import "./Checkout.css";
import { Link } from "react-router-dom";

const Checkout = () => {
    const spreadSmallCartItems = () => {
        const n = 2;
        return [...Array(n)].map((e, i) => (
            <div className="small-cart-row">
                <div className="cart-row-item">
                    <div className="item-photo"></div>
                    <div className="item-name">Book</div>
                </div>
                <div className="cart-row-item">30.000 VND</div>
            </div>
        ));
    };

    return (
        <div className="checkout-container">
            <div className="billing-form">
                <div className="form-title">Billing details</div>
                <div className="billing-input-group">
                    <label>Name of receiver</label>
                    <input type="text" placeholder="Name" required />
                </div>
                <div className="billing-input-group">
                    <label>Email</label>
                    <input type="email" placeholder="Email" required />
                </div>
                <div className="billing-input-group">
                    <label>Phone number</label>
                    <input type="text" placeholder="Phone number" required />
                </div>
                <div className="billing-input-group">
                    <label>City</label>
                    <input type="text" placeholder="City" required />
                </div>
                <div className="billing-input-group">
                    <label>District</label>
                    <input type="text" placeholder="District" required />
                </div>
                <div className="billing-input-group">
                    <label>Address</label>
                    <input type="text" placeholder="Apartment no., street, ward,..." required />
                </div>
            </div>
            <div className="small-cart-preview">
                <div className="small-cart-table">{spreadSmallCartItems()}</div>
                <div className="small-total-table">
                    <div className="small-total-item">
                        <div>Subtotal</div>
                        <div>60.000VND</div>
                    </div>
                    <div className="small-total-item">
                        <div>Shipping</div>
                        <div>10.000VND</div>
                    </div>
                    <div className="small-total-item">
                        <div>Total</div>
                        <div>70.000VND</div>
                    </div>
                </div>
                <div className="payment-option">
                    <div className="option-group">
                        <input type="radio" name="payment" id="card" />
                        <label htmlFor="card">Credit/Debit card</label>
                        <div className="card-img-group">
                            <div className="visa"></div>
                            <div className="mastercard"></div>
                        </div>
                    </div>
                    <div className="option-group">
                        <input type="radio" name="payment" id="cod" />
                        <label htmlFor="cod">Cash on delivery</label>
                    </div>
                </div>
                <Link to="/" state={{ openPopup: true, message: "Order(s) placed successfully.", type: "order" }} className="order-button">
                    Place order
                </Link>
            </div>
        </div>
    );
};

export default Checkout;
