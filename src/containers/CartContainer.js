import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import PropTypes from 'prop-types';
import * as Message from './../constants/Message';
import * as actions from './../actions/index';


class CartContainer extends Component {
    render() {
        var { cart } = this.props;

        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }
    showCartItem = (cart) => {
        var result = <tr>
            <td>{Message.MSG_CART_EMPTY}</td>
        </tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProduct={this.props.onDeleteProduct}
                        onChangeMessage={this.props.onChangeMessage}
                        onUpdateProduct={this.props.onUpdateProduct}
                    />
                );
            });
        }
        return result;
    }
    showTotalAmount = (cart) => {
        var result = <tr>
                        <td colSpan="6"> </td>
                    </tr>;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProduct: (product) => {
            dispatch(actions.actDeleteProduct(product));
        },
        onChangeMessage: (message) => {
            dispatch(actions.actChangeMessage(message));
        },
        onUpdateProduct: (product, quantity) => {
            dispatch(actions.actUpdateProduct(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
