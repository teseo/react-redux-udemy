"use strict"

import React from 'react'
import {
  Button,
  Col,
  Well,
  Row
} from 'react-bootstrap';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  addToCart,
  updateCart
} from '../../actions/cartActions';

class BookItem extends React.Component {
  handleCart(){
    const book = [...this.props.cart,{
      _id: this.props._id,
      title: this.props.title,
      price: this.props.price,
      description: this.props.description,
      quantity: 1
    }];
    //Check if cart is empty
    if(this.props.cart.length > 0 ) {
      //cart is not empty
      let _id = this.props._id;

      let cartIndex = this.props.cart.findIndex(function(cart){
        return cart._id === _id
      });
      //if returns -1, there are no items in the cart with that id
      if (cartIndex === -1) {
        this.props.addToCart(book);
      }
      else {
        this.props.updateCart(_id, 1);
      }
    } else {
      //cart is empty
      this.props.addToCart(book);
    }
  }
  render(){
    return (
      <Well>
        <Row>
          <Col xs={12}>
            <h6>{this.props.title}</h6>
            <p>{this.props.description}</p>
            <h6>usd. {this.props.price}</h6>
              <Button onClick={this.handleCart.bind(this)} bsStyle='primary'>
                buy now
              </Button>
          </Col>
        </Row>
      </Well>
    )
  }
}
function mapStateToProps(state){
  return {
    cart: state.cart.cart
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addToCart,
    updateCart
  }, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(BookItem);
