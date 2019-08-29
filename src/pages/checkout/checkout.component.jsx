import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect"

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCartItemsTotal } from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.style.scss";

const CheckoutPage = ({ cartItems, total }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Picture</span>
            </div>
            <div className="header-block">
                <span>Name</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem} /> 
            )
        }
        <div className="total">
            <span> TOTAL: ${total} </span> 
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total: selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);