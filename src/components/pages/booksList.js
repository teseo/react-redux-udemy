"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/bookActions';
import {Grid, Col, Row, Button} from 'react-bootstrap';

class BooksList extends React.Component {
  componentDidMount() {
    //dispatch an action
    this.props.getBooks();
  }
  render() {
    const booksList = this.props.books.map(function(book){
      return (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <h2>{book.description}</h2>
          <h2>{book.price}</h2>
          <Button bsStyle='primary'>
            buy now
          </Button>
        </div>
      );
    });
    return (
      <Grid>
        <Row style={{marginTop: '15px'}}>
          {booksList}
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.books
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getBooks
  }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(BooksList);
