"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {
  Panel,
  Col,
  Row,
  Well,
  Button,
  ButtonGroup,
  Label
} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {
  deleteCartItem,
  updateCart
} from '../../actions/cartActions';

class Cart extends React.Component{
  onDelete(_id){
    //create a copy of the current array of books in cart
    const currentCart = this.props.cart;
    //Determine at which index in books array is the book to be deleted
    const indexToDelete = currentCart.findIndex(
      function(cart) {
        return cart._id === _id
      }
    );
    //use slice to remove the book at the specified index
    let cartAfterDelete= [
      ...currentCart.slice(0, indexToDelete),
      ...currentCart.slice(indexToDelete + 1)
    ]

    this.props.deleteCartItem(cartAfterDelete);
  }
  updateQuantity(_id, unit){
    console.log(this.props);
    this.props.updateCart(_id, unit)
  }
  incrementQuantity(_id){
    this.props.updateCart(_id, 1)
  }
  decrementQuantity(_id, quantity){
    if(quantity === 1) {
      this.onDelete(_id);
    } else {
      this.props.updateCart(_id, -1)
    }
  }
  render() {
    if(this.props.cart[0]){
      return this.renderCart();
    } else {
      return this.renderEmpty();
    }
  }
  renderEmpty(){
    return(<div></div>);
  }
  renderCart(){
    const cartItemList = this.props.cart.map(function(cartArr){
      return(
        <Panel key={cartArr._id}>
          <Col xs={12} sm={4}>
            <h6>{cartArr.title}</h6><span>   </span>
          </Col>
          <Col xs={12} sm={2}>
            <h6>usd. {cartArr.price}</h6><span>   </span>
          </Col>
          <Col xs={12} sm={2}>
            <h6>qty. <Label bsStyle="success">{cartArr.quantity}</Label></h6><span>   </span>
          </Col>
          <Col xs={6} sm={4}>
            <ButtonGroup style={{maxWidth:'300px'}}>
              <Button
                onClick={this.decrementQuantity.bind(this, cartArr._id, cartArr.quantity)} bsStyle="default"
                bsSize="small">-</Button>
              <Button
                onClick={this.incrementQuantity.bind(this, cartArr._id)} bsStyle="default"
                bsSize="small">+</Button>
              <span>     </span>
              <Button onClick={this.onDelete.bind(this, cartArr._id)} bsStyle="danger" bsSize="small">Delete</Button>
            </ButtonGroup>
          </Col>
        </Panel>
      )
    }, this)

    return (
      <Panel header="Cart" bsStyle="primary">
        {cartItemList}
      </Panel>
    )
  }
}

function mapStateToProps(state){
  return {
    cart: state.cart.cart
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteCartItem,
    updateCart
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
