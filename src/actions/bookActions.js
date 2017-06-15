"use strict"

export function postBooks(books){
  return {
    type: "POST_BOOK",
    payload: books
  }
}

export function deleteBook(id){
  return {
    type: "DELETE_BOOK",
    payload: id
  }
}

export function updateBook(book){
  return {
    type: "UPDATE_BOOK",
    payload: book
  }
}

export function getBooks(){
  return {
    type: "GET_BOOKS"
  }
}
