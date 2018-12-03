import React, { Component } from 'react';
import * as Message from './../constants/Message';

class CartItem extends Component {

  render() {

    var { product, quantity } = this.props.item;
    var qst = quantity //> 0 ? quantity : this.state.quantity;
    return (
        <tr>
        <th scope="row">
            <img src= { product.image }
                alt="" className="img-fluid z-depth-0" />
        </th>
        <td>
            <h5>
                <strong>{ product.name }</strong>
            </h5>
        </td>
        <td>{ product.price }$</td>
        <td className="center-on-small-only">
            <span className="qty"> { qst } </span>
            <div className="btn-group radio-group" data-toggle="buttons">
                <label onClick = {() => this.onUpdateQuantity(product, qst - 1)} 
                    className="btn btn-sm btn-primary
                    btn-rounded waves-effect waves-light">
                    <a href='http://localhost:3000/'>—</a>
                </label>
                <label  onClick = {() => this.onUpdateQuantity(product, qst + 1)}
                    className="btn btn-sm btn-primary
                    btn-rounded waves-effect waves-light">
                    <a href='http://localhost:3000/'>+</a>
                </label>
            </div>
        </td>
        <td>{ this.showSubTotal(product.price, qst)}$</td>
        <td>
            <button 
                type="button" 
                className="btn btn-sm btn-primary waves-effect waves-light" 
                data-toggle="tooltip" 
                data-placement="top"
                title="" data-original-title="Remove item"
                onClick = {() => this.onDelete(product)}
            >
                X
            </button>
        </td>
    </tr>
   );
  }

  showSubTotal(price, quantity){
      return price * quantity;
  }

  onDelete = (product) => {
      var { onDeleteProduct, onChangeMessage } = this.props;
      onDeleteProduct(product);
      onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  }

  onUpdateQuantity = (product, quantity) => {
    if (quantity > 0) {
        this.props.onUpdateProduct(product, quantity);
        this.props.onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS)
    }
  }
}

export default CartItem;
